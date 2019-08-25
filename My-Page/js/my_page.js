//document.getElementById('git').onclick = function(event){
//	alert('In process');
//}

document.querySelector('.c-hamburger').addEventListener('click', function (e){
	e.preventDefault();
	if(this.classList.contains('is-active')){
		this.classList.remove('is-active');
		document.querySelector('#menu').classList.remove('nav-active');
		document.body.classList.remove('body-active');
	}
	else{
		this.classList.add('is-active');
		document.querySelector('#menu').classList.add('nav-active');
		document.body.classList.add('body-active');
		
	}
})

document.getElementById('col_1').onmouseover = function(){
	document.getElementById('p_1').style.marginTop = '-40px';
	document.getElementById('p_1').style.opacity = '1';
}

document.getElementById('col_1').onmouseout = function(){
	document.getElementById('p_1').style.marginTop = '0px';
	document.getElementById('p_1').style.opacity = '0';
}


document.getElementById('col_2').onmouseover = function(){
	document.getElementById('p_2').style.marginTop = '-40px';
	document.getElementById('p_2').style.opacity = '1';
}

document.getElementById('col_2').onmouseout = function(){
	document.getElementById('p_2').style.marginTop = '0px';
	document.getElementById('p_2').style.opacity = '0';
}


document.getElementById('col_4').onmouseover = function(){
	document.getElementById('p_4').style.marginTop = '-40px';
	document.getElementById('p_4').style.opacity = '1';
}

document.getElementById('col_4').onmouseout = function(){
	document.getElementById('p_4').style.marginTop = '0px';
	document.getElementById('p_4').style.opacity = '0';
}


document.getElementById('col_5').onmouseover = function(){
	document.getElementById('p_5').style.marginTop = '-40px';
	document.getElementById('p_5').style.opacity = '1';
}

document.getElementById('col_5').onmouseout = function(){
	document.getElementById('p_5').style.marginTop = '0px';
	document.getElementById('p_5').style.opacity = '0';
}


