(function($){
	$(document).ready(function(){
		var area = $("#area");
		var subarea = $("#subarea");

		area.on('change', function(){
			if(area.val() != ""){
				subarea.removeAttr('disabled');
			}else{
				subarea.attr('disabled', 'disabled');
			}
		})
	})
})(jQuery)