Module( 'IMC.Components.ItemsStored', function(ItemsStored) {

	ItemsStored.fn.initialize = function(container) {
		this.container = container;
		this.template  = this.container.data( 'component' );
		this.results   = this.container.find( 'thead' );
		this.init();
	};

	ItemsStored.fn.init = function() {
		this.getItem();
	};

	ItemsStored.fn.getItem = function() {
		var response = IMC.LocalStorage.getItem( localStorage.getItem( 'imcUserIp' ) );
		this.results.after( this.render( jQuery.makeArray( response ) ) );
	};

	ItemsStored.fn.render = function(response) {
		var template = Handlebars.templates[this.template];

		return template( response );
	};
});