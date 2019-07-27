$(document).ready(function () {

    // #btnTop 按鈕點擊事件
    $("#btnTop").click(function (e) { 
        
        // alert("點了按鈕~");

        // 尋找 網頁與身體 動畫效果 ({捲動上方：0}，時間);
        $("html, body").animate({scrollTop: 0}, 1000);
    });
});