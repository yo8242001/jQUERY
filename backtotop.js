
$(document).ready(function () {

    // #btnTop 按鈕點擊事件
    $("#btnTop").click(function (e) { 
        
        // alert("點了按鈕~");

        // 尋找 網頁與身體 動畫效果 ({捲動上方：0}，時間);
        $("html, body").animate({scrollTop: 0}, 1000);

    });

    
    // alert($(window).scrollTop());
    
    $("#btnTop").fadeOut(0);                // 按鈕隱藏 - 也可設定在 CSS 內

    // 元素 捲動 (匿名函式() {  });
    $(window).scroll(function() {
        
        if ($(window).scrollTop() > 200) {  // 如果 螢幕頂端 > 200

            $("#btnTop").fadeIn(500);       // 顯示按鈕

        } else {                            // 否則

            $("#btnTop").fadeOut(500);      // 隱藏按鈕
            
        }
    });
});
