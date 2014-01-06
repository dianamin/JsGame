var n = 6;
var width = 3;
var height = 2;
var ids = new Array ();


$(document).ready (function () {
	$('.card').css ('background-color', 'red');

	for (var i = 0; i < height; i++) {
		$('table').append ("<tr> ");
		for (var j = 0; j < width; j++) {
			console.log (j);
			ids [i*3+j] = String (i*3 + j);
			$('tr').append ("<td> <div class = \"card\">" + String (i*3+j+1) + "</div> </td>");
		}
		$('table').append ("</tr>");
	}

})