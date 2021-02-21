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
    window.onload = toDark
    window.onmousemove = toDark
    window.onscroll = toDark
    window.onclick = toDark
})();


function toDark() {
    //主题颜色更改
    $("#international-footer").css("background", "#1c1c1c")
    $("#app").css("background", "#1c1c1c")
    $("#primary-menu-itnl").css("color", "#ffffff")
    $("body").css("color", "#ffffff")
    $("a").css("color", "#ffffff")
    headerDark()
    bodyDark()
    footerDark()
}

function footerDark() {

}

function bodyDark() {
    //最上面一行
    $("div.user-con.signin .mini-vip").css("background", "")
    $("div.user-con.signin .mini-favorite").css("background", "")
    $("div.user-con.signin .mini-history").css("background", "")
    //最上方广告
    $("a.name.no-link").css("color", "#ffffff")
    $(".bypb-window").css("color", "#ffffff")
    $(".bypb-window .online")
        .css("background", "#2d2d2d")
        .css("border", "1px solid #2d2d2d")
    //右侧list
    let rightListItem = $("div.item.sortable")
    let itemSelect = function () {
        $(this)
            .css("color", "#2d2d2d")
            .css("background", "rgb(2,157,208)")
    }
    let itemNotSelect = function () {
        $(this)
            .css("color", "#ffffff")
            .css("background", "#2d2d2d")
    }
    rightListItem.mousemove(itemSelect);
    rightListItem.mouseup(itemSelect)
    rightListItem.mousedown(itemSelect)
    rightListItem.mouseleave(itemNotSelect)
    $(".list-box").css("background", "#2d2d2d")
    $(".list-box div").css("background", "#2d2d2d")
}

function headerDark() {
    //banner下方主页内容
    $(".primary-menu-itnl li span")
        .css("color", "#ffffff")
    $(".primary-menu-itnl li")
        .css("border", "1px solid #1c1c1c")
    $(".international-header a").css("color", "#ffffff")
    $(".item .van-popover__reference").css("background", "#1c1c1c")
    //tab触摸后小窗口颜色适配
    $(".van-popover")
        .css("background", "#2d2d2d")
        .css("border", "1px solid #2d2d2d")
    $(".van-popper")
        .css("background", "#2d2d2d")
    $(".van-popper-channel")
        .css("background", "#2d2d2d")
    //主页左侧联系客服按钮
    $(".contact-help")
        .css("background", "#1c1c1c")
        .css("color", "#2d2d2d")
}