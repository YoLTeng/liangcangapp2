<template>
  <div class="Site">
    <!-- 顶部 -->
    <van-nav-bar
      title="地址管理"
      right-text="新增地址"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <!-- 地址信息 -->
    <div class="sidemsg" v-for="index in 3" :key="index" :class="{'active':index==acti}">
      <img src="../../assets/img/sidimgs/side.png" alt />
      <p>
        <span class="na">Giao</span>
        <i>18379405532</i>
      </p>
      <span class="dizhi">北京通州</span>
      <div class="line"></div>
      <!-- 设为默认地址 -->
      <div class="edit" v-if="index!==acti">
        <input name="dz" type="radio" :value="xz" @click="ac(index)" />
        <span>设为默认地址</span>
        <div class="change">
          <span @click="edit(index)">
            <van-icon name="edit" size="15" />编辑
          </span>
          <span @click="dele(index)">
            <van-icon name="delete" size="15" />删除
          </span>
        </div>
      </div>

      <!-- 默认地址 -->
      <div class="edit" v-else>
        <input name="dz" type="radio" :value="xz" @click="ac(index)" />
        <span>默认地址</span>
        <div class="change">
          <span>
            <van-icon name="edit" size="15" />编辑
          </span>
          <span>
            <van-icon name="delete" size="15" />删除
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      xz: true,
      acti: 0,
      
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      this.$router.push("/addside");
    },
    //点击单选框时的时间
    ac(index) {
      this.acti = index;
      // this.xz = !this.xz
    },
    edit(index) {
      this.$router.push("/editass/" + index);
    },
    dele(){
      console.log(1);
    }
  },
};
</script>

<style lang="scss" scope>
//引入公共的css样式
@import "../../assets/style/var.scss";
.Site {
  background: #fafafa;
}
.van-nav-bar {
  .van-icon-arrow-left {
    color: #000;
  }
  .van-nav-bar__text {
    color: $fontcolor;
  }
}
.sidemsg {
  width: 100%;
  height: 140px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: #fff;
  margin-top: 6px;
  img {
    width: 385px;
    height: 5px;
  }
  p {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    font-size: 17px;
    padding: 0 16px;
  }
  .dizhi {
    font-size: 11px;
    margin-left: 16px;
    margin-top: 21px;
  }
  .line {
    width: 350px;
    border: 1px dashed #888888;
    margin-left: 16px;
    margin-top: 25px;
  }
  .edit {
    font-size: 13px;
    color: $fontcolor;
    margin-top: 15px;
    height: 34px;
    line-height: 34px;
    position: relative;
    input {
      width: 12px;
      height: 12px;
      margin-left: 16px;
      vertical-align: middle;
    }
    span {
      vertical-align: middle;
      margin-left: 6px;
    }
    .change {
      width: 130px;
      position: absolute;
      top: 0;
      right: 20px;
      color: #000;
      font-size: 13px;
      display: flex;
      justify-content: space-between;
      .van-icon {
        vertical-align: middle;
        margin-right: 8px;
      }
    }
  }
}
.active {
  color: $fontcolor;
}
</style>