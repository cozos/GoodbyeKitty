/**
 * Its an obstacle.
 * @constructor
 */
function obstacle(element,velocity){
	// Image attributes
	this.ImageFile = document.getElementById(element);
	this.width = this.ImageFile.width;
	this.height = this.ImageFile.height;
	
	// Obstacle attributes
	this.type = element;
	this.xvelocity = velocity;
	this.posx = 800;
	this.posy = Math.round((Math.random()*640));
	if (this.posy + this.height > 640)	 this.posy = (640 - this.height - 1.5);
	
	// Devil attributes
	this.gravity = Math.random()*0.5 - 0.25;
	this.yvelocity = 0;
	this.counter = Math.round(Math.random()*5 + 5);
}

/**
 * Renders obstacles.
 */
obstacle.prototype.render = function(){	
	
	// IF OBSTACLE IS OF TYPE DEVIL
	if (this.type == "devil"){
		
		// Makes sure that devils move in one path for a while to prevent erratic movement
		if (this.counter == 0){
			this.counter = Math.round(Math.random()*5+10);
			this.gravity = Math.random()*0.5 - 0.265;
		}
	
		// Updates gravity and y coordinate of devil
		this.yvelocity += this.gravity;	
		this.posy += this.yvelocity;
		this.counter--;
	
		// If devil crashes into the floor, reset direction
		if ((this.posy + this.height) > 640)
		{
			this.posy = (640 - this.height - 1.5);
			this.yvelocity = 0;		
			this.counter = Math.round(Math.random()*5+10);
			this.gravity = (Math.random()*-0.25);
		}
		// If devil crashes into the ceiling, reset direction
		if (this.posy < 0)
		{
			this.posy = 0 + 1.5;
			this.yvelocity = 5;
			this.counter = Math.round(Math.random()*5+10);
			this.gravity = (Math.random()*0.25);
		}
	}
	
	// IF OBSTACLE IS OF TYPE PILLAR
	else if (this.type == "pillar"){
		//nothing?
	}
	
	// Update x coordinate of obstacle
    this.posx += this.xvelocity;
  	
  	// Render the image
  	g_context.drawImage(this.ImageFile, this.posx, this.posy);
}

/**
 * What happens when an obstacle collides into something.
 */
obstacle.prototype.collided = function(){
	// TODO.
}

