var canvasPlayer = document.getElementById('canvasPlayer');
var ctxPlayer = canvasPlayer.getContext('2d');

var gameWidth = canvasPlayer.width;
var gameHeight = canvasPlayer.height;
var floorHeight = 600;
var ceilingHeight = -1;
var playerWidth = 95;
var playerHeight = 125;

var player;
var drawInterval;

var fps = 10;
var gravity = 0.01;
var thrust = -1;

var imgSprite = new Image();
imgSprite.src = 'images/background.png';
imgSprite.addEventListener('load',main,false);

function main()
{
	player = new Player();
	startDrawing();
	document.addEventListener('keydown',checkKeyDown,false);
	document.addEventListener('keyup',checkKeyUp,false);
}

function update()
{
	//if player is within the game boundary defined by floorHeight and ceilingHeight
	if ((player.drawY + playerHeight) < floorHeight && player.drawY > ceilingHeight)
	{
		player.velocity += gravity;
		player.drawY += player.velocity;
	}
	//if player crashes into the floor
	if ((player.drawY + playerHeight) > floorHeight)
	{
		player.drawY = (floorHeight - playerHeight - 1);
		player.velocity = 0;		
	}
	//if player crashes into the ceiling
	if (player.drawY < ceilingHeight)
	{
		player.drawY = ceilingHeight + 1;
		player.velocity = 0;
	}
	
	draw();
}

function gravity()
{
}

function draw()
{
	player.draw();
}

function startDrawing()
{
	stopDrawing();
	drawInterval = setInterval(update,fps);
}

function stopDrawing()
{
	clearInterval(drawInterval);
}

function Player()
{
	this.x = 0;
	this.y = 795;
	this.drawX = 30;
	this.drawY = 0;
	this.width = playerWidth;
	this.height = playerHeight;
	this.velocity = 0;
}

Player.prototype.draw = function()
{
	clearPlayer();

ctxPlayer.drawImage(imgSprite,this.x,this.y,this.width,this.height,this.drawX,this.drawY,this.width,this.height);
};

function clearPlayer()
{
	ctxPlayer.clearRect(0,0,gameWidth,gameHeight);
}

function checkKeyDown(e)
{
	var keyID = e.keyCode || e.which;
	if (keyID === 38) //check if up arrow is pressed
	{
		//e.preventDefault();
	
		//if player is within the game boundary defined by floorHeight and ceilingHeight
		if ((player.drawY + playerHeight) < floorHeight && player.drawY > ceilingHeight)
		{
			player.velocity = thrust;
			player.drawY += player.velocity;
		}
		//if player crashes into the floor
		if ((player.drawY + playerHeight) > floorHeight)
		{
			player.drawY = (floorHeight - playerHeight - 1);
			player.velocity = thrust;
			player.drawY += player.velocity;
		}
		//if player crashes into the ceiling
		if (player.drawY < ceilingHeight)
		{
			player.drawY = ceilingHeight + 1;
			player.velocity = 0;
		}
	}
	if (keyID === 40) //check if down arrow is pressed
	{
		e.preventDefault();
	}
}

function checkKeyUp(e)
{
	var keyID = e.keyCode || e.which;
	if (keyID === 38) //check if up arrow is released
	{
		e.preventDefault();
		if (player.drawY == ceilingHeight)
		{
			player.drawY = ceilingHeight + 1;
			player.velocity += gravity;
			player.drawY += player.velocity;

		}

	}
	if (keyID === 40) //check if down arrow is released
	{
		e.preventDefault();
	}
}