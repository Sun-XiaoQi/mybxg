define(["jquery", "template", "cookie"], function ($,template) {
	// 控制左侧菜单的展开与重叠
	$('.navs ul').prev('a').on('click', function () {
		$(this).parent().siblings("li").children("ul").slideUp();
		$(this).next().slideToggle();
	});

	// 实现退出功能
	$("#quit").click(function () {
		$.ajax({
			type: "post",
			url: "/api/logout",
			dataType: "json",
			success: function (data) {
				if (data.code == 200) {
					alert(data.msg);
					// 这里会先闪现一下index页面然后再跳转回来
					location.href = "/login";
				}

			}
		});
	});


	// 判断用户是否登录过
	// location.pathname属性能够获取url中index.php后面的数据
	// $.cookie('PHPSESSID')如果没有登陆过，结果为undefined
	var pathname=location.pathname;
	if(pathname != "/login" && !$.cookie('PHPSESSID')){
		location.href="/login";
	}

	// 获取用户信息，渲染在每一个页面中
	// 将之前存在cookie中的信息取出来，当时存的json格式，所以现在要转换成对象
	var loginInfo=$.cookie("loginInfo") && JSON.parse($.cookie("loginInfo"));
		console.log(loginInfo);
	if(loginInfo){
		var loginTpl='<div class="avatar img-circle">'
            +'<img src="{{tc_avatar}}">'
        +'</div>'
        +'<h4>{{tc_name}}</h4>';
		var html=template.render(loginTpl,loginInfo);
		$("#loginInfoTpl").html(html);
	}



	// NProgress.start();

	// NProgress.done();
});





