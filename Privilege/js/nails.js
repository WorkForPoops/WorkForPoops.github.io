let n_n_1 = document.querySelector('.n_n_1');
let n_n_2 = document.querySelector('.n_n_2');
let n_n_3 = document.querySelector('.n_n_3');

n_n_1.onclick = () => {
	n_n_1.style.color = 'red';
	n_n_2.style.color = 'black';
	n_n_3.style.color = 'black';
}

n_n_2.onclick = () => {
	n_n_1.style.color = 'black';
	n_n_2.style.color = 'red';
	n_n_3.style.color = 'black';
}

n_n_3.onclick = () => {
	n_n_1.style.color = 'black';
	n_n_2.style.color = 'black';
	n_n_3.style.color = 'red';
}

//HAMBURGER

$(document).ready(function () {
  $('.second-button').on('click', function () {

    $('.animated-icon2').toggleClass('open');
  });
});

