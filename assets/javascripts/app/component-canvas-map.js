Module( 'IMC.CanvasMap', function(CanvasMap) {

	CanvasMap.create = function() {
		var container = jQuery( 'body' ).byComponent( 'canvas-map' );

		if( !container.length ) {
			return;
		}

		this.search   = container.byAction( 'keywords' );
		this.keywords = 'academias';
		this.page     = container.data( 'page' );
		this.canvas   = container.byElement( 'canvas' );
		this.position = IMC.LocalStorage.position();
		this.map;
		this.infowindow;
		this.service;
		this.pyrmont;
		this.mapOptions;
		this.place;
		this.init();
	};

	CanvasMap.init = function() {
		if( null == this.position ) {
			window.alert( 'N\u00e3o foi poss\u00edvel obter sua localiza\u00e7\u00e3o atual!' );
			return;
		}

		if( 'result' == this.page ) {
			this.keywords = IMC.LocalStorage.keywords();
		}

		this.initMap();
		this.addEventListener();
	};

	CanvasMap.initMap = function() {
		this.googlePostion = new google.maps.LatLng( this.position.latitude, this.position.longitude );
		this.mapOptions    = {
			center      : this.googlePostion,
			zoom        : 14,
		    mapTypeId   : google.maps.MapTypeId.ROADMAP,
	    	scrollwheel : false,
		};
		this.map        = new google.maps.Map( this.canvas.get(0), this.mapOptions );
		this.infowindow = new google.maps.InfoWindow({size: new google.maps.Size( 150, 50 )});
		this.service    = new google.maps.places.PlacesService( this.map );
		this.bySearch();
	};

	CanvasMap.bySearch = function() {
		this.service.nearbySearch({
			location : this.googlePostion,
			radius   : 5000,
			types    : ['health','point_of_interest','establishment'],
			keyword  : this.keywords
		}, this.callback.bind( this ) );
	};

	CanvasMap.callback = function(results, status) {
		if( status === google.maps.places.PlacesServiceStatus.OK ) {
			jQuery.each( results, function(index, value){
				this.createMarker( results[index] );
			}.bind( this ) );
		}
	};

	CanvasMap.createMarker = function(place) {
		var marker = new google.maps.Marker({
			map      : this.map
		  , position : place.geometry.location
		  ,	title    : place.name + ' - ' + place.vicinity
		});

		marker.addListener(
			  'click'
			, jQuery.proxy( this, '_onClickMarker', {marker: marker, place: place} )
		);
	};

	CanvasMap._onClickMarker = function(marker) {
		this.infowindow.setContent( '<div class="place-results"><p class="place-name">' + marker.place.name + '</h1></p><p>' + marker.place.vicinity + '</p></div>' );
		this.infowindow.open( this.map, marker.marker );
	};

	CanvasMap.addEventListener = function() {
		this.search.on( 'click', this._onClick.bind( this ) );
	};

	CanvasMap._onClick = function(event) {
		event.preventDefault();
		this.search.removeClass( 'filter-active' );
		this.keywords = event.currentTarget.innerHTML;
		jQuery( event.currentTarget ).addClass( 'filter-active' );
		this.initMap();
	};

}, {} );