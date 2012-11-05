var canvasBg = document.getElementById('canvasBg');
var ctxBg = canvasBg.getContext('2d');

var gameWidth = canvasBg.width;
var gameHeight = canvasBg.height;

var skyWidth = 2880;
var cloudHeight = 155;

const fps = 10;
var drawInterval;

var skyScrollRate = 2;
var cloudScrollRate = 5;

//Sky
var bgDrawSkyX1 = 0;
var bgDrawSkyX2 = 2880;

//Cloud
var bgDrawCloudX1 = 0;
var bgDrawCloudX2 = 2880;


var imgSprite = new Image();
imgSprite.src = 'images/background.png';
imgSprite.addEventListener('load',main,false);

function main()
{
	loopBgDrawing();
}

function loopBgDrawing()
{

	drawInterval = setInterval(moveBg,fps);
}

function stoploopBgDrawing()
{
	clearInterval(drawInterval);
}

function moveBg()
{
	bgDrawSkyX1 -= skyScrollRate;
	bgDrawSkyX2 -= skyScrollRate;
	bgDrawCloudX1 -= cloudScrollRate;
	bgDrawCloudX2 -= cloudScrollRate;


	if (bgDrawSkyX1 <= - 2880)
	{
		bgDrawSkyX1 = 2880;
	}
	else if (bgDrawSkyX2 <= - 2880)
	{
		bgDrawSkyX2 = 2880;
	}

	if (bgDrawCloudX1 <= - 2880)
	{
		bgDrawCloudX1 = 2880;
	}
	else if (bgDrawCloudX2 <= - 2880)
	{
		bgDrawCloudX2 = 2880;
	}

	drawSkyBg();
}

function drawSkyBg()
{
	var srcSkyX = 0;
	var srcSkyY = 0;
	var drawSkyX = 0;
	var drawSkyY = 0;

	var srcCloudX = 0;
	var srcCloudY = 640;
	var drawCloudX = 0;
	var drawCloudY = 485;

	ctxBg.clearRect(0,0,gameWidth,gameHeight);
	ctxBg.drawImage(imgSprite,srcSkyX,srcSkyY,skyWidth,gameHeight,bgDrawSkyX1,drawSkyY,skyWidth,gameHeight);
	ctxBg.drawImage(imgSprite,srcSkyX,srcSkyY,skyWidth,gameHeight,bgDrawSkyX2,drawSkyY,skyWidth,gameHeight);
	ctxBg.drawImage(imgSprite,srcCloudX,srcCloudY,skyWidth,cloudHeight,bgDrawCloudX1,drawCloudY,skyWidth,cloudHeight);
	ctxBg.drawImage(imgSprite,srcCloudX,srcCloudY,skyWidth,cloudHeight,bgDrawCloudX2,drawCloudY,skyWidth,cloudHeight);
}