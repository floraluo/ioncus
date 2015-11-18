angular.module('starter.directive', [])
.directive('baiduMap', function(){
	return {
		restrict: 'E',
		replace: true,
		transclude: true,
		template: '<div id="baiduMap"></div>',
	  	scope: {
            // center: "=",        // Center point on the map (e.g. <code>{ latitude: 10, longitude: 10 }</code>).
            // markers: "=",       // Array of map markers (e.g. <code>[{ lat: 10, lon: 10, name: "hello" }]</code>).
            // width: "@",         // Map width in pixels.
            // height: "@",        // Map height in pixels.
            // zoom: "@",          // Zoom level (one is totally zoomed out, 25 is very much zoomed in).
            // zoomControl: "@",   // Whether to show a zoom control on the map.
            // scaleControl: "@",   // Whether to show scale control on the map.
            // address:"@"
        },
		link: function(scope, element, atts) {
			var map;
			// 百度地图API功能
			map = new BMap.Map("baiduMap");
			var point = new BMap.Point(116.404, 39.915);  // 创建点坐标  
			map.centerAndZoom(point, 11);

			//平移缩放控件
			map.addControl(new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT}))

			// 比例尺控件
			map.addControl(new BMap.ScaleControl());

			// 缩略地图控件
			map.addControl(new BMap.OverviewMapControl({offset: new BMap.Size(15, 100)})); 

			// 地图类型控件，默认位于地图右上方
			map.addControl(new BMap.MapTypeControl()); 

			// 定位控件，针对移动端开发，默认位于地图左下方
			map.addControl(new BMap.GeolocationControl()); 

			map.setCurrentCity("北京");


			// 浏览器定位
			// var geolocation = new BMap.Geolocation();
			// geolocation.getCurrentPosition(function(r){
			// 	if(this.getStatus() == BMAP_STATUS_SUCCESS){
			// 		var mk = new BMap.Marker(r.point);
			// 		map.addOverlay(mk);
			// 		map.panTo(r.point);
			// 	}
			// 	else {
			// 		alert('failed'+this.getStatus());
			// 	}        
			// },{enableHighAccuracy: true})
			/*关于状态码
			BMAP_STATUS_SUCCESS	检索成功。对应数值“0”。
			BMAP_STATUS_CITY_LIST	城市列表。对应数值“1”。
			BMAP_STATUS_UNKNOWN_LOCATION	位置结果未知。对应数值“2”。
			BMAP_STATUS_UNKNOWN_ROUTE	导航结果未知。对应数值“3”。
			BMAP_STATUS_INVALID_KEY	非法密钥。对应数值“4”。
			BMAP_STATUS_INVALID_REQUEST	非法请求。对应数值“5”。
			BMAP_STATUS_PERMISSION_DENIED	没有权限。对应数值“6”。(自 1.1 新增)
			BMAP_STATUS_SERVICE_UNAVAILABLE	服务不可用。对应数值“7”。(自 1.1 新增)
			BMAP_STATUS_TIMEOUT	超时。对应数值“8”。(自 1.1 新增)
			*/

			// html5 定位
			if (navigator.geolocation){
		    	navigator.geolocation.getCurrentPosition(function(position){
		    		var point = {
			    			lng: position.coords.longitude,
			    			lat: position.coords.latitude
		    			},
		    			mk = new BMap.Marker(new BMap.Point(point.lng, point.lat));
		    			map.addOverlay(mk);
		    			// map.panTo(point.lng, point.lat);
						map.centerAndZoom(new BMap.Point(point.lng, point.lat), 11);
		    	});
		    }
			// 根据ip定位
			// function myFun(result){
			// 	var cityName = result.name;
			// 	map.setCenter(cityName);
			// }
			// var myCity = new BMap.LocalCity();
			// myCity.get(myFun);



			//添加全景 
			// var stCtrl = new BMap.PanoramaControl();  
			// stCtrl.setOffset(new BMap.Size(20, 20));  
			// map.addControl(stCtrl);

			// 默认气泡标注
			// var marker = new BMap.Marker(point);        // 创建标注    
			// map.addOverlay(marker);                     // 将标注添加到地图中

			// 监听标注事件
			// marker.addEventListener("click", function(){    
			// 	var opts = {    
			// 	 width : 250,     // 信息窗口宽度    
			// 	 height: 50,     // 信息窗口高度    
			// 	 title : "信息窗口标题"  // 信息窗口标题   
			// 	}    
			// 	var infoWindow = new BMap.InfoWindow("信息窗口内容", opts);  // 创建信息窗口对象    
			// 	map.openInfoWindow(infoWindow, map.getCenter());      // 打开信息窗口 
			// });

			// 可托拽的标注,默认禁止
			// marker.enableDragging();    
			// marker.addEventListener("dragend", function(e){    
			//  console.log("当前位置：" + e.point.lng + ", " + e.point.lat);    
			// })

			// 自定义图标标注
			// var myIcon = new BMap.Icon("img/img1.jpg", new BMap.Size(23, 25), {    
			// 	// 指定定位位置。   
			// 	// 当标注显示在地图上时，其所指向的地理位置距离图标左上    
			// 	// 角各偏移10像素和25像素。您可以看到在本例中该位置即是   
			//    // 图标中央下端的尖角位置。    
			//    offset: new BMap.Size(50, 50),    
			//    // 设置图片偏移。   
			//    // 当您需要从一幅较大的图片中截取某部分作为标注图标时，您   
			//    // 需要指定大图的偏移位置，此做法与css sprites技术类似。    
			//    imageOffset: new BMap.Size(-100, -105)   // 设置图片偏移    
			//  });    

			// 创建标注对象并添加到地图   
			 // var marker1 = new BMap.Marker(new BMap.Point(150.404, 39.915), {icon: myIcon});    
			// map.addOverlay(new BMap.Marker(new BMap.Point(116.40285, 39.794472), {icon: myIcon}));    
			
			// 绘制折线
			// var polyline = new BMap.Polyline([    
			//    new BMap.Point(116.331561, 40.008793),    
			//    new BMap.Point(116.428146, 39.998182),   
			//    new BMap.Point(116.408599, 39.958373)    
			//  ],    
			//  {strokeColor:"#000", strokeWeight:3, strokeOpacity:0.8}    
			// );    
			// map.addOverlay(polyline);

			// 创建图层 
			// var tilelayer = new BMap.TileLayer();         // 创建地图层实例    
			// tilelayer.getTilesUrl=function(){             // 设置图块路径     
			//     return "img/ionic.png";      
			// };      
			// map.addTileLayer(tilelayer);                // 将图层添加到地图上
			// var traffic = new BMap.TrafficLayer();        // 创建交通流量图层实例      
			// map.addTileLayer(traffic);                    // 将图层添加到地图上


			// map.addControl(new BMap.ZoomControl());
			// // 创建地址解析器实例
			// var myGeo = new BMap.Geocoder();
			// // 将地址解析结果显示在地图上,并调整地图视野
			// myGeo.getPoint(scope.address, function(point){
			//     if (point) {
			//         map.centerAndZoom(point, 16);
			//         map.addOverlay(new BMap.Marker(point));
			//     }
			// }, "");
		}
	}
})