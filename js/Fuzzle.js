function fuzzle(){
	this.lives = 9;
	this.velocity = 0;
	this.gravity = 1;
	this.ImageFile = document.getElementById("fuzzle");
	this.width = this.ImageFile.width;
	this.height = this.ImageFile.height;
	this.catx = 200;
	this.caty = 300; 
	
	
}


fuzzle.prototype.render = function(){
	var num = Math.round(Math.random());
	var t;
	if(num == 1){
	t = new trail(-22);
	}
	else{
	t = new trail(-21);
	} 
	g_trail.push(t);
	//if player is within the game boundary defined by floorHeight and ceilingHeight
	
		this.velocity += this.gravity;
		this.caty += this.velocity;
	
	//if player crashes into the floor
	if ((this.caty + this.height) > 640)
	{
		this.caty = (640 - this.height - 1.5);
		this.velocity = 0;		
	}
	//if player crashes into the ceiling
	if (this.caty < 0)
	{
		this.caty = 0 + 1.5;
		this.velocity = 5;
		
	}
	this.gravity = 1;
	g_context.drawImage(this.ImageFile, this.catx, this.caty);
	
}

   
fuzzle.prototype.up = function(){
	this.gravity = -1.5;
}



