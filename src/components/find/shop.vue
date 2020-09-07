<template>
  <div class="shop">
    <main>
      <!-- 左侧tab标题 -->
      <van-sidebar v-model="activeKey">
        <van-sidebar-item
          v-for="(item, index) in sidebarList"
          :key="index"
          :title="item.title"
          @click="tabChange(item.id)"
        />
      </van-sidebar>

      <!-- 内容 -->
      <ul>
        <div class="img-title">
          <img src="../../assets/findimg/img1.png" alt="" />
          <p class="title">
            - 家居 -
          </p>
        </div>
        <li
          v-for="(item, index) in findList"
          :key="index"
          @click="toDetail(item.id)"
        >
          <img :src="item.imgUrl" alt="" />
          <span>{{ item.ptitle }}</span>
        </li>
      </ul>
    </main>
  </div>
</template>
<script>
//引入state辅助函数
import { mapState } from "vuex";
export default {
  data() {
    return {
      sidebarList: [
        //左侧tab数据
        {
          title: "家居",
          id: "1",
        },
        {
          title: "文具",
          id: "2",
        },
        {
          title: "数码",
          id: "3",
        },
        {
          title: "玩乐",
          id: "4",
        },
        {
          title: "餐厨",
          id: "5",
        },
        {
          title: "美食",
          id: "6",
        },
        {
          title: "服装",
          id: "7",
        },
        {
          title: "鞋包",
          id: "8",
        },
      ],
      //右侧商品分类
      classifyList: [],
      activeKey: 0, //左侧tab默认下标
    };
  },
  computed: {
    ...mapState(["findList"]),
  },
  mounted() {
    //这里刚进页面要默认请求一次数据
    // this.$store.dispatch("getFindList2", {
    //   // type: this.type,
    // });
    // console.log(this.findList);
  },
  methods: {
    //点击左侧切换数据
    tabChange(id) {
      this.type = id;
      //    this.$store.dispatch("getClassifyList2", {
      //   type: this.type,
      // });
      console.log(this.classifyList);
    },
    //点击跳转到商品列表页，带id
    toDetail(id) {
      this.$router.push("/shoplist/" + id);
    },
  },
};
</script>
<style lang="scss" scoped>
.shop {
  //商店内容
  main {
    display: flex;
    //左侧tab样式
    .van-sidebar {
      width: 98px;
      //   height: 617px;
      background: #f0f0f0;
      .van-sidebar-item {
        background: #f0f0f0;
        display: flex;
        justify-content: center;
        font-size: 14px;
        color: #999999;
      }
      .van-sidebar-item--select {
        color: #000;
      }
      .van-sidebar-item--select::before {
        display: none;
      }
    }
    // 右侧内容
    ul {
      .img-title {
        height: 170px;
        margin-bottom: 10px;

        img {
          width: 241px;
          height: 114px;
          margin: 17px;
        }
        .title {
          display: flex;
          font-size: 14px;
          font-weight: normal;
          color: #333333;
          justify-content: center;
        }
      }
      flex: 1;
      display: flex;
      flex-wrap: wrap;
      align-content: flex-start;
      li {
        width: 33.3%;
        height: 130px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img {
          width: 40px;
          height: 40px;
        }

        span {
          font-size: 14px;
          width: 100%;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          text-align: center;
        }
      }
    }
    //
  }
}
</style>
