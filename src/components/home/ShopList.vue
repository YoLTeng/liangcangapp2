<template>
  <div>
    <section v-for="(item, index) in list" :key="index">
      <h2>{{ item.title }}</h2>
      <p>{{ item.detail }}</p>
      <ul>
      <li v-for="(item, index) in item.imglist" :key="index"><img :src="item" alt=""></li>
      </ul>
    </section>
  </div>
</template>

<script>
import img1 from '../../assets/img/多功能移动旋转小推车  随心自主定制经典收纳柜.良仓－生活美学指南@3x.png'
import img2 from '../../assets/img/玫瑰蜜巧克力礼盒  巧克力与玫瑰的美妙组合.良仓－生活美学指南@3x.png'
import img3 from '../../assets/img/青蛙腋下包 鳄鱼纹  独特造型 顶级质感 时髦百搭.良仓－生活美学指南@3x.png'
import img4 from '../../assets/img/Cambridge 玫瑰金尼龙带腕表  北欧简约风 中性经典款.良仓－生活美学指南@3x.png'
export default {
  data() {
    return {
      list:[
        {
          title: '好物热卖',
          detail: '每周TOP榜',
          imglist: [img1, img2, img3, img4]
        },
        {
          title: '新品速递',
          detail: 'in季新品抢先购',
          imglist: [img2, img3, img4, img1]
        }
      ],
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
};
</script>
<style lang='scss' scoped>
section {
  width: 100%;
  padding: 18px;
  h2 {
    margin-top: 5px;
    font-size: 20px;
  }
  p {
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: 12px;
  }
  ul::-webkit-scrollbar { display: none }
  ul {
    overflow: hidden;
    overflow: auto;
    width: 100%;
    display: flex;
    justify-content: space-between;
    img {
      margin-right: 5px;
      width: 129px;
      height: 129px;
    }
  }
}
</style>
