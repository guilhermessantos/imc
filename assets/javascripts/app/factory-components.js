Module( 'IMC.FactoryComponents', function(FactoryComponents) {

	IMC.Components = ( IMC.Components || {} );

	FactoryComponents.create = function(container) {
		container.isExist( '[data-component]', this._constructor.bind( this ) );
	};

	FactoryComponents._constructor = function(elements) {
		elements.each( this._each.bind( this ) );
	};

	FactoryComponents._each = function(index, element) {
		var name;

		element = jQuery( element );
		name    = IMC.Utils.toTitleCase( element.data( 'component' ) );

		if ( typeof IMC.Components[name] != 'function' ) {
			return;
		}

		IMC.Components[name].call( null, element );
	};

}, {} );