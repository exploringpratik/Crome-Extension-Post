$(function () {

	var $name = $('#name');
	var $drink = $('#drink');

	$('#add-order').on('click', function () {
		var order = {
			name: $name.val(),
			drink: $drink.val(),
			age: 45,
			address: 'Satungal'
		};
		$.ajax({
			type: 'POST',
			url: 'http://127.0.0.1:5000/api',
			data: order,
			// success: alert('success'),
		})
	});
})