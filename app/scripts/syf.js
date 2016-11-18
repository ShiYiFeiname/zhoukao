angular.module('syf',[]).directive("xinwen",function(){
	return{
		restrict:'ECMA',
		template:'<div id="div"><div id="top">娱乐</div><ul><li>{{sdata[0].title|sub}}</li><li>{{sdata[1].title|sub}}</li><li>{{sdata[2].title|sub}}</li><li>{{sdata[3].title|sub}}</li></ul><div id="img" ng-repeat="x in bdata"><img ng-src="{{x.img}}" alt="..."></div></div>',
		replace:true,
		scope:{sdata:'=data',bdata:'=data2'},				
	}
}).filter("sub",function(){
			return function(e){
//				alert(e.length)
            if(e){
            	if(e.length<=6){
					return e
				}else{
					var arr = []
					arr.push(e.substring(0,6))
//					var arr1 = (e.length)-(arr.join("").length)
					return arr+"......"
				}
            }
				
			}
})