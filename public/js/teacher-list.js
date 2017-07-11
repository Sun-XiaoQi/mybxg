define(["jquery", "template","bootstrap"], function ($,template) {
    $.ajax({
        type: "get",
        url:"/api/teacher",
        dataType:"json",
        success:function(data){
            var html=template("teaTemp",data);
            $("#teaInfo").html(html);
            // 查看讲师信息
            previewTeacher();
            // 启用注销讲师
            openTeacher();
        }

    });


    // 查看讲师功能
    function previewTeacher(){
        $("#teaInfo").find(".preview").click(function(){
            var teaId=$(this).closest("td").data("id");
            $.ajax({
                type:"get",
                url:"/api/teacher/view",
                data:{tc_id:teaId},
                dataType:"json",
                success:function(data){
                    // tc_hometown:"山东省|济南市|章丘市"
                    data.result.tc_hometown=data.result.tc_hometown.split("|").join("");
                   var html=template("teaModalInfo",data.result);
                   $("#teaDetail").html(html);
                }
            });
            // return false;
        });
    }

    // 注销启用讲师功能
    function openTeacher(){
        $("#teaInfo").find(".edteacher").click(function(){
            var teaId=$(this).closest("td").data("id");
            var teaStatus=$(this).closest("td").data("status");
            var $that=$(this);
            $.ajax({
                type:"get",
                url:"/api/teacher/handle",
                data:{tc_id:teaId,tc_status:teaStatus},
                dataType:"json",
                success:function(data){
                    console.log(data);
                    if(data.code==200){
                       $that.closest("td").data("status",data.result.tc_status);
                       $that.text(data.result.tc_status == 0? "注销" : "启用");
                    }
                }
            });
        });
    }
});