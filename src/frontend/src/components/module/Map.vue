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
    initMap() {
      var container = document.getElementById('map');
      var options = {
        center: new kakao.maps.LatLng(37.478319, 126.951577),
        level: 6
      };
      new kakao.maps.Map(container, options);
    },

    addScript() {
      const jsKey = '7175a2b5e64296cba044869604551482';
      const script = document.createElement('script');
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.src = 'http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=' + jsKey;
      document.head.appendChild(script);
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