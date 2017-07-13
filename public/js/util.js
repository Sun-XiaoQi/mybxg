
    define(["jquery"], function ($) {
        // 菜单高亮效果 
        return {
            setMenu: function (pathName) {
                $(".aside>.navs a").removeClass("active");
                $(".aside>.navs a[href='" + pathName + "']").addClass("active");
            }
        }

    });
