// Kakao 지도 API
// 출처:(https://apis.map.kakao.com/web/guide/#step2)

let container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
let options = {
    // 지도를 생성할 때 필요한 기본 옵션
    center: new kakao.maps.LatLng(37.28586044214805, 127.05950505033185), // 지도의 중심좌표
    level: 3, // 지도의 레벨(확대, 축소 정도)
};

let map = new kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴

// 마커가 표시될 위치
let markerPosition = new kakao.maps.LatLng(
    37.28586044214805,
    127.05950505033185
);

// 마커 생성
let marker = new kakao.maps.Marker({
    position: markerPosition,
});

// 마커가 지도 위에 표시되도록 설정
marker.setMap(map);