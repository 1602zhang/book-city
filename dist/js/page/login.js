"use strict";define(["jquery"],function(a){var n="";a(".login_btn").on("click",function(){var t=a.trim(a(".user").val()),e=a.trim(a(".pwd").val());if(""===t?n="请输入账号":""===e&&(n="请输入密码"),n)a(".tip").html(n);else{var i={user:t,pwd:e};a.ajax({url:"/loginPage",type:"post",data:i,dataType:"json",success:function(t){alert(t.msg),0===t.code?history.go(-1):a(".tip").html("用户名或密码输入错误")}})}})});