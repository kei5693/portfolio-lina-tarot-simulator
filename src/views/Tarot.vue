<template>
  <div id="tarot">
    <h1><img :src="require(`@/assets/img/img_logo.png`)" alt="라이나 생명" /></h1>
    <div class="inner cardLayout">
      <div class="title">
        <h2 ref="titleChange">
          <img :src="require(`@/assets/img/tarot/img_text1.png`)" alt="당신의 ‘건강·금전운’을 생각하며 20장의 카드 중 1장을 신중히 선택해주세요." />
          <img :src="require(`@/assets/img/tarot/img_text2.png`)" alt="당신의 ‘건강·금전운’을 생각하며 20장의 카드 중 1장을 신중히 선택해주세요." />
        </h2>
      </div>

      <div class="cardListBox"
        :class="{on : isSelectCard1}"
      >
        <div class="inner">
          <ul class="cardList"
            ref="cardList1"
            :class="{on : isSelectCard1}"
          >
            <li
              v-for="(el, index) in tarotCardData"
              :key="`el${index}`"
              @click="selectCard(el, index, 'card1')"
              :class="{on : selectCard1 == index}"
              :style="{'--i': index}"
            >
              <img v-if="index < 16" :src="require('@/assets/img/tarot/img_card1.png')" alt="">
              <img v-else :src="require('@/assets/img/tarot/img_card2.png')" alt="">
              <span>{{el}}</span>
            </li>
          </ul>

          <ul class="cardList second"
            ref="cardList2"
            :class="{on : isSelectCard2}"
          >
            <li
              v-for="(el, index) in $store.state.secontTarotCardData"
              :key="`el${index}`"
              @click="selectCard(el, index, 'card2')"
              :class="{on : selectCard2 == index}"
              :style="{'--i': index}"
            >
              <img :src="require('@/assets/img/tarot/img_card2.png')" alt="">
              <span>{{el}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return {
      tarotCardData: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
      isSelectCard1: false,
      isSelectCard2: false,
      selectCard1: null,
      selectCard2: null,
    }
  },
  computed: {
  },
  mounted() {
    // this.tarotCardData = JSON.parse(JSON.stringify(Object.assign(this.$store.state.tarotCardData, this.tarotCardData)));
    setTimeout(() => {
      this.intervalCard();
    }, 1000);
    this.shuffle(this.tarotCardData);
  },
  methods: {
    intervalCard(){
      this.$nextTick( ()=> {
        this.$refs.cardList1.classList.add('interval');
      });
    },
    selectCard(el, index, count){
      // 카드 재선택 방지
      if(count == 'card1' && this.isSelectCard1 == true) return
      if(count == 'card2' && this.isSelectCard2 == true) return

      //this.$store.commit('getSelectCard', {el, index, count});

      switch(count){
        case 'card1' :
          this.selectCard1 = index;
          this.isSelectCard1 = true;
          this.$store.commit('changeSelectedCardIndexFirst', el);

          setTimeout(() => {
            this.$refs.titleChange.classList.add('on');
          }, 1500);

          setTimeout(() => {
            this.$refs.cardList2.classList.add('interval');
          }, 2500);
          break;
        default:
          this.selectCard2 = index;
          this.isSelectCard2 = true;
          this.$store.commit('changeselectedCardIndexSecond', index);
          setTimeout(() => {
            this.$router.push({ path: '/result' })
          }, 1800);
      }
    },
    shuffle(array){
      // for (let index = array.length - 1; index > 0; index--){
      //   // 무작위 index 값을 만든다. (0 이상의 배열 길이 값)
      //   const randomPosition = Math.floor(Math.random() * (index + 1));

      //   // 임시로 원본 값을 저장하고, randomPosition을 사용해 배열 요소를 섞는다.
      //   const temporary = array[index];

      //   array[index] = array[randomPosition];
      //   array[randomPosition] = temporary;
      // }

      for(let i = array.length - 1; i > 0; i--) {
        let randomIndex = Math.floor(Math.random() * i);
        
        let temp = array[i];

        this.$set(array, i, array[randomIndex]);
        this.$set(array, randomIndex, temp);
      }
    }
  },
}
</script>
