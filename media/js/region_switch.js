function RegionSwitcher()
{
    // The class common to all region fields.
    this.region_field_class = '';
    // The field name the server expects, usually "state".
    this.region_field_name = '';
    // The string to change the name of the region field when disabled.
    this.disabled_region_field_name = '';
    // The three elements representing the various region fields.
    this.us_states_element = '';
    this.ca_provinces_element = '';
    this.other_region_element = '';
    // Included the following four items to allow i18n on the labels.
    this.region_label = '';
    this.us_states_label_text = 'State:';
    this.ca_provinces_label_text = 'Province:';
    this.other_region_label_text = 'Region:';
    //jquery selectmenu class
    this.use_jquery_selectmenu = false;
    this.jquery_selectmenu_class = 'selectmenu';
    // The first run should not clear the region field (see start method).
    this.clear_region = false;

    this.start = function(container, country_field)
    {
        if (this.clear_region == true)
            container.find('.' + this.region_field_class).val('');
        this.clear_region = true;
        switch (country_field.val())
        {
            case '':
            case 'US':
            case 'USA':
            case 'United States':
                container.find('#' + this.region_label)
                        .text(this.us_states_label_text);
                this.change_region(container, this.us_states_element);
                break;
            case 'CA':
            case 'Canada':
                container.find('#' + this.region_label)
                        .text(this.ca_provinces_label_text);
                this.change_region(container, this.ca_provinces_element);
                break;
            default:
                container.find('#' + this.region_label)
                        .text(this.other_region_label_text);
                this.change_region(container, this.other_region_element);
        }

        return true;
    };

    this.change_region = function(container, region_element)
    {    
        //setup the jquery selectmenus
		if(this.use_jquery_selectmenu == true)
			$('.' + this.region_field_class).selectmenu('destroy');
		
        container.find('.' + this.region_field_class)
                .attr('name', this.disabled_region_field_name)
                .attr('style', 'display:none;');
        container.find('#' + region_element)
                .attr('name', this.region_field_name)
                .removeAttr('style');

		if(this.use_jquery_selectmenu == true && $("#" + region_element).hasClass(this.jquery_selectmenu_class))
			$("#" + region_element).selectmenu();

        return true;
    };
};
