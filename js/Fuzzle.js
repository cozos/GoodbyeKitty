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
	this.posx = 0.15 * g_canvas.width;
	this.posy = 0.5 * g_canvas.height;
    this.flag = 0;
}

/**
 * Renders Fuzzle.
 */
fuzzle.prototype.render = function(){
    
    // Instantiates fuzzle's trail
    if (this.flag == 0){
	var t;
	if(Math.round(Math.random()) == 1){
     	t = new trail("trail",-22);
	}
    else{
     	t = new trail("trail",-20);
    }
    g_trail.push(t);
    }
	
    this.flag = 0;
    
	// Updates Fuzzle's velocity and position.
	this.velocity += this.gravity;
	this.posy += this.velocity;
	
	// If player crashes into the floor
	if ((this.posy + this.height) > g_canvas.height)
	{
		this.posy = (g_canvas.height - this.height - 0.5);
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
    g_mousedown = false;
}

/**
* Makes Fuzzle go up.
*/  
fuzzle.prototype.up = function(){
    this.flag = 1;
    var t;
	if(Math.round(Math.random()) == 1){
     	t = new trail("firetrail",-22);
	}
    else{
     	t = new trail("firetrail",-22);
    }
    g_trail.push(t);
    
    // Going up is a pain in the ass without this
    if (this.velocity > 0){
    this.velocity = 0;
    }
    
    //Accelerates upwards
    this.gravity = -2;  
    
    g_context.drawImage(this.ImageFile, this.posx, this.posy);	  
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

