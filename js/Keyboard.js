/*
 * Stores keys pressed into an object array(g_keys[]) and remove them from the array when the keys are released
 */
function keyDown(e)
{
	g_keys[e.keyCode] = true;
	//e.preventDefault();
}

function keyUp(e)
{
	delete g_keys[e.keyCode];
	//e.preventDefault();
}
/*
 * Handles keyboard input.
 */
function keyboard()
{
	if (g_keys[38] == true) //check if up arrow is pressed
	{
		// code moved to fuzzle.js, it's neater that way ;P
		g_fuzzle.up();
		
	}
	if (g_keys[16] == true) //check if down arrow is pressed
	{
		g_angelAllianceFlag = 1;
	}
	else {g_angelAllianceFlag = 0;}
}