(function($){

	$(document).ready(function(){

		var bar = $("#progressbar_PF");
		var total = $(".sgf__progress .total");

		var inputCollection = $('input[type="text"]');
		var index = 0;
		var numberOfIinputs = inputCollection.length;
		var percentage = 0;
		
		bar.progressbar({
			value: 0
		})

		total.text(percentage + " %");

		inputCollection.on('blur', function(evt){
				
			var input = $(this);

			if(input.val() != "" && !input.hasClass("filled")){

				input.addClass("filled");

				index++;					
			}else{
				if(input.val() == '' && input.hasClass("filled")){
					input.removeClass("filled");
					index--;
				}
			}

			percentage = Math.floor(index / numberOfIinputs * 100);

			bar.progressbar("option", "value", percentage);
			total.text(percentage + '%');
		})
		

	})

})(jQuery);