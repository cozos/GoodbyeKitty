/**
 * Its the button object.
 * @constructor
 */
function Button(element){
	// Image Attributes
	this.ImageFile = document.getElementById(element);
	this.width = this.ImageFile.width * 0.65 * g_resize;
	this.height = this.ImageFile.height * 0.65 * g_resize;
	this.posy = 0.8*g_canvas.height - this.height/2;

	//Button Attributes
	this.type = element;
	if (this.type == "gameplayup" || this.type == "gameplaydown" || this.type == "gamereplayup" || this.type == "gamereplaydown")
	{
	this.posx = g_canvas.width/2 - this.width/2;
	}
	if (this.type == "gamestatsup" || this.type == "gamestatsdown")
	{
	this.posx = g_canvas.width/2 - 1.35*this.width;
	}
	if (this.type == "gameinstructup" || this.type == "gameinstructdown")
	{
	this.posx = g_canvas.width/2 + 0.35*this.width;
	}

}

/**
* Renders the button.
*/
Button.prototype.render = function(){
	
    // Draws the image
  	g_context.drawImage(this.ImageFile, this.posx, this.posy, this.width, this.height);

}