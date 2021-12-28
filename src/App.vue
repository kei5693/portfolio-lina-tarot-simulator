<template>
  <div id="app" :class="{on: checkAgent}">
    <router-view/>
  </div>
</template>
<script>
export default {
  computed: {
    checkAgent(){
      var userAgent = window.navigator.userAgent;
      var isSamsungBrowser = userAgent.indexOf('SamsungBrowser');
      var isKakaoBrowser = userAgent.indexOf('KAKAOTALK');
      var isKakaoSamsung = false;

      if(isKakaoBrowser > 0 || isSamsungBrowser > 0){
        isKakaoSamsung = true;
      }
      return isKakaoSamsung
    },
  },
}
</script>
