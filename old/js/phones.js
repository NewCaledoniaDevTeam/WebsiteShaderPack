/*
\// Store the meta element
var viewport_meta = document.getElementById('viewport-meta');

// Define our viewport meta values
var viewports = {
		default: viewport_meta.getAttribute('content'),
		landscape: 'width=990'
	};

// Change the viewport value based on screen.width
var viewport_set = function() {
		if ( screen.width > 768 )
			viewport_meta.setAttribute( 'content', viewports.landscape );
		else
			viewport_meta.setAttribute( 'content', viewports.default );
	}

// Set the correct viewport value on page load
viewport_set();

// Set the correct viewport after device orientation change or resize
window.onresize = function() { 
	viewport_set(); 
}

//mobile button
*/

//Responsive_RequestDesktopView.();
function Responsive_RequestDesktopView()
{
	// we can dynamically switch, but this doesn't trigger the phone to zoom out and some elements don't resize right
	
	$('html' ).removeClass('responsive touch' ).addClass('force_desktop');
	$('meta[name=viewport]' ).attr('value', '' );
	$(window ).trigger('resize');
	
	window.location.reload();
}
//Responsive_RequestMobileView.();
function Responsive_RequestMobileView()
{
	
	//$('html' ).removeClass('force_desktop' ).addClass('responsive');
	$('meta[name=viewport]' ).attr('value', 'width=766px,initial-scale=1' );
	$(window ).trigger('resize');
	
	window.location.reload();
}