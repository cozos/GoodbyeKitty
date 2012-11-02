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
	this.gravity = 2;
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
		this.posy = (640 - this.height - 1.5);
		this.velocity = 0;		
	}
	
	// If player crashes into the ceiling
	if (this.posy < 0)
	{
		this.posy = 0 + 1.5;
		this.velocity = 5;
		
	}
	// Sets gravity to default
	this.gravity = 2;
	
	// Draws the image
	g_context.drawImage(this.ImageFile, this.posx, this.posy);
	
}

/**
 * Makes Fuzzle go up.
 */  
fuzzle.prototype.up = function(){
    // Going up is a pain in the ass without this
    if (this.velocity > 0){
    this.velocity = 0;
    }
    
    // Accelerates upwards
    this.gravity = -4;
}

/**
 * What happens when fuzzle collides into something.
 */
fuzzle.prototype.collided = function(){
	// TODO.
	alert("You died. But its okay. For now.");
}


