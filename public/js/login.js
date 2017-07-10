define(["jquery","cookie"],function(){
    $(".btn").click(function(){
            $.ajax({
            type:"post",
            // url:"http://api.botue.com/login",
            // 因为我们现在的访问地址是跨域了，现在是post请求，下面url这种写法是解决跨域的写法，正常是后台写的
            url:"/api/login",
            data:$("#bxgLogin").serialize(),
            dataType:"json",
            success:function(data){
                console.log(data);
                    if(data.code==200){
                        // 将用户信息存到cookie中，页面共享
                        $.cookie("loginInfo",JSON.stringify(data.result),{path:"/"});
                        console.log($.cookie("loginInfo"));
                        location.href="/index/index";
                    }
                }
            });

            // 为什么不写return false，页面就会自动跳转，表单数据就会拼接在地址栏中
               // 回答：因为form表单的默认提交方式是get,当不使用return false的时候，默认是表单提交 ，所以参数会拼接在地址栏中
            return false;
        });
});