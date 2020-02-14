document.addEventListener('DOMContentLoaded', function() {
	var elems = document.querySelectorAll('.sidenav');
	var instances = M.Sidenav.init(elems, {});
	var boxed = document.querySelectorAll('.materialboxed');
	var instances = M.Materialbox.init(boxed, {});
	var collapse = document.querySelectorAll('.collapsible');
	var instances = M.Collapsible.init(collapse, {accordion: false});
 });
