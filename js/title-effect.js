/**
 * HTML 문서가 준비되면 코드 블록 실행
 */
$(document).ready(function () {
    // Lettering 플러그인 적용
        // ".title" 클래스 요소의 각 문자를 span으로 분리
    $(".title").lettering();
});

/**
 * HTML 문서가 준비된 후 1000밀리초(1초) 뒤에 코드 블록 실행
 */
$(document).ready(function () {
    // titleEffect 함수 호출
    titleEffect();
}, 1000);

/*
 * 함수: GSAP(TweenMax) 라이브러리를 사용하여 텍스트 애니메이션을 생성
 */
function titleEffect() {
    // GSAP(TweenMax)의 새로운 TimelineMax 인스턴스(객체) 생성
    let mainTitle = new TimelineMax();

    // staggerFromTo - 애니메이션을 적용하는 함수
    mainTitle.staggerFromTo(
        // 대상: ".title" 클래스와 모든 내부 자식요소 문자의 span
        ".title span",

        // 애니메이션의 지속 시간(0.75초)
        0.75,

        {
            // 초기 상태에 대한 이징 함수
            ease: Back.easeOut.config(1.7),
            opacity: 0,
            bottom: -80,
        },

        {
            // 최종 상태에 대한 이징 함수
            ease: Back.easeOut.config(1.7),
            opacity: 1,
            bottom: 0,
        },

        // 각 span 간의 애니메이션 간격(0.05초)
        0.05
    );
}
