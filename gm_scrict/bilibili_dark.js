// ==UserScript==
// @name         暗黑bilibili
// @namespace    bilibiliDarkByDXY
// @version      0.1
// @description  将b站改为dark风格
// @author       淺い空
// @match        *://*.bilibili.com/*
// @require      http://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js
// ==/UserScript==


(function () {
    window.onload = toDark
    window.onmousemove = toDark
    window.onscroll = toDark
    window.onclick = toDark
})();


function toDark() {
    let url = window.location.href
    if (url.startsWith("https://www.bilibili.com/video/")) {
        //播放页面
        console.log("视频播放页面dark")
    } else if ("https://www.bilibili.com/" == url) {
        console.log("主页dark")
        totalFontColor()
        mainHeaderDark()
        mainBodyDark()
        mainFooterDark()
    } else if (url.startsWith("https://t.bilibili.com")) {
        console.log("动态页dark")
        totalFontColor()
        dynamicHeader()
        dynamicBody()
    } else if (url.startsWith("https://space.bilibili.com")) {
        console.log("用户页面")
        totalFontColor()
    } else {
        console.log("其他页面暂时没做,请联系作者，qq：9711813137，邮箱：971181317@qq.com")
    }
}

function itemSelect() {
    $(this).css("background", "rgb(2,157,208)")
}

function itemNotSelect() {
    $(this).css("background", "#2d2d2d");
}

function totalFontColor() {
    //总字体颜色更改
    $("body").css("color", "#ffffff")
    $("a").css("color", "#ffffff")
    $("p").css("color", "#ffffff")
    $("span").css("color", "#ffffff")
}

function mainFooterDark() {
    $(".international-footer").css("background", "#1c1c1c")
}

function mainBodyDark() {
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

    $(".list-box").css("background", "#2d2d2d");
    $(".list-box div").css("background", "#2d2d2d");

    //排行榜弹出抽屉
    $(".popover-video-card.pvc").css("background", "#2d2d2d")

    //杂项
    $(".btn.btn-change").css("color", "#ffffff");
    $(".contact-help")
        .css("color", "#ffffff")
    let btnArr = [
        ".btn.more", ".more", ".btn.btn-change", ".change-btn", ".tl-link", "rank-number", "div.item.sortable", ".contact-help"
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

function mainHeaderDark() {
    //头tab嵌套页面
    //收藏
    $(".line-2").css("color", "#ffffff")
    $(".tab-item.tab-item--normal")
        .mousemove(itemSelect)
        .mouseleave(itemNotSelect)
    $(".header-video-card")
        .mousemove(itemSelect)
        .mouseleave(itemNotSelect)
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
    $(".item .van-popover__reference").css("background", "#2d2d2d")
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

function dynamicHeader() {
    //todo
    $(".fixed-bg").css("background", "#1c1c1c")
    $(".home-content").css("background", "#1c1c1c")
    //头
    $(".mini-header__content.mini-header--login").css("background", "#2d2d2d")
    mainHeaderDark()
}

function dynamicBody() {
    //todo
    //左个人信息
    $(".content").css("background", "#2d2d2d")
    $(".bottom").css("background", "#2d2d2d")
    //左边直播列表
    $(".live-panel").css("background", "#2d2d2d")
    $(".up-name.line-clamp-1").css("color", "#ffffff")
    $(".live-name.line-clamp-2").css("color", "#ffffff")
    //直播用户抽屉
    $(".userinfo-content").css("background", "#2d2d2d")
    // $(".btn-box").css("color", "#000000")
    //动态发布
    $(".section-block").css("background", "#2d2d2d")
    $(".publish-panel").css("background", "#2d2d2d")
    $(".core-style")
        .css("background", "#2d2d2d")
        .css("border", "1px solid #ffffff")
        .css("color", "#ffffff")
    //公告栏
    $(".notice-panel").css("background", "#2d2d2d")
    //话题
    $(".new-topic-panel").css("background", "#2d2d2d")
    $(".title.tc-black").css("color", "#ffffff")
    //动态上方头像
    $(".most-viewed-panel")
}