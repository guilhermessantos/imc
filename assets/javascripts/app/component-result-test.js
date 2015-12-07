Module( 'IMC.Components.ResultTest', function(ResultTest) {

	var DEFAULT_WEIGHT = 'Parabéns, você está na medida certa! Confira seu IMC abaixo.'
	  , UNDER_WEIGHT   = 'Opss, você abaixo de seu peso ideal! Confira seu IMC abaixo.'
	  , OVER_WEIGHT    = 'Opss, você está acima do seu peso ideal! Confira seu IMC abaixo'
	  , ICON_HAPPY     = 'icon-smiling'
	  , ICON_SAD       = 'icon-sad'
	  , CONGRATS       = 'Continue assim!'
	  , CONGRATS_SAD   = 'Sua saúde não está em dia.'
	  , CONGRATS_ACAD  = 'algumas academias mais perto de você.'
	  , CONGRATS_NUTRI = 'alguns nutricionistas mais perto de você.'
	;

	ResultTest.fn.initialize = function(container) {
		this.icon        = container.find( '.result-test-info i' );
		this.message     = container.find( '.result-test-info p' );
		this.imcText     = container.find( '.imc' );
		this.congrats    = container.find( '.congrats' );
		this.congratsMsg = container.find( '.congrats-msg span' );
		this.imc         = IMC.LocalStorage.imc();
		this.init();

	};

	ResultTest.fn.init = function() {
		if( null == this.imc ) {
			window.alert( 'Desculpe, não foi possível obter seu IMC.');
			this.locationTest();
			return;
		} else if( this.imc < 18.5 ) {
			this.underWeight();
		} else if( this.imc < 25 ) {
			this.defaultWeight();
		} else if( this.imc >= 25 ) {
			this.overWeight();
		}

		this.imcText.text( this.imc );
	};

	ResultTest.fn.defaultWeight = function() {
		this.icon.addClass( ICON_HAPPY );
		this.message.text( DEFAULT_WEIGHT );
		this.congrats.text( CONGRATS );
		this.congratsMsg.text( CONGRATS_ACAD );
	};

	ResultTest.fn.underWeight = function() {
		this.icon.addClass( ICON_SAD );
		this.message.text( UNDER_WEIGHT );
		this.congrats.text( CONGRATS_SAD );
		this.congratsMsg.text( CONGRATS_ACAD );
	};

	ResultTest.fn.overWeight = function() {
		this.icon.addClass( ICON_SAD );
		this.message.text( OVER_WEIGHT );
		this.congrats.text( CONGRATS_SAD );
		this.congratsMsg.text( CONGRATS_NUTRI );
	};

	ResultTest.fn.locationTest = function() {
		window.location.replace( 'test.html' );
	};

});