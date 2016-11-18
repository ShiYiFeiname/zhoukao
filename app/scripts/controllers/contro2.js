angular.module('1118App').controller('cont2',function($scope,$http){
	$http({
		url:"http://www.somenote.cn:1510/test2",
		mothod:"GET"
	}).success(function(e){
		$scope.aa=e
	})
})
