function moveMe(){
	//Get the object we wanna moveMe//
	var object = document.getElementById("animate");
	var posX = 0;//initial x position//
	var posY = 0;
	
	var object2 = document.getElementById("animate2");

	//Create an interval
	//setinterval (functionToCall, noMillisecond)
	var timer = setInterval(move, 10);
	function move(){
		if (posY >= 350){
			posX = 0;
			posY = 0;
			
		}
		object.style.top = posY + "px";
		object.style.left = posX + "px";
		object2.style.bottom = posY + "px";
		object2. style.right = posX + "px";
		
		posX = posX + 1;
		posY = posY + 1;
		
	}	
	
}

