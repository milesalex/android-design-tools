function getHexValue(){
	var opacityInput = document.getElementById("opacity");

	if (opacityInput.value == "") return false;

	opacityInput = parseInt(opacityInput.value);

	if ((opacityInput >= 0) && (opacityInput <= 100)) {
		// Opacity input
		opacityInput = opacityInput / 100;

		// Opacity * color space
		var alpha = opacityInput * 255;

		// Round rgbA to nearest whole number
		var roundedAlpha = Math.round(alpha);

		// Convert transparency to hex
		var hexString = roundedAlpha.toString(16);

		// Hex output
		var hexOutput = document.getElementById("hex");

		hexOutput.innerText = "#" + hexString;
	} else {
		alert('Enter a number inbetween 0 and 100');
	}

}
;
