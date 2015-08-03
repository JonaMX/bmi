"use strict";angular.module("bmiApp",["ngCookies","ngResource","ngSanitize","ui.router","stormpath","stormpath.templates"]).config(["$stateProvider","$urlRouterProvider","$locationProvider",function(a,b,c){b.otherwise("/"),c.html5Mode(!0)}]).run(["$stormpath",function(a){a.uiRouter({loginState:"login",defaultPostLoginState:"main"})}]),angular.module("bmiApp").controller("CalculateCtrl",["$scope",function(a){var b=[{from:0,to:14,label:"Very severely underweight"},{from:15,to:16,label:"Severely underweight"},{from:17,to:18.5,label:"Underweight"},{from:18.6,to:25,label:"Normal (healthy weight)"},{from:26,to:30,label:"Overweight"},{from:31,to:35,label:"Obese Class I (Moderately obese)"},{from:36,to:40,label:"Obese Class II (Severely obese)"},{from:41,to:1/0,label:"Obese Class III (Very severely obese)"}];a.bmi=null,a.calcBMI=function(){a.bmi=a.weight/Math.pow(a.height,2),a.category=b.filter(function(b){return a.bmi>b.from&&a.bmi<=b.to})[0]}}]),angular.module("bmiApp").config(["$stateProvider",function(a){a.state("calculate",{url:"/calculate",templateUrl:"app/calculate/calculate.html",controller:"CalculateCtrl",sp:{authenticate:!0}})}]),angular.module("bmiApp").controller("LoginCtrl",["$scope",function(a){a.message="Hello"}]),angular.module("bmiApp").config(["$stateProvider",function(a){a.state("login",{url:"/login",templateUrl:"app/login/login.html",controller:"LoginCtrl"})}]),angular.module("bmiApp").controller("MainCtrl",["$scope","$http",function(a,b){a.awesomeThings=[],b.get("/api/things").success(function(b){a.awesomeThings=b})}]),angular.module("bmiApp").config(["$stateProvider",function(a){a.state("main",{url:"/",templateUrl:"app/main/main.html",controller:"MainCtrl",sp:{waitForUser:!0}})}]),angular.module("bmiApp").controller("ProfileCtrl",["$scope",function(a){a.message="Hello"}]),angular.module("bmiApp").config(["$stateProvider",function(a){a.state("profile",{url:"/profile",templateUrl:"app/profile/profile.html",controller:"ProfileCtrl",sp:{authenticate:!0}})}]),angular.module("bmiApp").controller("RegisterCtrl",["$scope",function(a){a.message="Hello"}]),angular.module("bmiApp").config(["$stateProvider",function(a){a.state("register",{url:"/register",templateUrl:"app/register/register.html",controller:"RegisterCtrl"})}]),angular.module("bmiApp").controller("NavbarCtrl",["$scope","$location",function(a,b){a.menu=[{title:"Home",link:"/"},{title:"Calculate BMI",link:"/calculate"}],a.isCollapsed=!0,a.isActive=function(a){return a===b.path()}}]),angular.module("bmiApp").run(["$templateCache",function(a){a.put("app/calculate/calculate.html",'<div ng-include="\'components/navbar/navbar.html\'"></div><div class=container><div class=row><div class=col-xs-12><h3>Calculate your Body Mass Index</h3><hr></div></div><div class=row><div class=col-xs-12><form class=form-inline><div class=form-group><label class=sr-only>Weight(Kg)</label><input class=form-control placeholder=Weight(Kg) ng-model=weight></div><div class=form-group><label class=sr-only>Height(Meters)</label><input class=form-control placeholder=Height(Meters) ng-model=height></div><button type=submit class="btn btn-default" ng-click=calcBMI()>Get BMI</button></form></div></div><div class=row ng-if=bmi><div class=col-xs-12><p>Your BMI is: <strong>{{bmi}}</strong></p><p>Your BMI Category is is: <strong>{{category.label}}</strong></p></div></div></div>'),a.put("app/login/login.html","<div ng-include=\"'components/navbar/navbar.html'\"></div><div class=container><div class=row><div class=col-xs-12><h3>Login</h3><hr></div></div><div sp-login-form></div></div>"),a.put("app/main/main.html","<div ng-include=\"'components/navbar/navbar.html'\"></div><header class=hero-unit id=banner><div class=container><h1>'Allo, 'Allo!</h1><p class=lead>Calculate your Body Mass Index now!</p></div></header><footer class=footer><div class=container><p>TS BMI Challenge | <a href=https://twitter.com/medinamarco>@medinamarco</a></p></div></footer>"),a.put("app/profile/profile.html",'<div ng-include="\'components/navbar/navbar.html\'"></div><div class=container><div class=row><div class=col-xs-12><h3>My Profile</h3><hr></div></div><div class=row><div class=col-xs-12><pre ng-bind="user | json"></pre></div></div></div>'),a.put("app/register/register.html","<div ng-include=\"'components/navbar/navbar.html'\"></div><div class=container><div class=row><div class=col-xs-12><h3>Registration</h3><hr></div></div><div sp-registration-form post-login-state=main></div></div>"),a.put("components/navbar/navbar.html",'<div class="navbar navbar-default navbar-static-top" ng-controller=NavbarCtrl><div class=container><div class=navbar-header><button class=navbar-toggle type=button ng-click="isCollapsed = !isCollapsed"><span class=sr-only>Toggle navigation</span> <span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span></button> <a href="/" class=navbar-brand>TS BMI</a></div><div collapse=isCollapsed class="navbar-collapse collapse" id=navbar-main><ul class="nav navbar-nav"><li ng-repeat="item in menu" ng-class="{active: isActive(item.link)}"><a ng-href={{item.link}}>{{item.title}}</a></li><li if-user ng-class="{active: isActive(\'/profile\')}"><a ui-sref=profile>Profile</a></li><li if-not-user ng-class="{active: isActive(\'/register\')}"><a ui-sref=register>Register</a></li><li if-not-user ng-class="{active: isActive(\'/login\')}"><a ui-sref=login>Login</a></li><li if-user ng-class="{active: isActive(\'/logout\')}"><a ui-sref=main sp-logout>Logout</a></li></ul></div></div></div>')}]);