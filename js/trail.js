/**
 * Its Fuzzle's trail.
 * @constructor
 */
function trail(speed){
	// Image Attributes
	this.ImageFile = document.getElementById("trail");
	this.width = this.ImageFile.width;
	this.height = this.ImageFile.height;
	
	// Trail attributues
	this.posx = g_fuzzle.posx - 3;
	this.posy = g_fuzzle.posy + 45;
	this.velocity = speed;
}

/**
* Renders Fuzzle's trail.
*/
trail.prototype.render = function(){
	// Updates x coordinate of trail
    this.posx += this.velocity;
    
    // Draws the image
  	g_context.drawImage(this.ImageFile, this.posx, this.posy);
}


/**
 * What happens when the trail collides into something.
 */
trail.prototype.collided = function(){
	// TODO.
}

