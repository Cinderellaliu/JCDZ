$(function () {
        var Index1 = 190;
        $(window).scroll(function (event) {
            if ($(".index-title").first().offset().top - $(window).scrollTop() <= Index1) {
                $("#myScrollspy ul.nav-pills").css("top", "60px");
            }
            else {

                $("#myScrollspy ul.nav-pills").css("top", "600px");
            }
        });
    });

//鼠标滚动事件