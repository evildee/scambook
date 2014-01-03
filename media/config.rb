# Require any additional compass plugins here.
# require 'zurb-foundation'
add_import_path "bower_components/foundation/scss"

# Set this to the root of your project when deployed:
http_path = "/media"
css_dir = "css"
sass_dir = "sass"
images_dir = "css/css-img"
#http_images_path = "css/css-img"
# javascripts_dir = "js"

output_style = :compact
environment = :production
# sass_options = { :debug_info => true }

# To enable relative paths to assets via compass helper functions. Uncomment:
# relative_assets = true

line_comments = false
color_output = false
cache = false


# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass