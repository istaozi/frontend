var r = {};
if (require) {
    r = require;
}
r.config({
    baseUrl: "./build/",
    paths: {
        "jquery": "js/common/jquery-1.11.1",
        "base": "js/common/base",
        "json": "js/common/json2",
        "juicer" : "js/common/juicer",
        "static":"mods/const"
    },
    shim: {

    }
});
define.amd.jQuery = true;
