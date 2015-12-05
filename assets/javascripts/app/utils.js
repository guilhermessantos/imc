Module( 'IMC.Utils', function(Utils) {

	Utils.toTitleCase = function(text) {
	    text = text.replace(/(?:^|-)\w/g, function(match) {
	        return match.toUpperCase();
	    });

	    return text.replace(/-/g, '');
	};

	Utils.decode = function(url) {
		return decodeURIComponent( url.replace( /\+/g, ' ' ) );
	};

	Utils.splitFormEncode = function(serialize) {
		return this.decode( serialize ).split( '&' );
	};

	Utils.getTime = function() {
		return ( new Date() ).getTime();
	};

	Utils.setDateTime = function() {
		return new Date( Utils.getTime() );
	};

	Utils.getDateTime = function() {
		var date    = Utils.setDateTime()
		  ,	day     = date.getDate()
		  ,	month   = date.getMonth() + 1
		  ,	year    = date.getFullYear()
		  ,	hour    = date.getHours()
		  ,	minutes = date.getMinutes()
		;

		return {
			date : [day, month, year],
			time : [hour, minutes]
		};
	};

	Utils.getFormatedDate = function() {
		var dateObject   = Utils.getDateTime()
		  , dateFormeted = dateObject.date.join( '/' )
		  , timeFormated = dateObject.time.join( 'h' )
		;

		return dateFormeted + ' ' + timeFormated;
	};

}, {} );