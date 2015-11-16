angular.module('starter.controller' , [])

.controller('HomeCtrl', function($ionicSlideBoxDelegate, $scope) {
	// $cordovaBadge.set(3).then(function() {
	// 	// You have permission, badge set.
	// }, function(err) {
	// 	// You do not have permission.
	// });
	var imgsrc=[
		{'id':'001','src':'img/img1.jpg','desc':'green1'},
		{'id':'002','src':'img/img2.jpg','desc':'green2'},
		{'id':'003','src':'img/img3.jpg','desc':'green3'}
	];
	$scope.imgGroup=imgsrc;
	$scope.next = function() {
		console.log('NEXT');
		$scope.$broadcast('slideBox.nextSlide');
	};
	$scope.slideChanged = function(index) {
		// console.log('Slide changed', index);
	};
	$scope.pagerClick = function(index){
		$ionicSlideBoxDelegate.slide(index);
	}
})
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
				console.log("destructiveText is triggle");
				return true;
			},
			cancelText: "取消",	//好像在Android中这个是被隐藏的
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
	};

 // ngcordova actionsheet 插件
	// var options = {
	// 	title: 'What do you want with this image?',
	// 	buttonLabels: ['Share via Facebook', 'Share via Twitter'],
	// 	addCancelButtonWithLabel: 'Cancel',
	// 	androidEnableCancelButton : true,
	// 	winphoneEnableCancelButton : true,
	// 	addDestructiveButtonWithLabel : 'Delete it'
	// };


	// document.addEventListener("deviceready", function () {
	// 	$cordovaActionSheet.show(options)
	// 		.then(function(btnIndex) {
	// 	    	var index = btnIndex;
	// 	  	});
	// }, false);
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
	// $ionicGesture.on('duobletap',function(){
	// 	console.log("$ionicGesture.on()"); 
	// },$element,obj);
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
	$scope.onDragLeft = function(){
		console.log("onDragLeft");
	};
	$scope.onSwipe = function(){
		console.log("onSwipe");
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
		$location.url('/demo/tabs/setting');
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
		$location.path('/demo/tabs/setting');
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
		$location.path('/demo/tabs/setting');
		// $ionicHistory.goBack(-2);
	}

}])
.controller('ContactCtrl', function($scope, $cordovaContacts, $ionicPlatform) {
	$ionicPlatform.ready(function() {

		// $scope.contacts = {};
		$scope.contactForm = {     // We will use it to save a contact

			"displayName": "Gajotres",
			"name": {
				"givenName"  : "Dragan",
				"familyName" : "Gaic",
				"formatted"  : "Dragan Gaic"
			},
			"nickname": 'Gajotres',
			"phoneNumbers": [
				{
					"value": "+385959052082",
					"type": "mobile"
				},
				{
					"value": "+385914600731",
					"type": "phone"
				}				
			],
			"emails": [
				{
					"value": "dragan.gaic@gmail.com",
					"type": "home"
				}
			],
			"addresses": [
				{
					"type": "home",
					"formatted": "Some Address",
					"streetAddress": "Some Address",
					"locality":"Zagreb",
					"region":"Zagreb",
					"postalCode":"10000",
					"country":"Croatia"
				}
			],
			"ims": null,
			"organizations": [
				{
					"type": "Company",
					"name": "Generali",
					"department": "IT",
					"title":"Senior Java Developer"
				}
			],
			"birthday": Date("08/01/1980"),
			"note": "",
			"photos": [
				{
					"value": "https://pbs.twimg.com/profile_images/570169987914924032/pRisI2wr_400x400.jpeg"
				}
			],
			"categories": null,
			"urls": null
		}

		$scope.addContact = function() {
			// 新增保存一个联系人
			$cordovaContacts.save($scope.contactForm).then(function(result) {
				console.log("result: "+result);
				$scope.result = result;
			}, function(err) {
				console.log(err)
			});
		};
		$scope.getAllContacts = function(searchTerm) {
			var opts = {
				filter: searchTerm,	//搜索字段
				multiple: true,		//返回匹配条件的任何联系人 default:false 返回第一个匹配的联系人
				fields: ['displayName', 'phoneNumbers']	//搜索字段的区域
				//desiredFields: [$cordovaContacts.id]	返回区域
			};
			if(ionic.Platform.isAndroid()) {
				opts.hasPhoneNumber = true; //default: false
			}
			// 筛选联系人
			$cordovaContacts.find(opts).then(function(allContacts) {
				$scope.contacts = allContacts;
				console.log(JSON.stringify(allContacts));
			});
		};

		$scope.pickContactUsingNativeUI = function() {
			// 弹出一个UI筛选联系人
			$cordovaContacts.pickContact().then(function(contactPicked) {
				$scope.contact = contactPicked;
				console.log(JSON.stringify(contactPicked));
			})
		}
	});

})
.controller('MoreSetCtrl', ['$scope' , 'JPush', function($scope , JPush) {
	$scope.enableNotif = true;
	$scope.notification={
		content:""
	};
	$scope.toggleNotification = function(){
		if($scope.enableNotif){
			JPush.stopPush();
			$scope.enableNotif = false;
		}else{
			JPush.resumePush();
			$scope.enableNotif = true;
		}
	};
	// $scope.receiveNotification = function(){
		// document.addEventListener("jpush.openNotification", function(){
		// 	var alertContent;
		// 	if(device.platform == "Android"){
		// 		alertContent = window.plugins.jPushPlugin.openNotification.alert;
		// 		console.log("log1"+window.plugins.jPushPlugin.openNotification);
		// 		console.log('log2: '+window.plugins.jPushPlugin.openNotification.alert);
		// 	}else {
		// 		alertContent = event.aps.alert;
		// 	}
		// 	alert("last"+alertContent);
		// 	$scope.notification.content=alertContent;
		// },false)
	// }
}])
.controller("ExampleCtrl", function($scope, $ionicPlatform, $cordovaDialogs,$cordovaBarcodeScanner, $cordovaInAppBrowser) {
	$ionicPlatform.ready(function(){
		$scope.codeScanner = function(){
			var options = {
				location: 'no',
				clearcache: 'no',
				toolbar: 'no'
			};

			$cordovaBarcodeScanner
			.scan()
			.then(function(barCodeData){
				$cordovaDialogs.alert(barCodeData);
				
				// $cordovaInAppBrowser
				// .open(barCodeData.text, "_blank", options)
				// .then(function(){
				// 	console.log("scan success");
				// });
			}, function(error){
				$cordovaDialogs.alert(error);
			})
		}
	});
})
.controller("BadgeCtrl", function($scope, $cordovaBadge, $cordovaDialogs) {
	$scope.hasPermission = function(){
		$cordovaBadge.hasPermission().then(function(yes){
			$cordovaDialogs.alert("you have the permission")
		}, function(no){

		});
	};
	$scope.setBadge = function(rand){
		var number = rand ? Math.round(Math.random()*100): 10;
		$cordovaBadge
		.set(number)
		.then(function(){
			$cordovaDialogs.alert("you have set the badge");
		}, function(err){

		});
	};
	$scope.getBadge = function(){
		$cordovaBadge
		.get()
		.then(function(badge){
			$scope.badge = badge;
		},function(err){
			$cordovaDialogs.alert(err);
		})
	};
	$scope.clearBadge = function(){
		$cordovaBadge
		.clear()
		.then(function(){
			$scope.badge = 0;
			$cordovaDialogs.alert("badge have cleared");
		}, function(){
			$cordovaDialogs.alert("clear err")
		})
	};

})
.controller("ClipboardCtrl", function($scope, $cordovaClipboard, $cordovaInAppBrowser, $rootScope){
	$scope.copy = function(text){
		$cordovaClipboard
		    .copy(text)
		    .then(function () {
		      // success
		      window.alert("Copy successfully!");
		    }, function () {
		      // error
	    });	
	};
	
    $scope.paste = function(){
    	$cordovaClipboard
	    .paste()
	    .then(function (result) {
	      // success, use result
	      $scope.clipboard=result;
	    }, function () {
	      // error
	    });
    };
    $scope.inAppBrowser = function(target){
    	// target 有三个值
    	// _self:如果路由中有这个url，就打开视图view，否则就在InAppBrowser打开
    	// _blank：在InAPPBrowser中打开
    	// _system: Opens in the system's web browser

    	// open 方法第三个参数 options

    	$cordovaInAppBrowser
    	.open("http://www.baidu.com", target)
    	.then(function(){
    		console.log("success");
    	});
    	// $cordovaInAppBrowser.close();
    };
	$rootScope.$on('$cordovaInAppBrowser:loadstop', function(e, event){
		// insert CSS via code / file
		$cordovaInAppBrowser.insertCSS({
		  code: 'body {background-color:blue;}'
		});

		// insert Javascript via code / file
		$cordovaInAppBrowser.executeScript({
		  file: 'script.js'
		});
	});

	$rootScope.$on('$cordovaInAppBrowser:exit', function(e, event){
		console.log("exit");
	});
})
.controller("ImgPickerCtrl", function($scope, $cordovaImagePicker) {
	$scope.images=[];
	$scope.selectImg = function(){

		var options = {
			maximumImagesCount: 5,
			// width: 500,
			// height: 500,
			// quality: 80
		};
		// $scope.image={};
		$cordovaImagePicker.getPictures(options)
		.then(function(results){
			for(var i=0; i<results.length; i++){
				console.log("iamge URI: " + results[i]);
				// $scope.image.i = results[i];
				$scope.images.push(results[i]);
			}
			// console.log($scope.images);
		});
	}
})
.controller('BaiduMapCtrl', function($scope){

})
.controller('AboutCtrl', function($scope, $cordovaAppVersion) {
	$scope.app={};
	$scope.app.version = '0.0.1';
	$scope.app.author = 'floraluo'
	// $cordovaAppVersion.getVersionNumber().then(function (version) {
	// 	$scope.app.version = version;
	// });
})