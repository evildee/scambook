var express = require('express'),
	app = express(),
	http = require('http').createServer(app),
	io = require('socket.io').listen(http),
	_ = require('underscore'),
	fs = require('fs'),
	mysql = require('mysql'),
	url = require('url');

var mysql_connection = mysql.createConnection(
{
	host: 'localhost',
	user: 'scambook',
	password: '1Ad6326$C',
	database: 'scambook'
});

var users = [];

app.set('ip_address', '10.0.20.99');
app.set('port', 8080);

app.use(express.bodyParser());

app.get('/', function(request, response)
{
	response.render('index');
});

var users = {};

io.on('connection', function(socket)
{
	socket.on('newUser', function(data)
	{
		socket.user_id = data.user_id;
		socket.user_name = data.user_name;

		users[data.user_id] = socket;

		var tmp_users = [];

		for (key in users)
		{
			if (users.hasOwnProperty(key))
			{
				var user = users[key];

				tmp_users.push(
				{
					id: user.user_id,
					name: user.user_name,
					session_id: user.id
				});
			}
		}

		io.sockets.emit('newConnection', tmp_users);
	});

	socket.on('disconnect', function()
	{
		delete users[socket.user_id];

		io.sockets.emit('userDisconnected',
		{
			id: socket.id,
			sender: 'system',
			user_id: socket.user_id
		});
	});
});

app.get('/get_conversation', function(request, response)
{
	var url_parts = url.parse(request.url, true),
		query = url_parts.query;

	var from_user_id = query.from_user_id,
		to_user_id = query.to_user_id;

	if (!from_user_id || !to_user_id)
	{
		return response.json(400, { error: 'MISSING_ARGUMENTS' });
	}

	var query = mysql_connection.query('SELECT u.id AS user_id, CONCAT(u.first_name, " ", u.last_name) AS user_name, ccr.reply, ccr.time FROM chat_conversation_replies ccr INNER JOIN chat_conversations cc ON ccr.conversation_id = cc.id INNER JOIN users u ON ccr.user_id = u.id WHERE (cc.user_one_id = ' + from_user_id + ' AND cc.user_two_id = ' + to_user_id + ') OR (cc.user_one_id = ' + to_user_id + ' AND cc.user_two_id = ' + from_user_id + ') ORDER BY ccr.time DESC', function(error, rows, fields)
	{
		if (error)
		{
			throw error;
		}

		var messages = [];

		for (var i = 0, num_rows = rows.length; i < num_rows; i++)
		{
			messages.push(
			{
				user_id: rows[i].user_id,
				user_name: rows[i].user_name,
				reply: rows[i].reply,
				time: rows[i].time
			});
		}

		return response.json(200, { messages: messages });
	});
});

app.post('/message', function(request, response)
{
	var message = request.body.message,
		from_user_id = request.body.from_user_id,
		to_user_id = request.body.to_user_id;

	if (_.isUndefined(message) || _.isEmpty(message.trim()))
	{
		return response.json(400, { error: 'MESSAGE_MISSING' });
	}

	var from_user = users[from_user_id];

	users[to_user_id].emit('incomingMessage',
	{
		message: message,
		from_user_id: from_user.user_id,
		from_user_name: from_user.user_name
	});

	// Check if first message
	mysql_connection.query('SELECT id FROM chat_conversations WHERE (user_one_id = ' + from_user.user_id + ' AND user_two_id = ' + to_user_id + ') OR (user_one_id = ' + to_user_id + ' AND user_two_id = ' + from_user.user_id + ') LIMIT 1', function(error, rows, fields)
	{
		if (rows == undefined || rows.length == 0)
		{
			var post = { user_one_id: from_user.user_id, user_two_id: to_user_id, time: Date.now() };

			var query = mysql_connection.query('INSERT INTO chat_conversations SET ?', post, function(err, result)
			{
				post = { conversation_id: result.insertId, user_id: from_user.user_id, reply: message, time: Date.now() };

				var query2 = mysql_connection.query('INSERT INTO chat_conversation_replies SET ?', post, function(err, result)
				{
				});
			});
		}
		else
		{
			post = { conversation_id: rows[0].id, user_id: from_user.user_id, reply: message, time: Date.now() };

			var query2 = mysql_connection.query('INSERT INTO chat_conversation_replies SET ?', post, function(err, result)
			{
			});
		}
	});

	response.json(200, { message: 'MESSAGE_RECEIVED' });
});

http.listen(app.get('port'), app.get('ip_address'), function()
{
	console.log('Server is up and running at ' + app.get('ip_address') + ':' + app.get('port') + '...');
});