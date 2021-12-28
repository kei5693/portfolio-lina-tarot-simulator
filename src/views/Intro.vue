<template>
  <div id="intro">
    <h1><img :src="require(`@/assets/img/img_logo.png`)" alt="라이나 생명" /></h1>
    <ul class="visual" ref="interval">
      <li>
        <img :src="require(`@/assets/img/intro/img_visual0101.png`)" alt="" />
        <img :src="require(`@/assets/img/intro/img_visual0102.png`)" alt="" />
        <div>
          <p style="--i:1">
            당신의 <em>건강운</em>이<br> 궁금하신가요?
          </p>
          <p style="--i:2">
            아니면 <em>금전운</em>을<br> 알고 싶으신가요?
          </p>
        </div>
      </li>
      <li>
        <img :src="require(`@/assets/img/intro/img_visual0201.png`)" alt="" />
        <img :src="require(`@/assets/img/intro/img_visual0202.png`)" alt="" />
        <div>
          <p style="--i:1">
            자신이 가는 길을 아는 자만이<br>
            세상의 문을 열 수 있습니다.
            <em>
              오늘, 당신의 운명을<br>
              지금 확인하세요.
            </em>
          </p>
        </div>
      </li>
      <li>
        <img :src="require(`@/assets/img/intro/img_visual0301.png`)" alt="" />
        <img :src="require(`@/assets/img/intro/img_visual0302.png`)" alt="" />
        <div>
          <p style="--i:1">
            단, 두 장의 카드로<br>
            오늘의 운을 확인해보세요.
          </p>
          <router-link to="/tarot" style="--i:2">타로점 보러가기</router-link>
          <span style="--i:2">라이나생명 준법감시인 확인필 제 2021-M00674-02호(2021-10-15)</span>
        </div>
      </li>
    </ul>
  </div>
</template> 
<script>
export default {
  mounted() {
    this.intervalView();
  },
  methods: {
    intervalView(){
      var targetEl = Array.from(this.$refs.interval.children);
      targetEl.forEach((element,index) => {
        setTimeout(() => {
          // siblings class
          Array.from(targetEl).filter(e => e != element ? e.classList.remove('on') : e.classList.add('on'));
        }, 3500 * index);
      });
    },
  },
}
</script>