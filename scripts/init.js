require.config({
	paths:  {
		jquery: 'lib/jquery',
		knockout: 'lib/knockout'
	}  	
});

require(['knockout', 'jquery', 'appViewModel', 'customHandlers', 'domReady!'], function (ko, $, appViewModel) {

	var vm = new appViewModel();

	$('.addBtn').on('click', function() {
		vm.names.push({ name: ko.observable($('#name').val()) });
	});


	$('.editBtn').on('click', function() {	
		//TASK: why doesn't this event handler fire?
		alert('triggered this event handler');
	});	
 
	ko.applyBindings(vm);	
});