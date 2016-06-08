NotDolls.controller('MainController', [
	'$http', 
	'$scope',

	function($http, $scope) {
		console.log("thing");
		$http
		.get('http://10.0.0.219:59084/api/Inventory')
		.success(results => $scope.figurines = results);
	}
]);