
var adresa = ["pics/1.png", "pics/2.png", "pics/3.png"];
var taken = [10, 10, 10, 10, 10, 10];
var clicked = [0, 0, 0, 0, 0, 0];
var ids = ["1", "2", "3", "4", "5", "6"];
var img;
var ok, poz;
var clicks = 0;
var scor = document.getElementById ("scor");

var random = function (){
	var x = Math.random(); 
	if (x < 0.17) return 0;
	if (x < 0.34) return 1;
	if (x < 0.51) return 2;
	if (x < 0.66) return 3;
	if (x < 0.83) return 4;
	return 5;
}

for (var i=0; i<2; i++){
	ok = 0;
	while (ok < 2) {
		poz = random ();
		if (taken [poz] === 10) {
			taken [poz] = i;
			ok++;
		}
	}
}


for (var i=0; i<6; i++) {
	if (taken [i] === 10){

		taken [i] = 2;
	}
	console.log (taken[i]);
}

var delay = function ()
{
	var d1, d2;
	d1 = new Date ();
	d2 = new Date ();
	console.log(d1);
	while (d2-d1<100) {
		console.log (d2);
		d2 = new Date ();
	}
}


ok = 0;
var last = 7;


var flip = function (x) {
	console.log (x);
	if (clicked[x] === 0 && last != x){
		clicks++;
		scor.innerHTML = "Clicks: " + clicks;
		console.log (taken[x]);
		console.log (adresa[x]);
		img = document.getElementById (ids[x]);
		img.src = adresa [taken[x]];
		if (last === 7) {
			last = x;
		}
		else {
			if (taken[last] === taken[x]) {
				ok ++;
				last = 7;
				clicked[x] = 1;
				clicked[last] = 1;
			}
			else {
				setTimeout (function () {
					img = document.getElementById (ids[last]);					
					img.src = "pics/hidden.png";
					img = document.getElementById (ids[x]);
					img.src="pics/hidden.png";
					last = 7;
				}, 500);

				}
			}
			if (ok == 3) {
				alert ("Congratz!");
				location.reload;
			}
		}
	}

