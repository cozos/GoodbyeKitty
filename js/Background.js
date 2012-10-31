
// @open license with citation
// @please feel free to reuse this code for any purpose, citing dougx.net
// @see http://dougx.net/plunder/license.txt for MIT open license text

function Background()
{
	
   this.BackgroundImage = document.getElementById("sky");
  
   this.myX = 0;
   this.myVelocity = 5;
	
   this.myWidth  = this.BackgroundImage.width;
   this.myHeight = this.BackgroundImage.height;
 
   
}

Background.prototype.render = function()
{
   var pullWidth = this.myWidth - this.myX;
   if ( pullWidth > g_canvas.width)
   {
      pullWidth = g_canvas.width;
   }

   //dbg( this.myX + " , " + pullWidth, false);

   g_context.drawImage(this.BackgroundImage,
                       this.myX, 0,
                       pullWidth, this.myHeight,
                       0,g_canvas.height - this.myHeight,
                       pullWidth, this.myHeight);

   if ( pullWidth < g_canvas.width )
   {
        var secondPullWidth = g_canvas.width - pullWidth;
        g_context.drawImage(this.BackgroundImage,
                            0, 0,
                            secondPullWidth, this.myHeight,
                            pullWidth, g_canvas.height - this.myHeight,
                            secondPullWidth, this.myHeight);
   }

   this.myX += this.myVelocity;

   if (this.myX >= this.myWidth)
   {
      this.myX = 0;
   }
}
