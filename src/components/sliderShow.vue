<template>
  <div class="slide-show" @mouseover="clearInv" @mouseout="runInv">
    <div class="slide-img">
      <a :href="slides[nowIndex].href">
        <transition name="slide-trans">
          <img v-if="isShow" :src="slides[nowIndex].src" alt="">
        </transition>
        <transition name="slide-trans-old">
          <img v-if="!isShow" :src="slides[nowIndex].src" alt="">
        </transition>
      </a>
    </div>
    <h2 class="title-img">{{slides[nowIndex].title}}</h2>
    <ul class="slide-pages">
      <li @click="goTo(prevIndex)">&lt;</li>
      <li v-for="(item,index) in slides">
        <a href="javascript:;" :class="{active:index===nowIndex}" @click="goTo(index)">{{index + 1}}</a>
      </li>
      <li @click="goTo(nextIndex)">&gt;</li>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    props: {
      slides: {
        type: Array,
        default: []
      },
      inv: {
        type: Number,
        default: 2500
      }
    },
    data(){
      return {
        nowIndex: 0,
        isShow: false
      }
    },
    computed: {
      prevIndex(){
        if (this.nowIndex === 0) {
          return this.slides.length - 1
        } else {
          return this.nowIndex - 1
        }
      },
      nextIndex(){
        if (this.nowIndex === this.slides.length - 1) {
          return 0
        } else {
          return this.nowIndex + 1
        }
      }
    },
    methods: {
      goTo(index){
        this.isShow = false;
        setTimeout(() => {
          this.isShow = true;
          this.nowIndex = index;
          this.$emit('onchange',index)
        }, 10)
      },
      runInv(){
        this.invId = setInterval(() => {
          this.goTo(this.nextIndex)
        }, this.inv)
      },
      clearInv(){
        clearInterval(this.invId)
      }
    },
    mounted: function () {
      this.runInv()
      console.log(this.slides);
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped="">
  .slide-trans-enter-active {
    transition: all .5s;
  }

  .slide-trans-enter {
    transform: translateX(900px);
  }

  .slide-trans-old-leave-active {
    transition: all .5s;
    transform: translateX(-900px);
  }

  .slide-show
    position relative
    margin 20px auto
    width 900px
    height 500px
    overflow hidden
    .slide-img img
      position absolute
      left 0
      top:0
      width 900px
      height 500px
      overflow hidden
    .title-img
      position absolute
      bottom 0
      left 0
      padding-left 10px
      width 100%
      height 35px
      line-height 35px
      background rgba(0, 0, 0, 0.5)
      color white
      overflow hidden

    .slide-pages
      position absolute
      right 20px
      bottom 0
      overflow hidden
      li
        float left
        margin 0 5px
        color white
        font-size 18px
        cursor pointer
        line-height 35px
        user-select none
        &:last-child, &:first-child
          padding 0 15px
          margin-top 5px
          height 25px
          line-height 25px
          font-weight 700
          background rgba(255, 0, 255, 0.5)
          border-radius 10px
        a
          display inline-block
          width 25px
          height 25px
          line-height 25px
          text-align center
          border-radius 50%
          background rgba(0, 255, 255, 0.5)
          color white
          font-size 18px
          &.active
            color #FF1B40


</style>
