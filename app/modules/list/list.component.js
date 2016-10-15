(function(){

	angular.
		module('list').
		component('list', {
			templateUrl: 'modules/list/list.template.html',
			controller: ListController
		});


	function ListController(Service){
		var vm = this;

		Service.someMethod();

		vm.clubs = [
			{
				name: 'FC Liverpool',
				city: 'Liverpool'
			},
			{
				name: 'FC Chelsea',
				city: 'London'
			},
			{
				name: 'FC Manchester United',
				city: 'Manchester'
			}
		];
	} 

})();