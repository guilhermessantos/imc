Module( 'IMC.Components.Navigation', function(Navigation) {

	Navigation.fn.initialize = function(container) {
		this.container    = container;
		this.menu         = IMC.vars.body.find( '.hamburger' );
		this.storageClear = IMC.vars.body.byAction( 'storage-clear' );
		this.init();
	};

	Navigation.fn.init = function() {
		this.addEventListener();
	};

	Navigation.fn.addEventListener = function() {
		this.menu.on( 'click', this._onClick.bind( this ) );
		this.storageClear.on( 'click', this._onClickClear.bind( this ) );
	};

	Navigation.fn._onClick = function(event) {
		event.preventDefault();
		IMC.vars.body.toggleClass( 'active-menu' );
	};

	Navigation.fn._onClickClear = function(event) {
		event.preventDefault();
		IMC.LocalStorage.clear();
		window.location.reload();
	};

});