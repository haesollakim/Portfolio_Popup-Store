/**
 * 로고, 내비게이션의 첫번째 버튼 클릭 시
 */
$(".logo_bg, .top_tab_01, .bottom_tab_01").click(function () {
    // 페이지 새로고침
    location.reload();
});


/**
 * 내비게이션 버튼 모션
 */
$("[class^=top_tab],  [class^=bottom_tab]")
    .mousedown(function () {
        // 마우스 클릭 시 버튼에 모션 효과 적용
        $(this).css({
            "background-color": "#000000",
            color: $(this).css("background-color"),
            "box-shadow": "none",
            transform: "translateY(3px)",
            transition: "0.3s",
        });
    })
    .mouseup(function () {
        // 마우스 클릭 해제 시 버튼에 모션 효과 제거
        $(this).css({
            "background-color": "",
            color: "",
            "box-shadow": "",
            transform: "",
            transition: "",
        });
    });


/**
 * 이미지 슬라이드
 */
setInterval(function () {

    let slideWidth = $("[class^=slide]").width();

    // 슬라이드 이미지를 왼쪽으로 이동하여 무한 슬라이드 효과
    $("[class^=slide]").last().prependTo(".list_slide");
    $(".list_slide").css("margin-left", "-" + slideWidth + "px");
    $(".list_slide").animate({ marginLeft: "0px" });
}, 4000);


/**
 * 엘립스 폴라로이드 콘텐츠에 마우스 오버 시
 */
$(".elipse_01, .elipse_03, .polaroid_01, .polaroid_03").mouseover(function () {
    //Y축 기준 위로 이동
    $(this).css("transform", "translateY(-50px)");
});


/**
 * 엘립스 폴라로이드 콘텐츠에 마우스 오버 시
 */
$(".elipse_02, .polaroid_02").mouseover(function () {
    //Y축 기준 아래로 이동
    $(this).css("transform", "translateY(50px)");
});


/**
 * 마우스 이탈 시 Y축 기준 원위치로 이동
 */
$("[class^=elipse], [class^=polaroid]").mouseout(function () {
    $(this).css("transform", "translateY(0)");
});
