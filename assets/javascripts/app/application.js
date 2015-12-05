Module( 'IMC.Application', function(Application) {

	Application.init = function(container) {
		IMC.FactoryComponents.create( container );
		IMC.GetLocation.create();
		IMC.getIp.create();
		IMC.InputMask.create( container.byElement( 'mask' ) );
	};

}, {} );