Module( 'IMC.HandlebarsHelpers', function(HandlebarsHelpers) {

	HandlebarsHelpers.create = function() {
		Handlebars.registerHelper( 'limitText', function(text, limit) {
            return ( text.length > limit ) ? text.substr( 0, limit ) + '...' : text;
        });
	};
}, {} );