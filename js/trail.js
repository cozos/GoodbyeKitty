function trail(speed){
	
	
	
	this.ImageFile = document.getElementById("trail");
	this.width = this.ImageFile.width;
	this.height = this.ImageFile.height;
	this.posx = g_fuzzle.catx - 30;
	this.posy = g_fuzzle.caty;
	this.velocity = speed;
	
}


trail.prototype.render = function(){
	
    this.posx += this.velocity;
  	g_context.drawImage(this.ImageFile, this.posx, this.posy);
	
}



