Module( 'IMC.Components.CanvasMap', function(CanvasMap) {

	CanvasMap.fn.initialize = function(container) {
		this.embed    = container.byElement( 'maps-embed' );
		this.search   = container.byAction( 'keywords' );
		this.coords   = IMC.LocalStorage.getItem( 'userCords' );
		this.keywords = 'academias';
		this.init();
	};

	CanvasMap.fn.init = function() {
		this.urlMap();
		this.addEventListener();
	};

	CanvasMap.fn.addEventListener = function() {
		this.search.on( 'click', this._onClick.bind( this ) );
	};

	CanvasMap.fn._onClick = function(event) {
		event.preventDefault();
		this.search.removeClass( 'filter-active' );
		this.keywords = event.currentTarget.innerHTML;
		jQuery( event.currentTarget ).addClass( 'filter-active' );
		this.urlMap();
	};

	CanvasMap.fn.urlMap = function() {
		var url  = 'https://www.google.com/maps/embed';
			url += '?pb=!1m12!1m8!1m3!1d7551.470062031464!2d';
			url += this.coords.longitude;
		    url += '!3d';
		    url += this.coords.latitude;
		    url += '!3m2!1i1024!2i768!4f13.1!2m1!1s';
		    url += this.keywords;
		    url += '!5e0!3m2!1spt-BR!2sbr!';
		this.embed.attr( 'src', url );
	};

});