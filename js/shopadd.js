//angular
var app=angular.module('shop',[]);
app.config(['$locationProvider',function($locationProvider){
	$locationProvider.html5Model(true);
    }]);
app.controller('ShopController',['$scope','$location','$http',function($scope,$location,$http){
	var shop;
	//$scope.shop=shop={};
    $scope.shop.name='';
    $scope.shop.cellphone='';
    $scope.shop.eamil='';
    $scope.shop.website='';
    $scope.shop.address='';
    $scope.shop.pic='';
    $scope.shop.introduction='';
    $scope.shop.is_yc=0;

    //上传图片
    $scope.FileUpload=function(){
    	var file=document.querySelector('#upFile');
        if(!file.length){
        	alert('请选择文件！');
        	return false;
        }
        if(file.size>1024*1024*2){
        	alert('图片不能大于2M！');
        	return false;
        }
        var params=new FormData();
        params.append('upload',file.files[0]);
        params.append('upload_size',file.files[0].size);
        var module=/\w+/.exec(window.location.pathname);
        localStorage.setItem('module'+'file',file.value);
        var xhr=newXMLHttpRuquest();
        xhr.open("post",'/index/upload/indexUpPicture',true);
        xhr.send(params);
        xhr.onreadystatechange=function(){
        	if(xhr.readyState==4){
        		var ret =eval("("+xhr.responseText+")");
        		if(ret.code==200){
        			var picPath=ret.result.picPath;
        			//放入文本框
        			$scop.shop.pic=picPath;
        			$('#pic').val(picPath);
        			$('#showPic').html('<img src="'+picPath'" height="100"/>');
        		}else{
        			alert(ret.msg);
        		}

        	}
        }
    }

    //提交
    $scope.shopFormSubmit=function(){
    	name=$scope.shop.name;
    	cellphone=$scope.shop.cellphone;
    	eamil=$scope.shop.eamil;
    	website=$scope.shop.website;
    	address=$scope.shop.address;
    	pic=$scope.shop.pic;
    	introduction=$scope.shop.introduction;
    	is_yc=$scope.shop.is_yc;
    	if(name==''||name==null||typeof(name)==undefined){
    		alert('商家名称不能为空');
    		return false;
    	}
    	if(cellphone==''||cellphone==null||typeof(cellphone)==undefined){
    		alert('联系电话不能为空');
    	}
    	if(cellphone)
    }


}])