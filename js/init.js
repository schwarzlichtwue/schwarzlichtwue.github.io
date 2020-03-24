var sidenavinstances;
var boxedinstances;
var collapseinstances;
var dropdowninstances;

document.addEventListener('DOMContentLoaded', function() {
	var elems = document.querySelectorAll('.sidenav');
	sidenavinstances = M.Sidenav.init(elems, {});
	var boxed = document.querySelectorAll('.materialboxed');
	boxedinstances = M.Materialbox.init(boxed, {});
	var collapse = document.querySelectorAll('.collapsible');
	collapseinstances = M.Collapsible.init(collapse, {accordion: false});
	var dropdown = document.querySelectorAll('.dropdown-trigger');
	dropdowninstances = M.Dropdown.init(dropdown, {hover: true});


	let materializeLoadedEvent = new CustomEvent("materializeLoaded");
	document.dispatchEvent(materializeLoadedEvent);
 });
