$(document).ready(function(){
	$('.calc select').change(function(){
		$edition = $('select#flower_edition').val();
		$paper = $('select#flower_paper').val;
		$color = $('select#flower_color').val;
		$flower_file = $('select#flower_color option:selected').attr('data-price-file');
		$paper_ratio = $('select#flower_paper option:selected').attr('data-paper-ratio');
		$color_format = $('select#flower_color option:selected').attr('data-flower');

		$division = 1;
		$final_edition = $edition / $division;

		$price = $final_edition * $flower_file + parseInt($paper_ratio);



		console.log($price);

		$('span#final_price').text($price);

		if($color_format == 1){
			$('.card-images img').hide();
			$('#card_1_1').show('slow');
		}
		if($color_format == 2){
			$('.card-images img').hide();
			$('#card_1_2').show('slow');
		}
		if($color_format == 3){
			$('.card-images img').hide();
			$('#card_1_3').show('slow');
		}

	})
})
