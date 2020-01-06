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
		} else{
			state = 3;
			changeState(state);
		}
		}, 1000);
		
	}
}