(function(){
	
	angular.
		module('seedApp').
		config(['$locationProvider' ,'$routeProvider',

			function config($locationProvider, $routeProvider) {

				$locationProvider.hashPrefix('!');

				$routeProvider.
					when('/list', {
						template: '<list></list>'
					}).
					otherwise('/list');
					
			}
		]);

})();

