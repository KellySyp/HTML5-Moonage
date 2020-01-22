
function updateScene_startMenu(){
	ctx.font = "100px East Sea Dokdo";
	ctx.fillStyle = "black";
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	ctx.fillText("The Dead of Winter",ctx.canvas.width/2,ctx.canvas.height/2);
}

//Formerly startGame1
function newGame(){

	player.currHP = player.maxHP
	
	$("#mainCanvas").fadeOut(fadeTime, function(){
		state = stateTown;
		buildScenes(true)
		$("#mainCanvas").fadeIn(fadeTime);
	});
	
}