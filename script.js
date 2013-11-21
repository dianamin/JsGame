
var adresa = ["pics/1.png", "pics/2.png", "pics/3.png", "pics/4.png", "pics/5.png", "pics/6.png"];
var taken = [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20];
var clicked = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var ids = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
var img;
var ok, poz;
var clicks = 0;
var scor = document.getElementById ("scor");

var random = function (){
	var x = Math.random(); 
	if (x < 0.08) return 0;
	if (x < 0.16) return 1;
	if (x < 0.25) return 2;
	if (x < 0.34) return 3;
	if (x < 0.42) return 4;
	if (x < 0.51) return 5;
	if (x < 0.59) return 6;
	if (x < 0.66) return 7;
	if (x < 0.74) return 8;
	if (x < 0.83) return 9;
	if (x < 0.92) return 10;
	return 11;
}

for (var i=0; i<5; i++){
	ok = 0;
	while (ok <= 1) {
		poz = random ();
		if (taken [poz] === 20) {
			taken [poz] = i;
			ok++;
		}
	}
}


for (var i=0; i<12; i++) {
	if (taken [i] === 20){

		taken [i] = 5;
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
var last = 20;


var flip = function (x) {
	console.log (x);
	if (clicked[x] === 0 && last != x){
		clicks++;
		scor.innerHTML = "Clicks: " + clicks;
		console.log (taken[x]);
		console.log (adresa[x]);
		img = document.getElementById (ids[x]);
		img.src = adresa [taken[x]];
		if (last === 20) {
			last = x;
		}
		else {
			if (taken[last] === taken[x]) {
				ok ++;
				last = 20;
				clicked[x] = 1;
				clicked[last] = 1;
			}
			else {
				setTimeout (function () {
					img = document.getElementById (ids[last]);					
					img.src = "pics/hidden.png";
					img = document.getElementById (ids[x]);
					img.src="pics/hidden.png";
					last = 20;
				}, 500);

				}
			}
			if (ok === 6) {
				alert ("Congratz!");
				location.reload ();
			}
		}
	}

