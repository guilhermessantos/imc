Module( 'IMC.GetLocation', function(GetLocation) {

	GetLocation.create = function(container) {
		this.coordinates();
	};

	GetLocation.coordinates = function() {
		navigator.geolocation.getCurrentPosition(this.success, this.error);
	};

	GetLocation.success = function(position) {
		IMC.LocalStorage.setItemObject( 'userCords', {
			latitude  : position.coords.latitude,
			longitude : position.coords.longitude
		});
	};

	GetLocation.error = function(error) {
		console.warn( 'Error(' + error.code + '): ' + error.message );
	};

}, {} );