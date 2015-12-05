Module( 'IMC.InputMask', function(InputMask) {

	InputMask.create = function(container) {
		this.container = container;
		this.addEventListener();
	};

	InputMask.addEventListener = function() {
		this.container.on( 'keyup', this._onKeyup.bind( this ) );
	};

	InputMask._onKeyup = function(event) {
		event.preventDefault();

		var value = event.currentTarget.value;
		    value = value.replace( /\D/, "" );
		    value = value.replace( /^[0]+/, "" );

        switch( value.length ) {
        	case 1:
        		value = '0,0' + value;
        		break;
            case 2:
        		value = '0,' + value;
        		break;
        }

	   	event.currentTarget.value = value.replace( /^(\d{1,})(\d{2})$/, "$1,$2" );
	};

}, {} );