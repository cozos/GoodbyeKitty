// @open license with citation
// @please feel free to reuse this code for any purpose, citing dougx.net
// @see http://dougx.net/plunder/license.txt for MIT open license text

/**
 * Its the background. 
 * @constructor
 */
function Background(element,velocity)
{
   // Image attributes
   this.BackgroundImage = document.getElementById(element);
   this.myWidth  = this.BackgroundImage.width * g_resize;
   this.myHeight = this.BackgroundImage.height * g_resize;
   
   // Background attributes
   this.myX1 = 0;
   this.myX2 = this.myWidth;
   this.myVelocity = velocity; 
}

/**
 * Renders the background. No idea how it works. 
 */
Background.prototype.render = function()
{
   //the new scrollRate is 1.25 to the power of the level
   var scrollRate = Math.pow(1.25,level)

   var pullWidth = this.myWidth - this.myX;
   if ( pullWidth > g_canvas.width)
   {
      pullWidth = g_canvas.width;
   }

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

   this.myX += (this.myVelocity * scrollRate);

   if (this.myX >= this.myWidth)
   {
      this.myX = 0;
   }
}