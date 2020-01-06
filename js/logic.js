var timer = null;
var countDownNumber = 10;

var changeState = function(state) {
	document.body.className = "body-state"+state;

	if(state==2){
		timer = setInterval(function(){
			if (countDownNumber>0) {
			document.getElementById('countDown').innerHTML 
			= countDownNumber;
			countDownNumber -=1;
		} else if(countDownNumber==0){
			state = 3;
			changeState(state);
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

		},2000)
	}
	;
}