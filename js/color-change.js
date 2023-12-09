// 배열: 포인트 컬러를 담은 팔레트 역할의 색상 배열
const COLOR_ARRAY = ["#ff7f50", "#fff267", "#95ff7a", "#7d5acd"];

// 현재 사용 중인 색상의 인덱스 번호: 초기값은 0
let colorNum = 0;



/**
 * @param {string} baseSelector - 선택자의 기본 부분
 * @param {number} indexFirst -  첫(시작) 인덱스
 * @param {number} indexLast - 마지막(종료) 인덱스
 */

/**
 * 함수: 타이틀 섹션 문구 中 특정 범위의 문자에 대한 선택자를 생성하고 색상을 변경
 */
function colorChange(baseSelector, indexFirst, indexLast) {
    // 반복적으로 범위 내의 첫 문자부터 마지막 문자까지 선택자를 생성
    for (let i = indexFirst; i <= indexLast; i++) {
        // 생성된 선택자
        let resultSelector = baseSelector + i;
        // 문자의 컬러를 현재 색상 배열에서 가져와 설정
        $(resultSelector).css("color", COLOR_ARRAY[colorNum]);
    }
}

/**
 * 메서드: 1000밀리초(1초) 간격으로 색상 변경 및 반복 실행
 */
setInterval(function () {
    // 색상 인덱스 번호가 배열의 길이를 넘어가면 처음으로 초기화
    if (colorNum == COLOR_ARRAY.length) {
        colorNum = 0;
    }

    // 타이틀 섹션 문구 中 특정 범위의 문자('LEMON') 색상 변경
    colorChange("#section_title>h1 span.title:nth-child(2) span.char", 1, 5);

    // 타이틀 섹션 문구 中 특정 범위의 문자('OPEN') 색상 변경
    colorChange("#section_title>h1 span.title:nth-child(4) span.char", 7, 10);

    // 로케이션 섹션 문구 中 특정 범위의 문자('광교'+'컨벤션센터') 색상 변경
    $("#section_location>h1 span").css("color", COLOR_ARRAY[colorNum]);

    // 섹션 중앙부: 행사 진행 날짜(흐르는 글자 효과)의 색상 변경
    $(".flow_wrapper span").css("color", COLOR_ARRAY[colorNum]);

    // 배열 내부에서 다음 색상으로 이동
    colorNum++;
}, 1000);



/**
 * @param {number} _ - 현재 요소의 인덱스 (사용되지 않음)
 * @param {string} html - 대상 HTML 문자열
 * @returns {string} - 대체된 HTML 문자열
 */

// 엘립스 섹션의 타이포그래피 中 문자 'S'를 찾아 ".colorful" 클래스의 span으로 감싸는 코드
$("#section_elipse .typography").html(function (_, html) {
    return html.replace(/S/g, '<span class="colorful">S</span>');
});

// 폴라로이드 섹션의 타이포그래피 中 문자 'E'를 찾아 ".colorful" 클래스의 span으로 감싸는 코드
$("#section_polaroid .typography").html(function (_, html) {
    return html.replace(/E/g, '<span class="colorful">E</span>');
});


// 클래스가 ".colorful"인 요소에 대해 각각 반복 작업을 수행하는 코드
$(".colorful").each(function (index) {
    // 색상 배열에 맞춰 'S'+'E' 문자의 컬러를 변경
    $(this).css("color", COLOR_ARRAY[index % COLOR_ARRAY.length]);
});
