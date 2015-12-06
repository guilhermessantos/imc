Module( 'IMC.GetLocation', function(GetLocation) {

	GetLocation.create = function(container) {
		this.coordinates();
	};

	GetLocation.coordinates = function() {
		var options = {
			enableHighAccuracy : true,
			maximumAge         : 0
		};

		navigator.geolocation.getCurrentPosition( this.success, this.error, options );
	};

	GetLocation.success = function(position) {
		IMC.LocalStorage.setItemObject( 'userCords', {
			latitude  : position.coords.latitude,
			longitude : position.coords.longitude
		});
	};

	GetLocation.error = function(err) {
		 console.warn('ERROR(' + err.code + '): ' + err.message);
	};

}, {} );