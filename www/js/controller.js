angular.module('starter.controller' , [])

.controller('DeomoCtrl', function($scope, $ionicSideMenuDelegate){
	// $scope.actionsheet1=function () {
	// 	console.log("aaa");
	// }
	 $scope.toggleLeft = function() {
        $ionicSideMenuDelegate.toggleLeft();
      };
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
		$http.get("data/content.json")
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
		// console.log("do pull")
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
.controller('SettinCtrl', ['$scope', '$ionicModal', 'regionService', 'User', function($scope, $ionicModal, regionService, User){
// 设置

	// 设置用户的属性（职业，签名，昵称）
	$scope.user=User.userProperty;

	//选择性别 
	var genderlist=['男', '女'];
	$scope.genderlist=genderlist;
	$ionicModal.fromTemplateUrl("templates/choose-gender.html", {
		scope: $scope
		// ,
		// animation: 'ease-in-out'
	}).then(function(chooseGender){
		$scope.modal=chooseGender;
	});
	$scope.chooseGender = function(index){
		$scope.gender = genderlist[index];
		$scope.modal.hide();
	};

	// 地区
	$scope.$watch(function(){
		return regionService.getter()
	},function(newValue, oldValue){
		if (newValue !==oldValue) {
			$scope.region = regionService.getter();
		}
	});
}])
.controller("PersonalCtrl", function($scope, $cordovaCamera){
// 个人资料设置
	$scope.myPortrait="img/ionic.png";
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
.controller("ProfessionCtrl", ['$scope', '$location', 'User', function($scope, $location, User){
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
		// professionData.setter($scope.professions[index].name);
		User.setProfession($scope.professions[index].name)
		$location.url('/demo/setting');
	};
}])
.controller("SignCtrl", function($scope, $location, User){
// 签名设置
	var personal={
		id: 'signature',
		title:"编辑签名"
	};
	$scope.personal=personal;
	$scope.user=User.userProperty;
})
.controller("NicknameCtrl", ['$scope', '$location', 'User', function($scope, $location, User){
// 昵称设置
	var personal={
		id:"nickname",
		title: "编辑昵称"
	};
	$scope.personal= personal;
	$scope.user=User.userProperty;
}])
.controller("RegionCtrl", ['$scope', '$location', '$ionicHistory', 'regionService', function($scope, $location, $ionicHistory, regionService){
//选择地区
	var city=regionService.city;
	$scope.region = city;
	$scope.first=true;
	$scope.chooseCitys = function(c){
		regionService.setter(c);
		$location.path('/demo/setting');
	}
}])
.controller('RegionProCtrl', ['$scope', '$location', '$ionicHistory', 'regionService' ,function($scope,$location, $ionicHistory, regionService){
// 市级地区
	var city=regionService.city;
	$scope.first=false;
	var path=$location.path(),
		pathA=path.split('/'),
		proId=pathA[pathA.length-1];
	$scope.provinces = city[proId].city;

	$scope.chooseCity = function(c){
		$ionicHistory.nextViewOptions({
		  disableBack: true
		}); 

		regionService.setter(c);
		$location.path('/demo/setting');
		// $ionicHistory.goBack(-2);
	}

}])