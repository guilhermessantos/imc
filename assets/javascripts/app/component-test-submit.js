Module( 'IMC.Components.TestSubmit', function(TestSubmit) {

	TestSubmit.fn.initialize = function(container) {
		this.form      = container.find( 'form' );
		this.inputName = container.find( 'input[name="name"]' );
		this.results   = {};
		this.addEventListener();
	};

	TestSubmit.fn.addEventListener = function() {
		this.inputName.val(
			document.cookie.replace(/(?:(?:^|.*;\s*)imcUser\s*\=\s*([^;]*).*$)|^.*$/, "$1")
		);
		this.form.on( 'submit', this._onSubmit.bind( this ) );
	};

	TestSubmit.fn._onSubmit = function(event) {
		event.preventDefault();

		var value           = this.form.serializeObject();
		this.results.name   = value.name;
		this.results.weight = parseFloat( value.weight.replace( ',', '.' ) );
		this.results.height = parseFloat( value.height.replace( ',', '.' ) );
		this.results.ip     = localStorage.getItem( 'imcUserIp' );
		document.cookie     = 'imcUser=' + value.name;
		this.checkResults();
	};

	TestSubmit.fn.checkResults = function() {
		var height = this.results.height
		  , weight = this.results.weight
		;

		if( height && weight ) {
			this.checkIMC( parseFloat( weight / Math.pow( height, 2 ) ) );
		}
	};

	TestSubmit.fn.checkIMC = function(imc) {
		if( imc < 16 ) {
			this.results.classification = 'Magreza grave';
			this.results.search         = 'academias';
		} else if( imc < 17 ) {
			this.results.classification = 'Magreza moderada';
			this.results.search         = 'academias';
		} else if( imc < 18.5 ) {
			this.results.classification = 'Magreza leve';
			this.results.search         = 'academias';
		} else if( imc < 25 ) {
			this.results.classification = 'Saudável';
			this.results.search         = 'academias';
		} else if( imc < 30 ) {
			this.results.classification = 'Sobrepeso';
			this.results.search         = 'nutricionistas';
		} else if( imc < 35 ) {
			this.results.classification = 'Obesidade Grau I';
			this.results.search         = 'nutricionistas';
		} else if( imc < 40 ) {
			this.results.classification = 'Obesidade Grau II (severa)';
			this.results.search         = 'nutricionistas';
		} else if( imc >= 40 ) {
			this.results.classification = 'Obesidade Grau III (mórbida)';
			this.results.search         = 'nutricionistas';
		}

		this.results.imc  = imc.toPrecision( 4 );
		this.results.date = IMC.Utils.getFormatedDate();

		this.storeResult();
	};

	TestSubmit.fn.storeResult = function() {
		IMC.LocalStorage.setItems( this.results );
	};

});