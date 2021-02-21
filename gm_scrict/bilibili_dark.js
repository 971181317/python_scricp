// ==UserScript==
// @name         暗黑bilibili
// @namespace    bilibiliDarkByDXY
// @version      0.1
// @description  将b站改为dark风格
// @author       淺い空
// @match        https://www.bilibili.com/*
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
    $("body").css("color", "#ffffff")
    $("a").css("color", "#ffffff")
    $("p").css("color", "#ffffff")
    $("span").css("color", "#ffffff")
    headerDark()
    bodyDark()
    footerDark()
}

function footerDark() {
    $(".international-footer").css("background", "#1c1c1c")
}

function bodyDark() {
    $("#app").css("background", "#1c1c1c")
    $("#primary-menu-itnl").css("color", "#ffffff")
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
    //右侧list鼠标触碰动作
    let rightListItem = $("div.item.sortable")
    let itemSelect = function () {
        $(this).css("background", "rgb(2,157,208)")
    }
    let itemNotSelect = function () {
        $(this).css("background", "#2d2d2d");
    }
    rightListItem
        .mousemove(itemSelect)
        .mouseup(itemSelect)
        .mousedown(itemSelect)
        .mouseleave(itemNotSelect);
    $(".list-box").css("background", "#2d2d2d");
    $(".list-box div").css("background", "#2d2d2d");

    //杂项
    $(".contact-help")
        .css("color", "#ffffff")
        .mousemove(itemSelect)
        .mouseup(itemSelect)
        .mousedown(itemSelect)
        .mouseleave(itemNotSelect);
    $(".btn.btn-change").css("color", "#ffffff");
    /*
    更多和换一换按钮
    */
    let btnArr = [
        ".btn.more", ".more", ".btn.btn-change", ".change-btn", ".tl-link", "rank-number"
    ]
    for (let i = 0; i < btnArr.length; i++) {
        $(btnArr[i])
            .mousemove(itemSelect)
            .mouseup(itemSelect)
            .mousedown(itemSelect)
            .mouseleave(itemNotSelect);
    }
    $(".tl-link").css("background", "#2d2d2d")
    $(".rank-number").css("background", "#2d2d2d")
    //排行榜数字
    $(".number")
        .css("background", "#2d2d2d")
        .css("color", "#ffffff")
    $(".number.on")
        .css("background", "rgb(2,157,208)")
        .css("color", "#ffffff")
}

function headerDark() {
    //头tab嵌套页面
    //收藏
    $(".line-2").css("color", "#ffffff")
    $(".tab-item.tab-item--normal")
        .mousemove(function () {
            $(this)
                .css("background", "rgb(2,157,208)")
        })
        .mouseleave(function () {
            $(this)
                .css("background", "#2d2d2d")
        })
    $(".header-video-card")
        .mousemove(function () {
            $(this)
                .css("background", "rgb(2,157,208)")
        })
        .mouseleave(function () {
            $(this)
                .css("background", "#2d2d2d")
        })
    $(".play-view-all a").css("background", "#2d2d2d")
    //动态
    $(".tab-bar").css("background", "#2d2d2d")

    $(".title").css("color", "#ffffff")
    $(".im-list-box")
        .css("background", "#2d2d2d")
        .css("color", "#ffffff")
    //banner下方主页内容
    $(".primary-menu-itnl li span").css("color", "#ffffff")
    $(".primary-menu-itnl li").css("border", "1px solid #1c1c1c")
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