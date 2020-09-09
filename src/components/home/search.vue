<template>
  <div>
    <van-search
      v-model="value"
      autofocus
      show-action
      placeholder="请输入搜索关键词"
      @search="onSearch(value)"
    >
      <template #action>
        <div @click="onSearch">搜索</div>
      </template>
    </van-search>
    <section class="every">
      <h5>大家都在搜</h5>
      <ul><li v-for="(item, index) in every1" :key="index">{{ item }}</li></ul>
      <ul><li v-for="(item, index) in every2" :key="index">{{ item }}</li></ul>
    </section>
    <section>
      <h5>我搜过的</h5>
      <ul><li v-for="(item, index) in historysearch" :key="index">{{ item }}</li></ul>
    </section>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  data() {
    return {
      value: '',
      every1: ['月饼','红酒','包','茶','中秋'],
      every2: ['香蕉','被子','茶具','香水','按摩'],
      historysearch:[]
    };
  },
  // updated() {
  //   this.historysearch = JSON.parse(window.localStorage.getItem('logindata'))
  // },
  mounted() {
    setInterval(() => {
    this.historysearch = JSON.parse(window.localStorage.getItem('logindata'))
      // console.log(this.$store)
    }, 100);
    // console.log(this.$store)
  },
  methods: {
    ...mapActions(['increment']),
    onSearch(val) {
      this.$store.commit('increment',this.value)
      // this.$store.state.historysearch.push(this.value)
      // console.log(this.historysearch)
      // this.historysearch.push(this.value)
      // console.log(this.value)
      // this.historysearch.push(this.value)
      // console.log(this.historysearch)
    },
  },
};
</script>
<style lang='scss' scoped>
.every {
  font-size: 14px;
  color: #999;
  ul {
      padding: 15px;
    display: flex;
    li {
      width: 40px;
      height: 20px;
      background: #fff;
    }
  }
    h5 {
      font-weight: 300;
      font-size: 18px;
      color: #000;
    }
}
section {
  font-size: 14px;
  color: #999;
  ul {
      padding: 15px;
      li {
        padding: 5px 0;
      }
  }
  h5 {
      font-weight: 300;
      font-size: 18px;
      color: #000;
    }
}
</style>
