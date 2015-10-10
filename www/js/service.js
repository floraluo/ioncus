angular.module('starter.servive' , [])
.factory("JPush",['$http', '$window' , function($http, $window){
	var jpushService = {
		init: function(config){
			//启动极光推送服务
			$window.plugins.jPushPlugin.init(); 

			// 获取推送通知内容
			document.addEventListener('jpush.openNotification',config.openNoti, false);
			// document.addEventListener('jpush.receiveNotification',config.receiveNoti, false);
			// $window.plugins.jPushPlugin.openNotification=config.openNoti;
			//设置tag和Alias触发事件处理
			document.addEventListener('jpush.setTagsWithAlias',config.stac,false);
			//打开推送消息事件处理
			// $window.plugins.jPushPlugin.openNotificationInAndroidCallback=config.oniac;

			//调试模式 
			$window.plugins.jPushPlugin.setDebugMode(true);
		},
		isPushStopped: function(callback) {
			// android:用来检查 Push Service 是否已经被停止
			// ios: 平台检查推送服务是否注册
			$window.plugins.jPushPlugin.isPushStopped(callback);
		},
		stopPush: function(){
			// 停止极光推送
			$window.plugins.jPushPlugin.stopPush();
		},
		resumePush: function(){
			// 恢复推送
			$window.plugins.jPushPlugin.resumePush();
		},
		setTagsWithAlias: function(tags, alias){
			// 别名与标签
			$window.plugins.jPushPlugin.setTagsWithAlias(tags,alias);
		},
		setTags: function(tags){
			// 设置标签
			$window.plugins.jPushPlugin.setTags(tags);
		},
		setAlias:function(alias){
			// 设置别名
			$window.plugins.jPushPlugin.setAlias(alias);
		}
	}
	return jpushService;
}])
.factory("Camera", ['$q', function($q){
	return {
		getPicture: function(options){
			var q = $q.defer();
			navigator.camera.getPicture(function(result){
				// var image=document.getElementById("myPortrait");
				// image.src=result;
				q.resolve(result);
			}, function(err){
				q.reject(err);
			}, options);
			return q.promise;
		}
	}
	
}])
.factory('User', function(){
	var user={};
	user.signature='';
	user.nickname='';
	user.profession='';
	return {
		userProperty: user,
		setProfession: function(name){
			user.profession = name;
		}
	}
})
// .factory('professionData',function(){
// 	var professionServe={
// 		name:"xx"
// 	};
// 	return {
// 		getter: function(){
// 			return professionServe.name;
// 		},
// 		setter: function(name){
// 			professionServe.name = name;
// 		}
// 	}
// 	professionServe.name='';
// })
.factory('regionService', function(){
	var cityData=[
		{id: 1, cn_name: '天津'},
		{province: "四川", city:[
			{id: 2, cn_name: "成都"},
			{id: 3, cn_name: "成都2"},
			{id: 4, cn_name: "成都3"}]
		},
		{id: 5, cn_name: '北京'},
		{province: "广东", city:[
			{id: 6, cn_name: "广州"},
			{id: 7, cn_name: "深圳"},
			{id: 8, cn_name: "东莞"}]
		}],
		region='';
	return {
		city: cityData,
		getter: function(){
			return region;
		},
		setter: function(c){
			region = c;
		}
	}
})