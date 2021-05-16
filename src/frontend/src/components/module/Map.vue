<template>
  <div id="map"></div>
</template>

<script>
export default {
  name: "Map",
  mounted() {
    window.kakao && window.kakao.maps ?
        this.initMap() :
        this.addScript();
  },
  methods : {
    /**
     * 카카오 맵 SDK 호출
     */
    addScript() {
      const jsKey = '7175a2b5e64296cba044869604551482';
      const script = document.createElement('script');

      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.src = 'http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=' + jsKey;
      document.head.appendChild(script);
    },

    /**
     * 카카오 맵 초기화
     */
    initMap() {
      let container = document.getElementById('map');
      let options = {
        center: new kakao.maps.LatLng(37.478319, 126.951577),
        draggable: false,
        level: 6
      };

      let map = new kakao.maps.Map(container, options);
      this.setStoreMarker(map);
    },

    /**
     * 상점 위치에 마커 표시
     */
    setStoreMarker(map) {
      // 상점 정보
      const positions = [
        {
          title: '모드니',
          latlng: new kakao.maps.LatLng(37.4804904514911, 126.91338689194086),
          imageSrc: require('@/assets/img/모드니_대지_1.png')
        },
        {
          title: '디라이트 주얼리 공방',
          latlng: new kakao.maps.LatLng(37.47157199302544, 126.94070081774052),
          imageSrc: require('@/assets/img/디라이트_대지_1.png')
        },
        {
          title: '달쉬캔들',
          latlng: new kakao.maps.LatLng(37.47747083707544, 126.95431064391232),
          imageSrc: require('@/assets/img/달쉬캔들_대지_1.png')
        },
        {
          title: '베오트',
          latlng: new kakao.maps.LatLng(37.482245931091974, 126.90668943817496),
          imageSrc: require('@/assets/img/베오트_대지_1.png')
        },
        {
          title: 'Re:make',
          latlng: new kakao.maps.LatLng(33.451393, 126.570738),
          imageSrc: require('@/assets/img/리메이크_대지_1.png')
        },
        {
          title: 'AtoU Floor',
          latlng: new kakao.maps.LatLng(37.48377364906469, 126.9438129999),
          imageSrc: require('@/assets/img/아토우플로어_대지_1.png')
        },
        {
          title: 'MONIKIKI',
          latlng: new kakao.maps.LatLng(37.451777043106375, 126.90620453922452),
          imageSrc: require('@/assets/img/모니키키_대지_1.png')
        },
        // {
        //   title: '뜨개빛나날',
        //   latlng: new kakao.maps.LatLng(33.451393, 126.570738),
        //   imageSrc: require('@/assets/img/뜨갯빛나날_대지_1.png')
        // },
        // {
        //   title: '클레이그라운드',
        //   latlng: new kakao.maps.LatLng(33.451393, 126.570738),
        //   imageSrc: require('@/assets/img/클레이그라운드_대지_1.png')
        // },
        // {
        //   title: '윤아트연구소',
        //   latlng: new kakao.maps.LatLng(33.451393, 126.570738),
        //   imageSrc: require('@/assets/img/윤아트_대지_1.png')
        // },
        // {
        //   title: '센트마리아쥬',
        //   latlng: new kakao.maps.LatLng(33.451393, 126.570738),
        //   imageSrc: require('@/assets/img/센트마리아쥬_대지_1.png')
        // },
        // {
        //   title: '후디무디',
        //   latlng: new kakao.maps.LatLng(33.451393, 126.570738),
        //   imageSrc: require('@/assets/img/후디무디_대지_1.png')
        // },
        // {
        //   title: '칠한친구',
        //   latlng: new kakao.maps.LatLng(33.451393, 126.570738),
        //   imageSrc: require('@/assets/img/칠한친구_대지_1.png')
        // },
        // {
        //   title: '아란스토리',
        //   latlng: new kakao.maps.LatLng(33.451393, 126.570738),
        //   imageSrc: require('@/assets/img/아란스토리_대지_1.png')
        // }
      ];

      // 마커 생성
      for (let i = 0; i < positions.length; i ++) {
        let latlng = positions[i].latlng;
        let title = positions[i].title;
        let imageSrc = positions[i].imageSrc;
        let imageSize = new kakao.maps.Size(24, 35);
        let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

        let marker = new kakao.maps.Marker({
          map: map,             // 마커를 표시할 지도
          position: latlng,     // 마커를 표시할 위치
          title : title,        // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
          image : markerImage   // 마커 이미지
        });

        // 마커 클릭시 길찾기 팝업 오픈
        kakao.maps.event.addListener(marker, 'click', function() {
          // https://map.kakao.com/link/to/모드니,37.4804904514911,126.91338689194086
          let linkToUrl =  'https://map.kakao.com/link/to/';
          linkToUrl += title + ',';
          linkToUrl += latlng.Ma + ',';
          linkToUrl += latlng.La;

          window.open(linkToUrl);
        });
      }
    }
  }
}
</script>

<style scoped>
#map {
  width: 100%;
  height: 700px;
}
</style>