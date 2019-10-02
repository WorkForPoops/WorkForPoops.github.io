let m_n_1 = document.querySelector('.m_n_1');
let m_n_2 = document.querySelector('.m_n_2');
let m_n_3 = document.querySelector('.m_n_3');

m_n_1.onclick = () => {
	m_n_1.style.color = 'red';
	m_n_2.style.color = 'black';
	m_n_3.style.color = 'black';
}

m_n_2.onclick = () => {
	m_n_1.style.color = 'black';
	m_n_2.style.color = 'red';
	m_n_3.style.color = 'black';
}

m_n_3.onclick = () => {
	m_n_1.style.color = 'black';
	m_n_2.style.color = 'black';
	m_n_3.style.color = 'red';
}

//HAMBURGER

$(document).ready(function () {
  $('.second-button').on('click', function () {

    $('.animated-icon2').toggleClass('open');
  });
});