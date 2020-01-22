var counter = 0;

function drop(x, y, type, value){
	this.w = 44;
	this.h = 40;
	this.x = x;
	this.y = y;
	this.maxFr = 9;
	this.destframe = 0;
	this.type = "drop";
	this.newImg = document.createElement("IMG");
	this.newImg.setAttribute("src", "img/coin.png");
	this.dType = type;
	this.value = value;

	//this.script = script;
	this.update = function() {
		//(img,sx,sy,swidth,sheight,x,y,width,height);
		ctx.drawImage(this.newImg, this.destframe*this.w, this.dType*40, this.w, this.h, this.x, this.y, this.w/2, this.h/2);
		counter++;
		if(counter % 3 === 0){
			this.destframe++;
			if(this.destframe > this.maxFr){
				this.destframe = 0;
			}
		counter = 0;
		}
    }
	
	this.claimDrop = function(){
		if(this.dType == 0){
			gold += this.value;
			sfx.src = "music/coinDropping.wav";
			sfx.volume = 1;
			sfx.play();
		}else{
			 player.currHP += this.value;
			if(player.currHP > player.maxHP){
				player.currHP = player.maxHP;
			}
			sfx.src = "music/powerUp.wav";
			sfx.volume = 1;
			sfx.play();
		}
		drops.splice(drops.indexOf(this));
	}
	
}