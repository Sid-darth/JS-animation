
var timer = null; 

var changeState = function(state) {
	document.body.className = "body-state"+state;


	clearInterval(timer);

	
	var countDownNumber = 10;
	document.getElementById('countDown').innerHTML = 
			countDownNumber;
	if(state==2){
		timer = setInterval(function(){
			
			countDownNumber -= 1;
			document.getElementById('countDown').innerHTML = 
			countDownNumber;
			

			if (countDownNumber == 0) {
				changeState(3);
			}
		}, 200);
	} 

	else if (state == 3){
		var postLaunch = setTimeout( function(){
			var randomNumber= Math.round(Math.random()*10);

			if(randomNumber>5){
				changeState(4);
			} else{
				changeState(5);
			}

		},1500)
	};
}