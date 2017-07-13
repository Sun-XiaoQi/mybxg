define(["jquery", "template", "ckeditor", "datepickerJs", "language", "validate", "form","region","uploadify"], function ($, template,CKEDITOR) {
    $.ajax({
        url: "/api/teacher/profile",
        dataType: "json",
        success: function (data) {
            console.log(data);
            var html = template("settingTemp", data.result);
            $("#settingInfo").html(html);

            // 处理头像上传
            $('#upfile').uploadify({
                buttonText : '',
                itemTemplate : '<span></span>',
                width : '120',
                height : '120',
                fileObjName : 'tc_avatar',
                swf : '/public/assets/uploadify/uploadify.swf',
                uploader : '/api/uploader/avatar',
                onUploadSuccess : function(file,data,response){
                    console.log(data);
                    data = JSON.parse(data);
                    $('.preview img:eq(0)').attr('src',data.result.path);
                },
                onUploadError : function(file, errorCode, errorMsg, errorString) {
                    console.log(1);
                    alert('The file ' + file.name + ' could not be uploaded: ' + errorString);
                }
            });


            // 处理富文本
            CKEDITOR.replace("editor1", {
                // 自定义按钮组
                toolbarGroups: [{
                    name: 'clipboard',
                    groups: ['clipboard', 'undo']
                }, {
                    name: 'editing',
                    groups: ['find', 'selection', 'spellchecker', 'editing']
                }

                ]
            });

            // 处理三级联动(老师自己写的插件)
            $('#hometown').region({
                url : '/public/assets/jquery-region/region.json'
            });

            // 表单提交
            $("#saveInfo").on("click", function () {
                // 获取籍贯
            var p = $("#p option:selected").text();
            var c = $("#c option:selected").text();
            var d = $("#d option:selected").text();
            var tc_hometown = p + "|" + c + "|" + d;
            // 更新富文本内容，如果不是用这个，文本域内容不会更新
            for(var instance in CKEDITOR.instances){
                CKEDITOR.instances[instance].updateElement();
            }
                $.ajax({
                    type: "post",
                    url: "/api/teacher/modify",
                    data: $("#settingInfo>form").serialize() + "&tc_hometown=" + tc_hometown,
                    dataType: "json",
                    success: function (data) {
                        if(data.code==200){
                            location.reload();
                        }
                    }
                });
            });

        }
    });
});