/**
 * Its Fuzzle.
 * @constructor
 */
function fuzzle(){
	//Image attributes
	this.ImageFile = document.getElementById("fuzzle");
	this.width = this.ImageFile.width;
	this.height = this.ImageFile.height;
	
	//Fuzzle attributes
	this.lives = 9;
	this.velocity = 0;
	this.gravity = 1;
	this.posx = 180;
	this.posy = 300; 
}

/**
 * Renders Fuzzle.
 */
fuzzle.prototype.render = function(){
	
	// Instantiates fuzzle's trail
	var t;
	if(Math.round(Math.random()) == 1) 	t = new trail(-22);
	else 	t = new trail(-21);
	g_trail.push(t);
	
	// Updates Fuzzle's velocity and position.
	this.velocity += this.gravity;
	this.posy += this.velocity;
	
	// If player crashes into the floor
	if ((this.posy + this.height) > 640)
	{
		this.posy = (640 - this.height - 0.5);
		this.velocity = 0;		
	}
	
	// If player crashes into the ceiling
	if (this.posy < 0)
	{
		this.posy = 0 + 0.5;
		this.velocity = 0;
		
	}
	
	if (this.gravity < 2) this.gravity += 2;
	
	// Draws the image
	g_context.drawImage(this.ImageFile, this.posx, this.posy);	
}

/**
 * What happens when fuzzle collides into something.
 */
fuzzle.prototype.collided = function(){
	// TODO.
	alert("You died. But its okay. For now.");
    g_keys = [];
}

/**
* Makes Fuzzle go up.
*/  
fuzzle.prototype.up = function(){
	
    // Going up is a pain in the ass without this
    if (this.velocity > 0){
    this.velocity = 0;
    }
    
    //Accelerates upwards
    this.gravity = -2;    
}

// #CODE MOVED FROM Keyboard.js - it's redundant with Render() though.
/* 
//if player is within the game boundary defined by floorHeight and ceilingHeight
if ((g_fuzzle.posy + g_fuzzle.height) < 640 && g_fuzzle.posy > 10)
{
	g_fuzzle.velocity = -10;
	g_fuzzle.posy += g_fuzzle.velocity;
}
//if player crashes into the floor
if ((g_fuzzle.posy + g_fuzzle.height) > 640)
{
	g_fuzzle.posy = (640 - g_fuzzle.height - 0.5);
	g_fuzzle.velocity = -10;
	g_fuzzle.posy += g_fuzzle.velocity;
}
//if player crashes into the ceiling
if (g_fuzzle.posy < 0)
{
	g_fuzzle.posy = 0 + 0.1;
	g_fuzzle.velocity = 0;
}
*/

