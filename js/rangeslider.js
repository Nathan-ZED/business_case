
$(function() {
	$('.range').next().text($(this).val()); // Valeur par défaut
	$('.range').on('input', function() {
		var $set = $(this).val();
		$(this).next().text($set);
	});
});