//包含模板

var App = angular.module('myApp', ['ui.router']);
App.controller('kong', function($scope) {
	$scope.user = 'guosiyu';
	$scope.pass = 'wanxin520';
});
App.config(function($stateProvider, $urlRouterProvider) {

	//路由重定向$urlRouterProvide
	$urlRouterProvider.otherwise('/index');
	//状态配置
	$stateProvider
		.state('index', {
			url: 'index',
			templateUrl: 'index.html'
		})
		.state('dingdan1', {
			url: 'dingdan1',
			templateUrl: 'dingdan1.html'
		})
		.state('xiezhu1', {
			url: 'xiezhu1',
			templateUrl: 'xiezhu1.html'
		})
		.state('dianpu', {
			url: 'dianpu',
			templateUrl: 'dianpu.html'
		})
		.state('zhuce', {
			url: 'zhuce',
			templateUrl: 'zhuce.html'
		})
		.state('denglu', {
			url: 'denglu',
			templateUrl: 'denglu.html'
		})
		.state('fuwu', {
			url: 'fuwu',
			templateUrl: 'fuwu.html'
		})
		.state('password', {
			url: 'password',
			templateUrl: 'password.html'
		})

})