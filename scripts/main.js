var timeMode = "earth"
var hourDiffrence = 0

function switchBg() {
	if(timeMode == "earth"){
		timeMode = "mars"
		hourDiffrence = 6
		document.body.style.backgroundImage = "url('images/mars.jpeg')";
	}
	else{
		timeMode = "earth"
		hourDiffrence = 0
		document.body.style.backgroundImage = "url('images/earth.jpg')";
	}



  
}

function formatTime(){

	var now = new Date();
	//an array retunr at the end of the function
	var time = new Array();
	now.setHours(now.getHours()-hourDiffrence)
	time['hours'] = now.getHours();
	time['minutes'] = now.getMinutes();
	time['seconds'] = now.getSeconds();


	if(time['minutes'] < 10){
		time['minutes'] = '0' + time['minutes'];
	}

		if(time['seconds'] < 10){
		time['seconds'] = '0' + time['seconds'];
	}

	if(time['hours'] < 10){
		time['hours'] = '0' + time['hours'];
	}


	return time;
}

function updateClock(){
	document.getElementById('clock').innerHTML = formatTime()['hours'] + ':' + formatTime()['minutes'] + ':' + formatTime()['seconds'];
}



setInterval(updateClock, 100);
