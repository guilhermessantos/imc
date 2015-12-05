jQuery(function($) {
	var context = $( 'body' );

	IMC.vars = {
		body : context
	};

	Dispatcher( IMC.Application, window, [context] );
});