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
.factory('professionData',function(){
	return {name: 'xx'};
})