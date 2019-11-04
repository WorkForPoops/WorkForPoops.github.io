function clock_1(){
	setInterval(fSec, 1000);
	var sec = 0;

	function fSec(){
		document.querySelector('#sec').style.transform = 'rotate('+sec+'deg)';
		if(sec+6 == 366){
			sec = 0;
		}
		sec = sec + 6;

		if(sec > 96 && sec < 276){
		document.getElementById('clock').style.backgroundImage = "url(../img/night_sky.jpg)";
		}
		else{
			document.getElementById('clock').style.backgroundImage = "url(../img/sky_1.jpg)";
		}
	}
}
clock_1();

// 90 - 270


function clock_2(){

	var date = new Date();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();

	if(hours < 10)
		hours = "0" + hours;
	if(minutes < 10)
		minutes = "0" + minutes;
	if(seconds < 10)
		seconds = "0" + seconds;

	var str = hours + ":" + minutes + ":" + seconds;

	document.getElementById("clock_2").innerHTML = str;
	setTimeout("clock_2()", 1000);
};

clock_2();
