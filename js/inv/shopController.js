var shopRef = [
	[
		assignItem(invMaster["Potion"]),
		assignItem(invMaster["HiPotion"])
	],
	[
		assignItem(invMaster["Potion"]),
		assignItem(invMaster["HiPotion"]),
	    assignItem(invMaster["Metal Sword"])
	],
	[
		assignItem(invMaster["HiPotion"]),
		assignItem(invMaster["MaxPotion"]),
	    assignItem(invMaster["Diamond Sword"]),
	    assignItem(invMaster["Chain Mail"]),
		assignItem(invMaster["Potion"])
	]
];

function initShops(){

}

//Buys an item. Checks if you have enough gold.
function buyItem(item){
	var cost = item.buy;
	if(gold < cost){
		sfx.src = "music/grunido.wav";
		sfx.volume = 1;
		sfx.play();
	}else{
		sfx.src = "music/coinDropping.wav";
		sfx.volume = 1;
		sfx.play();
		gold -= cost;
		addItem(item);
	}
}

//Sell Items. No confirmation, MWAHAHAHA
function sellItem(item){
	console.log("Thank you for this "+item.name);
	gold += item.sell;
	if(item.qty > 1){
		item.qty--;
	}else{
		var index = inventory.indexOf(item);
		inventory.splice(index, 1);
	}
}

