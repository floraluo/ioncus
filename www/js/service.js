angular.module('starter.servive' , [])

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