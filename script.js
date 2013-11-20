
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
var last = 7, lastpoz;


	var img1 = function () {
		if (clicked[0] === 0){
			clicks++;
			scor.innerHTML = "Clicks: " + clicks;
			console.log (taken[0]);
			console.log (adresa[0]);
			img = document.getElementById (ids[0]);
			img.src = adresa [taken[0]];
			if (last === 7) {
				last = 0;
			}
			else {
				if (taken[last] === taken[0]) {
					ok ++;
					last = 7;
					clicked[0] = 1;
					clicked[last] = 1;
				}
				else {
					img = document.getElementById (ids[last]);					
					img.src = "pics/hidden.png";
					img = document.getElementById (ids[0]);
					img.src="pics/hidden.png";
					last = 7;
					 
				}
			}
			if (ok == 3) {
				alert ("Congratz!");
				location.reload;
			}
		}
	}

	var img2 = function () {
		if (clicked [1] === 0) {
			clicks++;
			scor.innerHTML = "Clicks: " + clicks;
			console.log (taken[1]);
			console.log (adresa[1]);
			img = document.getElementById (ids[1]);
			img.src = adresa [taken[1]];
			if (last === 7) {
				last = 1;
			}
			else {
				if (taken[last] === taken[1]) {
					ok ++;
					last = 7;
					clicked[1] = 1;
					clicked[last] = 1;
				}
				else {
					img = document.getElementById (ids[last]);
					img.src = "pics/hidden.png";
					img = document.getElementById (ids[1]);
					img.src="pics/hidden.png";
					last = 7;
					 
				}
			}
			if (ok == 3) {
				alert ("Congratz!");
				location.reload;
			}
		}
	}
	var img3 = function () {
		if (clicked[2] === 0) {
			clicks++;
			scor.innerHTML = "Clicks: " + clicks;
			console.log (taken[2]);
			console.log (adresa[2]);
			img = document.getElementById (ids[2]);
			img.src = adresa [taken[2]];
			if (last === 7) {
				last = 2;
			}
			else {
				if (taken[last] === taken[2]) {
					ok ++;
					last = 7;
					clicked[2] = 1;
					clicked[last] = 1;
				}
				else {
					img = document.getElementById (ids[last]);
					img.src = "pics/hidden.png";
					img = document.getElementById (ids[2]);
					img.src="pics/hidden.png";
					last = 7;
					 
				}
			}
			if (ok == 3) {
				alert ("Congratz!");
				location.reload;
			}
		}
	}
	var img4 = function () {
		if (clicked[3] === 0) {
			clicks++;
			scor.innerHTML = "Clicks: " + clicks;
			console.log (taken[3]);
			console.log (adresa[3]);
			img = document.getElementById (ids[3]);
			img.src = adresa [taken[3]];
			if (last === 7) {
				last = 3;
			}
			else {
				if (taken[last] === taken[3]) {
					ok ++;
					last = 7;
					clicked[3] = 1;
					clicked[last] = 1;
				}
				else {
					img = document.getElementById (ids[last]);
					img.src = "pics/hidden.png";
					img = document.getElementById (ids[3]);
					img.src="pics/hidden.png";
					last = 7;
					 
				}
			}
			if (ok == 3) {
				alert ("Congratz!");
				location.reload ();
			}
		}
	}
	var img5 = function () {
			if (clicked[4] === 0) {
			clicks++;
			scor.innerHTML = "Clicks: " + clicks;
			console.log (taken[4]);
			console.log (adresa[4]);
			img = document.getElementById (ids[4]);
			img.src = adresa [taken[4]];
			if (last === 7) {
				last = 4;
			}
			else {
				if (taken[last] === taken[4]) {
					ok ++;
					last = 7;
					clicked[4] = 1;
					clicked[last] = 1;
				}
				else {
					img = document.getElementById (ids[last]);
					img.src = "pics/hidden.png";
					img = document.getElementById (ids[4]);
					img.src="pics/hidden.png";
					last = 7;
					 
				}
			}
			if (ok == 3) {
				alert ("Congratz!");
				location.reload ();
			}
		}
	}
	var img6= function () {
		if (clicked[5] === 0) {
			clicks++;
			scor.innerHTML = "Clicks: " + clicks;
			console.log (taken[5]);
			console.log (adresa[5]);
			img = document.getElementById (ids[5]);
			img.src = adresa [taken[5]];
			if (last === 7) {
				last = 5;
			}
			else {
				if (taken[last] === taken[5]) {
					ok ++;
					last = 7;
					clicked[5] = 1;
					clicked[last] = 1;
				}
				else {
					img = document.getElementById (ids[last]);
					img.src = "pics/hidden.png";
					img = document.getElementById (ids[5]);
					img.src="pics/hidden.png";
					last = 7;
					 
				}
			}
			if (ok == 3){
			 alert ("Congratz!");
			 location.reload ();
			}
		}
	}
	
