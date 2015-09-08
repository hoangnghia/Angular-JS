"use strict";

myApp.factory('loginService', function($http, $location, sessionService){
	return {
		login: function(user, scope){
			var $promise = $http.post("processed/user.php", user);
			$promise.then(function(msg)
			{
				var uid = msg.data;
				if(uid != "error")
				{ 
					sessionService.set('user', uid)
					$location.path("/user");
					window.location.reload();

				}
				else
				{
					scope.loginFail ="Tài khoản hoặc mật khẩu không đúng";
				}
			});

		},
		logout:function(){
			sessionService.destroy('user');
			$location.path('/login');
			window.location.reload();
		},
		isLogin:function(){
			var $checkSessionSever = $http.post("processed/check_session.php");
			return $checkSessionSever;
			// if(sessionService.get('user')){
			// 	return true;
			// }

		}
	}
})