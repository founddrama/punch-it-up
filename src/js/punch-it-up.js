/**
 * 
 * Generator at http://benalman.com/code/test/jquery-run-code-bookmarklet/
 * 
 * TODO - configurable options etc.
 */

var r = function(n){
	return Math.floor( (n || 10) * Math.random() );
};

jQuery('html *').css({
	border: r() + 'px solid red',
	'borderRadius': r() + 'px', 'padding': r() + 'px'
});