Module( 'IMC.LocalStorage', function(LocalStorage) {

	LocalStorage.setItems = function(response) {
		var keyName = 'imcSaveResults'
		  , items   = this.getItem( keyName )
		  , data    = [response]
		;

		if( null == items ) {
			this.setItemObject( keyName, data );
			return;
		}

		jQuery.each( items, function(index, value) {
			data[index + 1] = value;
		});

		this.setItemObject( keyName, data );
	};

	LocalStorage.setItemObject = function(keyName, response) {
		localStorage.setItem( keyName, JSON.stringify( response ) );
	};

	LocalStorage.getItem = function(keyName) {
		return JSON.parse( localStorage.getItem( keyName ) );
	};

	LocalStorage.removeItem = function(keyName) {
		return localStorage.removeItem( keyName );
	};

	LocalStorage.clear = function() {
		return localStorage.clear();
	};

	LocalStorage.keywords = function() {
		return localStorage.getItem( 'imcKeywords' );
	};

	LocalStorage.position = function() {
		return this.getItem( 'userCords' );
	};

	LocalStorage.imc = function() {
		return localStorage.getItem( 'imcValue' );
	};

	LocalStorage.testResults = function() {
		return this.getItem( 'imcSaveResults' );
	};

}, {} );