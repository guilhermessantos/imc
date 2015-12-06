Module( 'IMC.getIp', function(getIp) {

	getIp.create = function() {
		this.request();
	};

	getIp.request = function() {
		this._getJSON();
	};

	getIp._getJSON = function() {
		var args = {
			url      : 'http://ipinfo.io',
			data     : {},
			dataType : 'jsonp',
  			cache    : false
		}
		  , ajax = jQuery.ajax( args )
	    ;

		ajax.done( this._done.bind( this ) );
	};

	getIp._done = function(response, status) {
		localStorage.setItem( 'imcUserIp', response.ip );
	};

}, {} );