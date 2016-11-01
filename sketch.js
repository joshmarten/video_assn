var mirror;
var img;

/////////////////////////////////


function setup() {
	createCanvas(640, 480);
	mirror = createCapture(VIDEO);
	mirror.size(320, 240);
	img = createImage(640, 480);
	img.loadPixels();
}


/////////////////////////////////


function draw() {
	background(255);

	mirror.loadPixels();

	for (var i = 0; i < mirror.pixels.length; i += 4) {
		var r = mirror.pixels[i];
		var g = mirror.pixels[i + 1];
		var b = mirror.pixels[i + 2];
		var a = mirror.pixels[i + 3];

		if (r > b && r > g) {
			r = 255;
			g = 0;
			b = 0;
			a = 255
		}

		if (g > r && g > b) {
			r = 0;
			g = 255;
			b = 0;
			a = 255
		}

		if (b > g && b > r) {
			r = 0;
			g = 0;
			b = 255;
			a = 255
		}

		if (r < 10 && b < 10 && g < 10) {
			r = 255;
			b = 255;
			g = 0;
			a = 255
		}

		if (r > 250 && g > 250 && b > 250) {
			r = 255;
			b = 0;
			g = 255;
			a = 255
		}


		img.pixels[i] = r;
		img.pixels[i + 1] = g;
		img.pixels[i + 2] = b;
		img.pixels[i + 3] = a;
	}

	img.updatePixels();

	push();
	translate(img.width, 0);
	scale(-1, 1);
	image(img, 0, 0);
	pop();
}