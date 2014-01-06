var n = 6;
var width = 6;
var height = 2;
var ids = new Array ();
var found = new Array ();


var random = function () {
	var value = Math.floor (n*Math.random ()) + 1;
	while (found [value] == 2) {
		value = Math.floor (n*Math.random ()) + 1;
	}
	found[value]++;
	return value;
}


$(document).ready (function () {

	for (var i = 0; i < n; i++) found[i] = 0;
	for (var i = 0; i < height; i++) {
		$('table').append ("<tr> ");
		for (var j = 0; j < width; j++) {
			var value = random ();
			ids [i*3+j] = String (value-1);
			$('tr:last').append ("<td> <div class = \"card\">" + String (value) + "</div> </td>");
		}
		$('table').append ("</tr>");
	}

	$('.card').css ('background-color', 'darkred');

	$('.card').on ('click', function () {
		$('.card').css ('background-color', 'white');
	});

})