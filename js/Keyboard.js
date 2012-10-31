function KEY(e)
{
	
   //dbg(e.keyCode + "down", false);



   if ( e.keyCode == 38 )              // up arrow
   {
   		
      g_fuzzle.up();
      
   }
   else if ( e.keyCode == 40 )         // down arrow
   {
      g_fuzzle.down();
   }

}