;(function($) {

	$.prototype.byElement = function(name) {
		return this.find( '[data-element="' + name + '"]' );
	};

	$.prototype.byData = function(name) {
		return this.find( '[data-' + name + ']');
	};

	$.prototype.byAction = function(name) {
		return this.find( '[data-action="' + name + '"]' );
	};

	$.prototype.isExist = function(selector, callback) {
		var element = this.find( selector );

		if ( element.length && typeof callback == 'function' ) {
			callback.call( null, element, this );
		}

		return element.length;
	};

	$.prototype.compileHandlebars = function() {
		return Handlebars.compile( this.html() );
	};

	$.prototype.fadeOutRemove = function(time) {
		this.fadeOut(time, function() {
			this.remove();
		}.bind( this ) );
	};

	$.prototype.isEmptyValue = function() {
		return !( $.trim( this.val() ) );
	};

	$.prototype.serializeObject = function() {
		var result = {}
		  , extend = function(i, element) {
			    var node = result[element.name];

				if ( 'undefined' !== typeof node && node !== null ) {
					return result;
				}

				result[element.name] = element.value;
			};

		$.each( this.serializeArray(), extend );
		return result;
	};

})( jQuery );
