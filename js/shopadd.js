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
        			$('#showPic').html('<img src="'+picPath+'" height="100"/>');
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
            return false;
    	}
    	if(cellphone=/^1[3|4|5|7|8]\d{9}/){
            alert('手机格式不正确！');
            return false;
        }
        if(email!=''){
            //var str=/^\w+[-_.]\w*@([\w\d]+[-.])+[\w\d]{2,5}$/
            var str=/^[A-Za-z\d]+[-_.A-Za-z\d]*@([A-Za-z\d-.])+[A-Za-z\d]{2,5}$/;
            if(!str.test(email)){
                alert('邮箱格式不正确');
                return false;
            }
        }
        if(address==''||address==null||address==undefined){
            alert('商家地址不能为空');
            return false;
        }else{
            if(address.length<10||address.length>50){
                alert('商家地址不能小于10或大于50个字');
                return false;

            }
        }

        $http['post']('/mall/shop/addShop').success(function(data){
            if (data.code==200) {
                alert('创建成功');
                window.location.href='/mall/shop/list';
            }else{
                alert(data.msg);
            }
        })
    }


}])