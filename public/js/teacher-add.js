define(["jquery", "template", "util", "datepickerJs", "language","validate","form"], function ($, template, util) {
    // 菜单栏高亮
    util.setMenu("/teacher/list");
    // 获取编辑教师的id
    var tcId = location.search;
    console.log(tcId);
    // var html = template("teaAddEditTemp", { tc_title: "讲师添加", tc_type: 1, tc_gender: 1 });
    // $("#teaAddEdit").html(html);

    // -----------------通过使用validate插件的方式进行表单验证与提交----------------
    // 表单的验证与jQuery-form插件实现提交
    function submitForm(url){
        // url用于接收“添加”和“修改”时候的请求地址
        $("#teaAddInfo").validate({
            sendForm : false,
            valid : function(){
                // 提交表单
                $(this).ajaxSubmit({
                    type : 'post',
                    url : url,
                    success : function(data){
                        if (data.code = 200) {
                            alert(data.msg);
                            location.href = "/teacher/list";
                        }
                    }
                });
            },
             description : {
                tcName : {
                    required : '姓名必须填写',
                    valid : '姓名格式正确'
                },
                tcPass : {
                    required : '密码不能为空',
                    pattern : '密码必须是六位数字',
                    valid : '密码可以使用'
                },
                tcJoinDate : {
                    required : '入职日期不能为空',
                    valid : '日期可以使用'
                }
            }
        });
    }

    
    // 讲师编辑功能
    if (tcId) {
        $.ajax({
            type: "get",
            url: "/api/teacher/edit" + tcId,
            dataType: "json",
            success: function (data) {
                console.log(data);
                data.result.tc_title = "讲师编辑";
                console.log(data);
                var html = template("teaAddEditTemp", data.result);
                $("#teaAddEdit").html(html);
                submitForm("/api/teacher/update");
            }
        });
    }else{
        var html = template("teaAddEditTemp", { tc_title: "讲师添加", tc_type: 1, tc_gender: 1 });
        $("#teaAddEdit").html(html);
        submitForm("/api/teacher/add");
    }




    // ------------------使用jQuery的写法进行表单的验证与提交---------------------

    // 编辑讲师和添加讲师公用一个页面，所以一个按钮操作
    // $("#teaAddEdit").on("click", "#addBtn", function () {
    //     // 首先获取表单信息，无论是修改还是添加都可以
    //     var teaInfo = $("#teaAddInfo").serialize();
    //     console.log(teaInfo);
    //     if (tcId) {
    //         // 教师修改请求
    //         $.ajax({
    //             type: "post",
    //             url: "/api/teacher/update",
    //             data: teaInfo,
    //             dataType: "json",
    //             success: function (data) {
    //                 console.log(data);
    //                 if (data.code = 200) {
    //                     alert("修改成功");
    //                     location.href = "/teacher/list";
    //                 }
    //             }
    //         })
    //     } else {
    //         console.log("else");
    //         // 讲师添加功能
    //         $.ajax({
    //             type: "post",
    //             url: "/api/teacher/add",
    //             data: teaInfo,
    //             dataType: "json",
    //             success: function (data) {
    //                 console.log(data);
    //                 if (data.code == 200) {
    //                     alert("添加成功");
    //                 }
    //                 location.href = "/teacher/list";
    //             }
    //         });
    //     }
    // });

    // 讲师编辑功能
    // if (tcId) {
    //     $.ajax({
    //         type: "get",
    //         url: "/api/teacher/edit" + tcId,
    //         dataType: "json",
    //         success: function (data) {
    //             console.log(data);
    //             data.result.tc_title = "讲师编辑";
    //             console.log(data);
    //             var html = template("teaAddEditTemp", data.result);
    //             $("#teaAddEdit").html(html);
    //         }
    //     });
    // }

   


});