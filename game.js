var canvasBg = document.getElementById('canvasBg');
var ctxJet = canvasJet.getContext('2d');

var gameWidth = canvasBg.width;
var gameHeight = canvasBg.height;

var playerJet;
var fps = 100;
var drawInterval;

var imgSprite = new Image();
imgSprite.src = 'images/sprite.png';
imgSprite.addEventListener('load',main,false);

function main()
{
	startDrawing();

	//creating jet object
	playerJet = new Jet();

	document.addEventListener('keydown',checkKeyDown,false);
	document.addEventListener('keyup',checkKeyUp,false);
}

function startDrawing()
{
	stopDrawing();
	drawInterval = setInterval(draw,fps);
}

function stopDrawing()
{
	clearInterval(drawInterval);
}

function draw()
{
	playerJet.draw();
}

function Jet()
{
	this.srcX = 0;
	this.srcY = 500;
	this.Width = 400;
	this.Height = 200;
	this.drawX = 200;
	this.drawY = 200;
}

Jet.prototype.draw = function ()
{
	clearJet();
	ctxJet.drawImage(imgSprite,this.srcX,this.srcY,this.Width,this.Height,this.drawX,this.drawY,this.Width,this.Height);
};


function clearJet()
{
	ctxJet.clearRect(0,0,gameWidth,gameHeight);
}

function clearCanvas()
{
	ctxBg.clearRect(0,0,gameWidth,gameHeight);
}

function checkKeyDown(e)
{
	var keyID = (e.keyCode) ? e.keyCode : e.which;

	if (keyID === 38 || keyID === 87)	// keyID 38 is the "UP" key and keyID 87 is the "W" key
		{
			// prevents the screen from scrolling down the default manner in any browser
			e.preventDefault();
			clearJet();
			playerJet.drawY = playerJet.drawY - 2;
			draw();
		}
	if (keyID === 39 || keyID === 68)	// keyID 39 is the "RIGHT" key and keyID 68 is the "D" key
		{
			// prevents the screen from scrolling down the default manner in any browser
			e.preventDefault();
			clearJet();
			playerJet.drawX = playerJet.drawX + 2;
			draw();
		}
	if (keyID === 40 || keyID === 83)	// keyID 40 is the "DOWN" key and keyID 83 is the "S" key
		{
			// prevents the screen from scrolling down the default manner in any browser
			e.preventDefault();
			clearJet();
			playerJet.drawY = playerJet.drawY + 2;
			draw();
		}
	if (keyID === 37 || keyID === 65)	// keyID 37 is the "LEFT" key and keyID 65 is the "A" key
		{
			// prevents the screen from scrolling down the default manner in any browser
			e.preventDefault();
			clearJet();
			playerJet.drawX = playerJet.drawX - 2;
			draw();
		}
}

function checkKeyUp(e)
{
	var keyID = (e.keyCode) ? e.keyCode : e.which;

	if (keyID === 38 || keyID === 87)	// keyID 38 is the "UP" key and keyID 87 is the "W" key
		{
			// prevents the screen from scrolling down the default manner in any browser
			e.preventDefault();
		}
	if (keyID === 39 || keyID === 68)	// keyID 39 is the "RIGHT" key and keyID 68 is the "D" key
		{
			// prevents the screen from scrolling down the default manner in any browser
			e.preventDefault();
		}
	if (keyID === 40 || keyID === 83)	// keyID 40 is the "DOWN" key and keyID 83 is the "S" key
		{
			// prevents the screen from scrolling down the default manner in any browser
			e.preventDefault();
		}
	if (keyID === 37 || keyID === 65)	// keyID 37 is the "LEFT" key and keyID 65 is the "A" key
		{
			// prevents the screen from scrolling down the default manner in any browser
			e.preventDefault();
		}
}