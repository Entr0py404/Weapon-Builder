function setupweapon() {

	//Body
	var weaponbody = new Image();
	weaponbody.src = "parts/body/body_" + document.getElementById('bodySlider').value + ".png";

	//Barrel
	var weaponbarrel = new Image();
	weaponbarrel.src = "parts/barrel/barrel_" + document.getElementById('barrelSlider').value + ".png";

	//Stock
	var weaponstock = new Image();
	weaponstock.src = "parts/stock/stock_" + document.getElementById('stockSlider').value + ".png";

	//Scope
	if (document.getElementById('scopeSlider').value > 0) {
		var weaponscope = new Image();
		weaponscope.src = "parts/scope/scope_" + document.getElementById('scopeSlider').value + ".png";
	}

	//Body Loaded
	weaponbody.onload = function () {
		buildweapon();
	}

	//Barrel Loaded
	weaponbarrel.onload = function () {
		buildweapon();
	}

	//Stock Loaded
	weaponstock.onload = function () {
		buildweapon();
	}

	//Scope Loaded
	if (document.getElementById('scopeSlider').value > 0) {
		weaponscope.onload = function () {
			buildweapon();
		}
	}

	function buildweapon() {
		var canvas = document.getElementById('canvas');
		var ctx = canvas.getContext('2d');
		canvas.width = 64;
		canvas.height = 32;
		//Draw Body
		ctx.drawImage(weaponbody, 0, 0);
		//Draw Barrel
		ctx.drawImage(weaponbarrel, 0, 0);
		//Draw Stock
		ctx.drawImage(weaponstock, 0, 0);
		//Draw Scope
		if (document.getElementById('scopeSlider').value > 0) {
			ctx.drawImage(weaponscope, 0, 0);
		}
	}

}

function randomizeweapon() {
	//Body
	if (document.getElementById("randomizebody").checked == false) {
		document.getElementById('bodySlider').value = Math.floor(Math.random() * 28) + 1;
		document.getElementById('bodySliderNumberText').innerHTML = document.getElementById('bodySlider').value + '/' + document.getElementById('bodySlider').max;
	}
	//Barrel
	if (document.getElementById("randomizebarrel").checked == false) {
		document.getElementById('barrelSlider').value = Math.floor(Math.random() * 30) + 1;
		document.getElementById('barrelSliderNumberText').innerHTML = document.getElementById('barrelSlider').value + '/' + document.getElementById('barrelSlider').max;
	}
	//Stock
	if (document.getElementById("randomizestock").checked == false) {
		document.getElementById('stockSlider').value = Math.floor(Math.random() * 22) + 1;
		document.getElementById('stockSliderNumberText').innerHTML = document.getElementById('stockSlider').value + '/' + document.getElementById('stockSlider').max;
	}
	//Scope
	if (document.getElementById("randomizescope").checked == false) {
		document.getElementById('scopeSlider').value = Math.floor(Math.random() * 19);
		document.getElementById('scopeSliderNumberText').innerHTML = document.getElementById('scopeSlider').value + '/' + document.getElementById('scopeSlider').max;
	}

	setupweapon();
}

function saveImage() {
	var tempname = "";
	var test = document.querySelectorAll('[class=slider]'), i;
	for (i = 0; i < test.length; ++i) {
		tempname += "-" + test[i].value;
	}
	var download = document.getElementById("download");
	download.download = "Weapon_Builder" + tempname + ".png"
	var imageurl = document.getElementById("canvas").toDataURL("image/png").replace("image/png", "image/octet-stream");
	download.setAttribute("href", imageurl);
}
