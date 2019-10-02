//HAMBURGER

$(document).ready(function () {
  $('.second-button').on('click', function () {

    $('.animated-icon2').toggleClass('open');
  });
});

//haircut
let h_n_1 = document.querySelector('.h_n_1');
let h_n_2 = document.querySelector('.h_n_2');

h_n_1.onclick = () => {
	h_n_1.style.color = 'red';
	h_n_2.style.color = 'black';
}

h_n_2.onclick = () => {
	h_n_2.style.color = 'red';
	h_n_1.style.color = 'black';
}

