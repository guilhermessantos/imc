Module( 'IMC.Application', function(Application) {

	Application.init = function(container) {
		IMC.GetLocation.create();
		IMC.FactoryComponents.create( container );
		IMC.InputMask.create( container.byElement( 'mask' ) );
	};

	jQuery( '.hamburger' ).on( 'click', function() {
		jQuery( 'body' ).toggleClass( 'active-menu' );
	});

}, {} );
