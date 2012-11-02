function keyboard()
{
	if (g_keys[38] == true) //check if up arrow is pressed
	{
	
		//if player is within the game boundary defined by floorHeight and ceilingHeight
		if ((g_fuzzle.caty + g_fuzzle.height) < 640 && g_fuzzle.caty > 10)
		{
			g_fuzzle.velocity = -10;
			g_fuzzle.caty += g_fuzzle.velocity;
		}
		//if player crashes into the floor
		if ((g_fuzzle.caty + g_fuzzle.height) > 640)
		{
			g_fuzzle.caty = (640 - g_fuzzle.height - 0.5);
			g_fuzzle.velocity = -10;
			g_fuzzle.caty += g_fuzzle.velocity;
		}
		//if player crashes into the ceiling
		if (g_fuzzle.caty < 0)
		{
			g_fuzzle.caty = 0 + 0.1;
			g_fuzzle.velocity = 0;
		}
	}
	if (g_keys[40] == true) //check if down arrow is pressed
	{

	}
}