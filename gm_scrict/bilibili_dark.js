// ==UserScript==
// @name         dark
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       dxy
// @match        https://www.bilibili.com/*
// @include      *
// @grant        GM_addStyle(css)
// @require      http://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js
// ==/UserScript==

(function () {
    //主题颜色更改
    $("#international-footer").css("background", "#1c1c1c")
    $("#app").css("background", "#1c1c1c")
    $("#primary-menu-itnl").css("color", "#ffffff")
    //banner

    //header banner左侧按钮
    $("li").css("background", "#2d2d2d");
    //主页左侧联系客服按钮
    let contact_help = $(".contact-help");
    contact_help.css("background", "#1c1c1c")
    contact_help.css("color", "#2d2d2d")
    //右侧list
    $(".list-box").css("background", "#2d2d2d")
    $(".item").css("color", "#ffffff")
    $(".item").css("background-color", "#2d2d2d")
})();