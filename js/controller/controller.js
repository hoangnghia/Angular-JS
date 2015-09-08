angular.module('controller',[])




.controller('newsController',['$scope','$http', '$log','$routeParams',function($scope, $http, $log,$routeParams)
{		
		$scope.$emit('LOAD');
		$madanhmuctintuc = $routeParams.madanhmuctintuc;

		$http.get('processed/popData.php?loadnews=' + $madanhmuctintuc)
				.success(function(data){
					$scope.news = data;
					$scope.$emit('UNLOAD')
				})
				.error(function(err){
					$log.error(err);
				})
		$http.get('processed/popData.php?loaddanhmuc')
				.success(function(data){
					$scope.danhmuc = data;					
				})
				.error(function(err){
					$log.error(err);
				})

	
}])
.controller('kenhtiviController',['$scope','$http', '$log',function($scope, $http, $log)
{		

		$http.get('processed/popData.php?loadkenhtivi')
				.success(function(data){
					$scope.kenhtivis = data;					
				})
				.error(function(err){
					$log.error(err);
				})

	
}])
.controller('bangxephangController',['$scope','$http', '$log',function($scope, $http, $log)
{		

		$http.get('processed/popData.php?loadbangxephang')
				.success(function(data){
					$scope.bangxephang = data;					
				})
				.error(function(err){
					$log.error(err);
				})

	
}])
.controller('tiviController',['$scope','$http', '$log','$sce','$routeParams',function($scope, $http, $log, $sce, $routeParams)
{		
		$ma_kenh = $routeParams.makenh;
			  $scope.trustSrc = function(src) {
			    return $sce.trustAsResourceUrl(src);
			  }
		$http.get('processed/popData.php?kenhtivi='+ $ma_kenh)
				.success(function(data){
					$scope.kenhtv = data;					
				})
				.error(function(err){
					$log.error(err);
				})
		$http.get('processed/popData.php?loadkenhtivi')
			.success(function(data){
				$scope.kenhtivis = data;					
			})
			.error(function(err){
				$log.error(err);
			})

	
}])
.controller('chitiettintucController',['$scope','$http', '$log','$routeParams',function($scope, $http, $log,$routeParams)
{		
		$matintuc = $routeParams.matintuc;
		//$scope.matintuc = $matintuc;
		$http.get('processed/popData.php?chitiettintuc='+ $matintuc)
				.success(function(data){
					$scope.detailnews = data;					
				})
				.error(function(err){
					$log.error(err);
				})
	
}])
.controller('chitietvideoController',['$scope','$http', '$log','$routeParams',function($scope, $http, $log,$routeParams)
{		
		$mavideo = $routeParams.mavideo;
		//$scope.matintuc = $matintuc;
		$http.get('processed/popData.php?chitietvideo='+ $mavideo)
				.success(function(data){
					$scope.detailvideos = data;	
					$scope.link = 'https://www.youtube.com/watch?v=OPmOXJtxxoo';
					
				})
				.error(function(err){
					$log.error(err);
				})
			 $scope.renderHTML = function(html_code)         {
            var decoded = angular.element('<textarea />').html(html_code).text();
            return $sce.trustAsHtml(decoded);
        };
	
}])
.controller('videoController',['$scope','$http', '$log','$routeParams',function($scope, $http, $log,$routeParams)
{		
		$ma_giai_vi_deo = $routeParams.giaivideo;
		$http.get('processed/popData.php?video='+ $ma_giai_vi_deo)
				.success(function(data){
					$scope.videotheomagiai = data;					
				})
				.error(function(err){
					$log.error(err);
				})
	
}])


.controller('appController',['$scope','$http', '$log','loginService','sessionService',function($scope, $http, $log, loginService, sessionService)
{		
		$scope.$on('LOAD', function(){
		$scope.loading = true;
		})
		$scope.$on('UNLOAD', function(){
			$scope.loading = false;
		})
		$scope.logout=function()
		{
			loginService.logout();
		}
		// var isSession = sessionService.get("user");
		// console.log(isSession);
		// if(isSession != null)
		// {
		// 	$scope.messagesVisible = true;	
		// }
		// else
		// {
		// 	$scope.messagesVisible = false;	
		// }
		
		// $http.get('processed/popData.php')
		// 		.success(function(data){
		// 			$scope.danhmucvideo = data;					
		// 		})
		// 		.error(function(err){
		// 			$log.error(err);
		// 		})
	
}])
.controller('homeController',['$scope','$http', '$log',function($scope, $http, $log)
{		
	
	
}])
.controller('loginCtrl',function($scope, $location, loginService)
{
	$scope.loginFail = '';
	$scope.submit = function(user){	 	
	 	loginService.login(user,$scope);

	};
})

