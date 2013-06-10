define(['knockout'], function (ko) {
	return function appViewModel() {
		this.firstName = ko.observable('Bert');
		this.firstNameCaps = ko.computed(function() {
			return this.firstName().toUpperCase();
		}, this);
		this.names = ko.observableArray([]);
		this.remove = function(name) {
			this.names.remove(name);
		};
		this.count = ko.computed(function() {
			return this.names().length;
		}, this);
	};
});