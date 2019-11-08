let k_n_1 = document.querySelector('.k_n_1');
let k_n_2 = document.querySelector('.k_n_2');
let k_n_3 = document.querySelector('.k_n_3');
let k_n_4 = document.querySelector('.k_n_4');
let k_n_5 = document.querySelector('.k_n_5');
let k_n_6 = document.querySelector('.k_n_6');
let k_n_7 = document.querySelector('.k_n_7');

k_n_1.onclick = () => {
	k_n_1.style.color = 'red';
	k_n_2.style.color = 'black';
	k_n_3.style.color = 'black';
	k_n_4.style.color = 'black';
	k_n_5.style.color = 'black';
	k_n_6.style.color = 'black';
	k_n_7.style.color = 'black';
}

k_n_2.onclick = () => {
	k_n_1.style.color = 'black';
	k_n_2.style.color = 'red';
	k_n_3.style.color = 'black';
	k_n_4.style.color = 'black';
	k_n_5.style.color = 'black';
	k_n_6.style.color = 'black';
	k_n_7.style.color = 'black';
}

k_n_3.onclick = () => {
	k_n_1.style.color = 'black';
	k_n_2.style.color = 'black';
	k_n_3.style.color = 'red';
	k_n_4.style.color = 'black';
	k_n_5.style.color = 'black';
	k_n_6.style.color = 'black';
	k_n_7.style.color = 'black';
}

k_n_4.onclick = () => {
	k_n_1.style.color = 'black';
	k_n_2.style.color = 'black';
	k_n_3.style.color = 'black';
	k_n_4.style.color = 'red';
	k_n_5.style.color = 'black';
	k_n_6.style.color = 'black';
	k_n_7.style.color = 'black';
}

k_n_5.onclick = () => {
	k_n_1.style.color = 'black';
	k_n_2.style.color = 'black';
	k_n_3.style.color = 'black';
	k_n_4.style.color = 'black';
	k_n_5.style.color = 'red';
	k_n_6.style.color = 'black';
	k_n_7.style.color = 'black';
}

k_n_6.onclick = () => {
	k_n_1.style.color = 'black';
	k_n_2.style.color = 'black';
	k_n_3.style.color = 'black';
	k_n_4.style.color = 'black';
	k_n_5.style.color = 'black';
	k_n_6.style.color = 'red';
	k_n_7.style.color = 'black';
}

k_n_7.onclick = () => {
	k_n_1.style.color = 'black';
	k_n_2.style.color = 'black';
	k_n_3.style.color = 'black';
	k_n_4.style.color = 'black';
	k_n_5.style.color = 'black';
	k_n_6.style.color = 'black';
	k_n_7.style.color = 'red';
}

//HAMBURGER

$(document).ready(function () {
  $('.second-button').on('click', function () {

    $('.animated-icon2').toggleClass('open');
  });
});

