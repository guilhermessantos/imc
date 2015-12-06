Module( 'IMC.Components.ItemsStored', function(ItemsStored) {

	ItemsStored.fn.initialize = function(container) {
		this.container  = container;
		this.template   = container.data( 'component' );
		this.results    = container.find( '.table-results tbody' );
		this.filter     = container.byAction( 'filter' );
		this.imcResults = jQuery.makeArray( IMC.LocalStorage.testResults() );
		this.response   = this.imcResults;
		this.init();
	};

	ItemsStored.fn.init = function() {
		this.setItems();
		this.addEventListener();
	};

	ItemsStored.fn.addEventListener = function() {
		this.filter.on( 'click', this._onClick.bind( this ) );
	};

	ItemsStored.fn._onClick = function(event) {
		event.preventDefault();
		this.filter.removeClass( 'filter-active' );
		jQuery( event.currentTarget ).addClass( 'filter-active' );
		this.sortable(event.currentTarget.innerHTML);
	};

	ItemsStored.fn.sortable = function(filterType) {
		if( 'Antigo' == filterType ) {
			this.response.sort( this.objectSort );
			this.setItems();
			return;
		}

		this.initialize( this.container );
	};

	ItemsStored.fn.objectSort = function(a, b) {
		if (a.time > b.time) {
			return 1;
		}

		if (a.time < b.time) {
			return -1;
		}

		return 0;
	};

	ItemsStored.fn.setItems = function() {
		this.results.html( this.render( this.response ) );
	};

	ItemsStored.fn.render = function(response) {
		var template = Handlebars.templates[this.template];

		return template( response );
	};
});