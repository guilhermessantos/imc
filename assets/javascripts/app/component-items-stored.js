Module( 'IMC.Components.ItemsStored', function(ItemsStored) {

	ItemsStored.fn.initialize = function(container) {
		this.template = container.data( 'component' );
		this.results  = container.find( 'thead' );
		this.init();
	};

	ItemsStored.fn.init = function() {
		this.setItems();
	};

	ItemsStored.fn.setItems = function() {
		var response = IMC.LocalStorage.testResults();
			response = jQuery.makeArray( response );

		this.results.after( this.render( response ) );
	};

	ItemsStored.fn.render = function(response) {
		var template = Handlebars.templates[this.template];

		return template( response );
	};
});