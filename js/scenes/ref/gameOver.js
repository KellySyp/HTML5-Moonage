
function updateScene_gameOver(){
	ctx.font = "100px East Sea Dokdo";
	ctx.fillStyle = "black";
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	if(!win){
		ctx.fillText("Game Over",ctx.canvas.width/2,ctx.canvas.height/2);
	}else{
		ctx.fillText("You defeated",ctx.canvas.width/2,(ctx.canvas.height/2)-100);
		ctx.fillText("the Zombie Scourge.",ctx.canvas.width/2,(ctx.canvas.height/2)-30);
		ctx.fillText("Good job.",ctx.canvas.width/2,(ctx.canvas.height/2)+40);
	}
}

function restart(){
	$("#mainCanvas").fadeOut(fadeTime, function(){
		win = false;
		state = stateStart;
		buildScenes(true)
		$("#mainCanvas").fadeIn(fadeTime);
	});
}

function gameOver(){
	$("#mainCanvas").fadeOut(fadeTime, function(){
		state = stateGameOver;
		buildScenes(true)
		$("#mainCanvas").fadeIn(fadeTime);
	});
}
