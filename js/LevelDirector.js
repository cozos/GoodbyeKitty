// @open license with citation
// @please feel free to reuse this code for any purpose, citing dougx.net
// @see http://dougx.net/plunder/license.txt for MIT open license text



function LevelDirector()
{
   this.myCurrentLevel = 1;
   this.myCurrentWave = 0;
   this.mySorties = null;
   this.myClock = 0;
   this.myGameOverClock = 0;

   this.myEOLLives = 2;
   this.myEOLScore = 0;
}

LevelDirector.prototype.startLevel = function()
{
   if ( this.myCurrentLevel == 1 )
   {
      g_background = new Background("sky", 5);
      g_foreground = new Background("cloud", 8);
      g_fuzzle = new fuzzle();

      g_gameState = "inlevel";
      g_audioLoop.volume = 0;
      g_audioLoop.play();
   }

   g_background.render();
   g_foreground.render();
   g_fuzzle.render();

   g_inputInterval = setInterval(inputLoop, 1000/24);
   g_renderInterval = setInterval(renderLoop, 1000/24);
   g_clockInterval = setInterval(clockLoop, 100);
   g_createObstacleInterval = setInterval(createObstacle, 1000/1000);
   g_checkCollisionInterval = setInterval(collision, 1000/24);
}

function clockLoop()
{
	g_levelDirector.myClock += 1;
	if (g_levelDirector.myClock == 10)
	{
		g_angelAllianceFlag = 1;
	}
	if (g_levelDirector.myClock == 20)
	{
		g_angelAllianceFlag = 0;
	}
}
