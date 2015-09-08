  // create the module and name it myApp
    var myApp = angular.module('myApp', ['ngRoute', 'controller','ngSanitize','ngYoutubeEmbed']);

    // configure our routes
    myApp.config(function($routeProvider) {
        $routeProvider
            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'homeController'
            })
            .when('/tin-tuc/:madanhmuctintuc', {
                templateUrl : 'pages/tintuc.html',
                controller  : 'newsController'
            })
            .when('/about',{
            	templateUrl: 'pages/about.html'
            })                 
            .when('/video/:giaivideo',{
            	templateUrl : 'pages/video.html',
                controller  : 'videoController'
            })
            .when('/chi-tiet-video/:mavideo',{
            	templateUrl : 'pages/chitietvideo.html',
                controller  : 'chitietvideoController'
            })
            .when('/chi-tiet-ti-vi/:makenh',{
                templateUrl: "pages/chitiettivi.html"
            })
            .when('/login',{
                templateUrl: 'pages/login.html',
                controller: 'loginCtrl'
            }) 
             .when('/xem-ti-vi',{
                templateUrl: 'pages/xemtivi.html',
                controller: 'kenhtiviController'
            }) 
            .when('/user',{
                templateUrl: 'pages/user.html'
                // controller: 'loginController';
            })          
            .when('/chi-tiet-tin-tuc/:matintuc', {
                templateUrl : 'pages/chitiettintuc.html',
                controller  : 'chitiettintucController'
            })
             .when('/bang-xep-hang', {
                templateUrl : 'pages/bangxephang.html',
                controller: 'bangxephangController'
                
            })
                
           .when('/tat-ca-cac-tran', {
            templateUrl : 'pages/lichbongda.html'           
            })
            .when('/nghe-nhac', {
            templateUrl : 'pages/nghenhac.html'           
            })
            .otherwise({
                    templateUrl: 'pages/404.html'
            });
    });


myApp.run(function($rootScope, $location, loginService){
    var routespermission = ['/user'];
    $rootScope.$on('$routeChangeStart', function(){
        if(routespermission.indexOf($location.path())!= -1)
        {
            var connected = loginService.isLogin();
            connected.then(function(msg)
            {
                if(!msg.data)
                {
                    $location.path("/login");
                }
            });           
        }
    });
})


/*
    ng-youtube-embed v0.2.2
    Copyright (c) 2015 Arun Michael Dsouza (amdsouza92@gmail.com)
    Licence: MIT
    Demo on CodePen - http://codepen.io/amdsouza92/pen/yNxyJV
*/
"use strict";
angular.module("ngYoutubeEmbed", []).directive("ngYoutubeEmbed", [function() {
    return {
        restrict: "E",
        template: '<div ng-bind-html="youtubeEmbedFrame"></div>',
        scope: {
            url: "=",
            autoplay: "@autoplay",
            autohide: "@autohide",
            ccloadpolicy: "@ccloadpolicy",
            color: "@color",
            controls: "@controls",
            disablekb: "@disablekb",
            end: "@end",
            fs: "@fs",
            hl: "@hl",
            ivloadpolicy: "@ivloadpolicy",
            playlist: "@playlist",
            playsinline: "@playsinline",
            rel: "@rel",
            showinfo: "@showinfo",
            start: "@start",
            theme: "@theme",
            width: "@width",
            height: "@height"
        },
        controller: ["$scope", "$sce", function(e, l) {
            function t(e) {
                var l = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/,
                    t = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/,
                    o = (e.match(t), e.match(l));
                if (null != o) {
                    var i = o[1];
                    return i
                }
            }
            var o = e.url;
            if (void 0 != o) {
                if (e.playlistArray = [], void 0 != e.playlist)
                    for (var i = e.playlist.split(","), a = 0; a < i.length; a++) e.playlistArray.push(t(i[a]));
                var r, s, h, u, c, d, n, p, y, b, f, m, w, v, g, E, k, A;
                r = "true" == e.autoplay ? 1 : 0, s = "true" == e.autohide ? 1 : 0, h = "true" == e.ccloadpolicy ? 1 : 0, u = "white" == e.color ? "white" : "red", c = "false" == e.controls ? 0 : 1, d = "false" == e.disablekb ? 0 : 1, n = e.end, p = "false" == e.fs ? 0 : 1, y = e.hl, b = "false" == e.ivloadpolicy ? 0 : 1, f = e.playlistArray, m = "true" == e.playsinline ? 1 : 0, w = "false" == e.rel ? 0 : 1, v = "false" == e.showinfo ? 0 : 1, g = e.start, E = e.theme, k = void 0 != e.width ? e.width : "500px", A = void 0 != e.height ? e.height : "350px";
                var $ = t(o),
                    x = "<iframe width=" + k + " height=" + A + ' src="https://www.youtube.com/embed/' + $ + "?autoplay=" + r + "&autohide=" + s + "&cc_load_policy=" + h + "&color=" + u + "&controls=" + c + "&disablekb=" + d + "&end=" + n + "&fs=" + p + "&hl=" + y + "&playlist=" + f + "&playsinline=" + m + "&rel=" + w + "&showinfo=" + v + "&start=" + g + "&theme=" + E + '&iv_load_policy=3&modestbranding=1" frameborder="0" allowfullscreen></iframe>';
                e.youtubeEmbedFrame = l.trustAsHtml(x)
            }
        }]
    }
}]);

