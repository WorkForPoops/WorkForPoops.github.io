
$(document).ready(function() {

	
	//E-mail Ajax Send

	$("form").submit(function() { //Change
		
//		var check_b = prompt('Проверка на безопасность. Какое число идет после 1?',0);
		
//		if(check_b.value != 2){
//			alert('Ошибка');
//		}else if(check_b.value == 2){
			var th = $(this);

			$.ajax({

				type: "POST",

				url: "mail.php", //Change

				data: th.serialize()

			}).done(function() {

				swal("Отлично!", "Ваше письмо отправлено", "success");

				setTimeout(function() {

					// Done Functions

					th.trigger("reset");

				}, 1000);

			});	
//		}

		return false;

	});



});


//HAMBURGER
$(document).ready(function () {
  $('.second-button').on('click', function () {

    $('.animated-icon2').toggleClass('open');
  });
});
