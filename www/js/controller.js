angular.module('starter.controller' , [])

.controller('DeomoCtrl', function($scope){
	// $scope.actionsheet1=function () {
	// 	console.log("aaa");
	// }
})
.controller('SheetCtrl', function($scope, $ionicActionSheet, $cordovaActionSheet){
	$scope.actionsheet=function(){
		$ionicActionSheet.show({
			buttons:[
				{ text: "分享"}
			],
			destructiveText: "删除",
			destructiveButtonClicked: function(){
				// 当destructive button被点击触发，return true关闭action sheet，return false 不关闭action sheet
				return true;
			},
			cancleText: "取消",	//好像在Android中这个是被隐藏的
			cancle: function(){
				// 取消按钮被点击，或者返回按钮被点击触发
				console.log('cancle is triggle');
			},
			buttonClicked: function(index){
				// 当其中一个 非destructive button被点击触发，return true关闭action sheet，return false 不关闭action sheet
				console.log(index)
				return true;
			}
		})
		// var options = {
		// 	title: 'What do you want with this image?',
		// 	buttonLabels: ['Share via Facebook', 'Share via Twitter'],
		// 	addCancelButtonWithLabel: 'Cancel',
		// 	androidEnableCancelButton : true,
		// 	winphoneEnableCancelButton : true,
		// 	addDestructiveButtonWithLabel : 'Delete it'
		// };
		// $cordovaActionSheet.show(options)
		// .then(function(btnIndex) {
		// 	var index = btnIndex;
		// });
	} 
	var options = {
		title: 'What do you want with this image?',
		buttonLabels: ['Share via Facebook', 'Share via Twitter'],
		addCancelButtonWithLabel: 'Cancel',
		androidEnableCancelButton : true,
		winphoneEnableCancelButton : true,
		addDestructiveButtonWithLabel : 'Delete it'
	};


	document.addEventListener("deviceready", function () {
		$cordovaActionSheet.show(options)
			.then(function(btnIndex) {
		    	var index = btnIndex;
		  	});
	}, false);
})
.controller('ContCtrl',function($scope, $http){
	$scope.states=[
		{"name": "zhang"},
		{"name": "wang"},
		{"name": "li"}
	];
	$scope.doRefresh=function(){
		$http.get("../data/content.json")
			.success(function(newStates){
				var len=newStates.length;
				for(var i = 0 ; i<len; i++){
					$scope.states.unshift(newStates[i]);					
				}
			})
			.finally(function(){
				$scope.$broadcast('scroll.refreshComplete');
			})
	};
	$scope.doPulling=function(){
		console.log("do pull")
	}
})
.controller("ForCtrl", function($scope){
	$scope.ischeckbox=false;

	$scope.garden=[
		{ value: "men", text: '男'},
		{ value: 'women', text: '女'}
	]
	$scope.name={
		garden: 'men'
	}
	$scope.formSubmit=function(){
		console.log($scope.ischeckbox+"   "+$scope.name.garden);
	}
})
.controller("GestureCtrl",function ($scope, $ionicGesture, $element) {
	var obj = document.getElementsByTagName('div')
	$ionicGesture.on('tap',function(){
		console.log("hahahahah");
	},$element,obj);
	$scope.onHold = function(){
		console.log("hold")
	};
	$scope.onTap = function(){
		console.log("tap");
	};
	$scope.onDoubleTap = function(){
		console.log("onDoubleTap");
	};
	$scope.onTouch = function(){
		console.log("onTouch");
	};
	$scope.onRelease = function(){
		console.log("onRelease");
	};
	$scope.onDrag = function(){
		console.log("onDrag");
	};
	$scope.onDoubleTap = function(){
		console.log("onDoubleTap");
	};
	
})
.controller('SettinCtrl', ['$scope', 'professionData', function($scope, professionData){
	$scope.myprofession = professionData.name;
}])
.controller("PersonalCtrl", function($scope, $cordovaCamera){
	$scope.myPortrait="../img/ionic.png";
	$scope.takePhoto = function(){
		$cordovaCamera.getPicture({
			quality: 75,
			targetHeight: 320,
			targetWidth: 320,
			saveToPhotoAlbum: false
		})
		.then(function(imageURI){
			console.log(imageURI);
			$scope.myPortrait = imageURI;
		}, function(err){
			console.log(err);
		},false);
	};
})
.controller("ProfessionCtrl", ['$scope', '$location', 'professionData', function($scope, $location, professionData){
	var professions=[
		{ name: '页面重构设计'},
		{ name: "web前端工程师"},
		{ name: 'JS工程师'},
		{ name: 'PHP开发工程师'},
		{ name: "web前端工程师"},
		{ name: 'JS工程师'},
		{ name: 'PHP开发工程师'},
		{ name: "web前端工程师"},
		{ name: 'JS工程师'},
		{ name: 'PHP开发工程师'},
		{ name: "web前端工程师"},
		{ name: 'JS工程师'},
		{ name: 'PHP开发工程师'}
	];
	$scope.professions = professions;
	$scope.selectJob=function(index){
		console.log($scope.professions[index].name);
		// $rootscope.myprofession=$scope.professions[index].name;
		professionData.name=$scope.professions[index].name;
		$location.path('/demo/setting');
	}
}])