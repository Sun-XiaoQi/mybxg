define(["jquery", "template"], function ($, template) {
    // 获取编辑教师的id
    var tcId = location.search;
    console.log(tcId);

     var html = template("teaAddEditTemp",{tc_title:"讲师添加",tc_type:1,tc_gender:1});
            $("#teaAddEdit").html(html);

    // 编辑讲师和添加讲师公用一个页面，所以一个按钮操作
    $("#teaAddEdit").on("click", "#addBtn", function () {
        // 首先获取表单信息，无论是修改还是添加都可以
        var teaInfo = $("#teaAddInfo").serialize();
        console.log(teaInfo);
        if (tcId) {
            // 教师修改请求
            $.ajax({
                type: "post",
                url: "/api/teacher/update",
                data: teaInfo,
                dataType: "json",
                success: function (data) {
                    console.log(data);
                    if(data.code=200){
                        alert("修改成功");
                        location.href="/teacher/list";
                    }
                }
            })
        } else {
            console.log("else");
            // 讲师添加功能
            $.ajax({
                type: "post",
                url: "/api/teacher/add",
                data: teaInfo,
                dataType: "json",
                success: function (data) {
                    console.log(data);
                    if (data.code == 200) {
                        alert("添加成功");
                    }
                    location.href = "/teacher/list";
                }
            });
        }
    });

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
            }
        });
    }

});