var colors = [
	[247, 149, 51],
	[243, 112, 85],
	[239, 78, 123],
	[161, 102, 171],
	[80, 115, 184],
	[16, 152, 173],
	[7, 179, 155],
	[109, 186, 130]];

var step = 0;
var colorIndices = [0, 1, 2, 3];
var gradientSpeed = 0.008;
var random_color = false;
var clip_num = 5;


function updateGradient() {
	if (document.getElementById("gradient") === undefined)
		return;
	
	var c0_0 = colors[colorIndices[0]];
	var c0_1 = colors[colorIndices[1]];
	var c1_0 = colors[colorIndices[2]];
	var c1_1 = colors[colorIndices[3]];

	var istep = 1 - step;
	var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
	var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
	var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
	var color1 = "rgb(" + r1 + "," + g1 + "," + b1 + ",0.6)";

	var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
	var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
	var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
	var color2 = "rgb(" + r2 + "," + g2 + "," + b2 + ",0.6)";

	//TODO: random dir
	document.getElementById("gradient").style.background = " linear-gradient(127deg, " + color1 + ", " + color2 + " 70%)";
	//document.getElementById("gradient").style.background = "-moz-linear-gradient(left, " + color1 + " 0%, " + color2 + " 100%)";

	step += gradientSpeed;
	if (step >= 1) {
		step %= 1;
		if (random_color) {
			colorIndices[0] = colorIndices[1];
			colorIndices[2] = colorIndices[3];
			colorIndices[1] = (colorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
			colorIndices[3] = (colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
		} else {
			colorIndices[0] = (colorIndices[0] + 1) % colors.length;
			colorIndices[1] = (colorIndices[1] + 1) % colors.length;
			colorIndices[2] = (colorIndices[2] + 1) % colors.length;
			colorIndices[3] = (colorIndices[3] + 1) % colors.length;
		}
	}
}

setInterval(updateGradient, 10);