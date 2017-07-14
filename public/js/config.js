require.config({
    baseUrl:"/public/assets",
    paths:{
        jquery:"jquery/jquery.min",
        cookie:"jquery-cookie/jquery.cookie",
        template:"artTemplate/template-web",
        bootstrap:"bootstrap/js/bootstrap.min",
        datepickerJs:"bootstrap-datepicker/js/bootstrap-datepicker.min",
        language:"bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min",
        validate:"validate/jquery-validate.min",
        form:"jquery-form/jquery.form",
        ckeditor: "ckeditor/ckeditor",      /*处理富文本域*/
        region : 'jquery-region/jquery.region',   /*自己写的三级联动插件*/
        uploadify : 'uploadify/jquery.uploadify.min',
        common:"../js/common",
        index:"../js/index",
        login:"../js/login",
        tealist:"../js/teacher-list",
        teaadd:"../js/teacher-add",
        util:"../js/util",
        setting: "../js/setting"
    },
    shim:{
        bootstrap:{
            deps:["jquery"]
        },
        language:{
            deps:["jquery","datepickerJs"]
        },
        validate:{
            deps:["jquery"]
        },
        ckeditor: {
            exports: "CKEDITOR"
        },
        uploadify:{
            deps: ["jquery"]
        }
    // baseUrl: "/public/assets",
    // paths: {
    //     jquery: "jquery/jquery.min",
    //     cookie: "jquery-cookie/jquery.cookie",
    //     template: "artTemplate/template-web",
    //     bootstrap: "bootstrap/js/bootstrap.min",
    //     datepickerJs: "bootstrap-datepicker/js/bootstrap-datepicker.min",
    //     language: "bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min",
    //     validate: "validate/jquery-validate.min",
    //     form: "jquery-form/jquery.form",
    //     // ckeditor: "ckeditor/ckeditor",      /*处理富文本域*/
    //     // region : 'jquery-region/jquery.region',   /*自己写的三级联动插件*/
    //     // uploadify : 'uploadify/jquery.uploadify.min',
    //     common: "../js/common",
    //     index: "../js/index",
    //     login: "../js/login",
    //     tealist: "../js/teacher-list",
    //     util:"../js/util",
    //     // setting: "../js/setting"
    // },
    // shim: {
    //     bootstrap: {
    //         deps: ["jquery"]
    //     },
    //     language: {
    //         deps: ["jquery", "datepickerJs"]
    //     },
    //     validate: {
    //         deps: ["jquery"]
    //     }, 
//         ckeditor: {
//             exports: "CKEDITOR"
//         },
//         uploadify:{
//             deps: ["jquery"]
// >>>>>>> setting
//         }
    }
});