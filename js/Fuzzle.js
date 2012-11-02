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
	
	// Draws the image
	g_context.drawImage(this.ImageFile, this.posx, this.posy);	
}

/**
 * What happens when fuzzle collides into something.
 */
fuzzle.prototype.collided = function(){
	// TODO.
	alert("You died. But its okay. For now.");
}


