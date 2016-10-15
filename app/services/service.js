(function(){


	function Service () {
		this.someMethod = function () {
			alert('I am service');
		};
	}

	angular
		.module('list')
		.service('Service', Service);


})();
