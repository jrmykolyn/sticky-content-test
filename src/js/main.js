( function( window, document ) {
	window.addEventListener( 'DOMContentLoaded', function() {
		// --------------------------------------------------
		// DECLARE VARS
		// --------------------------------------------------
		var fixedThreshold = 100; // Position (relative to top of viewport) where elements will be fixed.

		// --------------------------------------------------
		// DEFINE FUNCTIONS
		// --------------------------------------------------
		function handleScroll() {
			var elems = document.querySelectorAll( '.content-block' );

			elems.forEach( function( elem ) {
				var colLeftElem = elem.querySelector( '.col--left' );
				var colLeftPos = colLeftElem.getBoundingClientRect();
				var imgElem = colLeftElem.querySelector( 'img' );
				var imgElemCoords = imgElem.getBoundingClientRect();

				// If the top of the column *has not* crossed the threshold:
				// - Set the `position` of the image to 'static'.
				if ( colLeftPos.top >= fixedThreshold ) {
					imgElem.style.position = 'static';

					// Otherwise:
					// - Apply 'sticky' logic.
				} else {
					// If the bottom of the image *is not* touching the bottom of the column:
					// - Set the image to 'fixed'.
					if ( ( colLeftPos.top + colLeftPos.height ) - imgElemCoords.height >= fixedThreshold ) {
						imgElem.style.position = 'fixed';
						imgElem.style.top = `${fixedThreshold}px`;
						imgElem.style.bottom = 'initial';

						// Else:
						// - Align to image to the bottom of the column (eg. allow it to scroll away).
					} else {
						imgElem.style.position = 'absolute';
						imgElem.style.top = `initial`;
						imgElem.style.bottom = 0;
					}
				}
			} );
		}

		// --------------------------------------------------
		// REGISTER EVENTS
		// --------------------------------------------------
		window.addEventListener( 'scroll', handleScroll );
	} );
} )( window, document );
