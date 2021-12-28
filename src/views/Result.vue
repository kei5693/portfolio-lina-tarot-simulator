<template>
  <div id="result">
    <h1><img :src="require(`@/assets/img/img_logo.png`)" alt="라이나 생명" /></h1>
    <div class="inner">
      <h2><img :src="require('@/assets/img/result/img_text1.png')" alt="" /></h2>
      
      <ul class="visual">
        <li><img :src="require(`@/assets/img/tarot/${$store.state.selectedCardIndexFirst}.png`)" alt="" /><span>{{$store.state.selectedCardIndexFirst}}</span></li>
        <li><img :src="require(`@/assets/img/tarot/${$store.state.selectedCardIndexSecond}.png`)" alt="" /><span>{{$store.state.selectedCardIndexSecond}}</span></li>
      </ul>

      <div class="cardLayout resultHealth" ref="resultHealth">
        <div class="inner">
          <h3>오늘, 나의 <span>건강운</span></h3>
          <div class="score" :class="`point${$store.getters.getHealthData[0].score}`">
            <span></span><span></span><span></span>
          </div>
          <div class="contents">
            <dl>
              <dt v-html="$store.getters.getHealthData[0].headCopy"></dt>
              <dd><p>{{$store.getters.getHealthData[0].bodyCopy}}</p></dd>
            </dl>
            <button type="button" @click="toggleSlide(1)"><span>더보기</span><span>접기</span></button>
          </div>
        </div>
      </div>

      <div class="cardLayout resultMoney" ref="resultMoney">
        <div class="inner">
          <h3>오늘, 나의 <span>금전운</span></h3>
          <div class="score" :class="`point${$store.getters.getMoneyData[0].score}`">
            <span></span><span></span><span></span>
          </div>
          <div class="contents">
            <dl>
              <dt v-html="$store.getters.getMoneyData[0].headCopy"></dt>
              <dd><p>{{$store.getters.getMoneyData[0].bodyCopy}}</p></dd>
            </dl>
            <button type="button" @click="toggleSlide(2)"><span>더보기</span><span>접기</span></button>
          </div>
        </div>
      </div>

      <div class="recommended">
        <h3>보험이 궁금할 때, 케어가 필요할 때!<br>라이나생명이 도와 드리겠습니다.</h3>
        <p>자세한 보험 상담은<br> 담당 설계사(상담사)에게 문의주세요.</p>
        <button type="button" @click="onClickPopup(1)"><span>라이나 강력 추천 상품</span></button>
      </div>

      <div class="btnBox">
        <button type="button" @click="onClickPopup(2)"><span>건강운을 부르는 TIP!</span></button>
        <button type="button" @click="onClickPopup(3)"><span>금융운을 높이는 TIP!</span></button>
        <div>
          <button type="button" @click="onClickPopup(4)"><span>타로 공유하기</span></button>
          <button type="button" @click="replayTarot()"><span>처음으로</span></button>
        </div>
      </div>
    </div>
    <!-- //inner -->

    <!-- POPUP share -->
    <transition name="popupDimmed" mode="out-in">
      <div id="layerPopupBox" v-if="popupToggle">
        <div class="innerBox" :class="{auto : popupShare}">
          <transition name="popupDimmed" mode="out-in">
            <div v-if="popupRecommend">
              <h2>라이나 강력 추천 상품</h2>
              <div class="scrollBox">
                <div><img src="~@/assets/img/result/img_popup1_1.png" alt=""></div>
                <div><img src="~@/assets/img/result/img_popup1_2.png" alt=""></div>
                <div><img src="~@/assets/img/result/img_popup1_3.png" alt=""></div>
                <div><img src="~@/assets/img/result/img_popup1_4.png" alt=""></div>
                <div><img src="~@/assets/img/result/img_popup1_5.png" alt=""></div>
              </div>
            </div>
          </transition>

          <transition name="popupDimmed" mode="out-in">
            <div v-if="popupRelation">
              <h2>건강운을 부르는 TIP!</h2>
              <div class="scrollBox">
                <div><img src="~@/assets/img/result/img_popup2.png" alt=""></div>
              </div>
            </div>
          </transition>

          <transition name="popupDimmed" mode="out-in">
            <div v-if="popupDesign">
              <h2>금융운을 높이는 TIP!</h2>
              <div class="scrollBox">
                <div><img src="~@/assets/img/result/img_popup3.png" alt=""></div>
              </div>
            </div>
          </transition>

          <transition name="popupDimmed" mode="out-in">
            <div v-if="popupShare">
              <h2>공유하기</h2>
              <div class="scrollBox auto">
                <ul class="share-list">
                  <li @click="onClickKakao()">
                    <img src="~@/assets/img/icon_kakao.png" alt="">
                    <span>카카오톡</span>
                  </li>
                  <li
                    class="url-copy"
                    @click="onClickShare()"
                  >
                  <img src="~@/assets/img/icon_sms.png" alt="">
                  <span>문자</span>
                  </li>
                </ul>
              </div>
            </div>
          </transition>

          <button type="button" @click="onClickPopup('close')">닫기</button>
        </div>
      </div>
    </transition>
    <!-- //POPUP -->
  </div>
</template>
<script>
export default {
  data(){
    return {
      popupToggle: false,
      popupRecommend: false,
      popupRelation: false,
      popupDesign: false,
      popupShare: false,
    }
  },
  methods: {
    toggleSlide(index){
      index == 1 ? this.$refs.resultHealth.classList.toggle("on") : this.$refs.resultMoney.classList.toggle("on");
    },
    onClickPopup(arg){
      document.body.classList.toggle('on');
      this.popupToggle = !this.popupToggle;

      if(arg == 1){
        this.popupRecommend = true;
      } else if(arg == 2){
        this.popupRelation = true;
      } else if(arg == 3){
        this.popupDesign = true;
      } else if(arg == 4){
        this.popupShare = true;
      } else {
        this.popupRecommend = false;
        this.popupRelation = false;
        this.popupDesign = false;
        this.popupShare = false;
      }
    },
    onClickKakao(){
      console.log('kakao');
      window.Kakao.Link.sendCustom({
        templateId: 66987 ,
        templateArgs: {
          'title': '라이나생명 타로카드',
          'description': `단, 두 장의 카드로 오늘의 건강운과 금전운을 확인해보세요!`
        }
      });
    },
    onClickShare() {
      var _href = 'http://192.168.0.12:8080/#/',
          _text = `[라이나생명 타로카드] 단, 두 장의 카드로 오늘의 건강운과 금전운을 확인해보세요!` + encodeURIComponent("\n" + _href);
          
      location.href = 'sms:' + (this.checkMobile() == 'ios' ? '&' : '?') + 'body='+ _text;
    },
    checkMobile(){
      var varUA = navigator.userAgent.toLowerCase();
      if ( varUA.indexOf('android') > -1) {
        //안드로이드
        return "android";
      } else if ( varUA.indexOf("iphone") > -1 || varUA.indexOf("ipad") > -1 || varUA.indexOf("ipod") > -1 ) {
        //IOS
        return "ios";
      } else {
        //아이폰, 안드로이드 외
        return "other";
      }
    },
    replayTarot(){
      this.$router.push('/');
    },
  },
  computed: {

  },
  mounted() {
    
  },
}
</script>
<style>
.popupDimmed-enter,
.popupDimmed-leave-to {
  opacity: 0;
}
.popupDimmed-enter-active,
.popupDimmed-leave-active {
  transition: opacity 0.2s;
}
</style>