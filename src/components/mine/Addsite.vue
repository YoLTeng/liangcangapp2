<template>
  <div class="Editside">
    <!-- 顶部 -->
    <van-nav-bar title="新增收货地址" left-arrow @click-left="onClickLeft" />
    <!-- 表单主体 -->
    <van-form>
      <van-field v-model="username" placeholder="收件人真实姓名" :rules="[{ required: true }]" />
      <van-field v-model="tel" placeholder="手机号" :rules="[{ required: true }]" />
      <van-field
        readonly
        clickable
        name="area"
        :value="value"
        placeholder="收货地址"
        @click="showArea = true"
      />
      <van-field v-model="describe" placeholder="详细地址" :rules="[{ required: true }]" />

      <van-popup v-model="showArea" position="bottom">
        <van-area
          :title="value"
          :area-list="areaList"
          @confirm="onConfirm"
          @cancel="showArea = false"
        />
      </van-popup>
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit" :square="true" color="#000">保存</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import city from "../../assets/js/city";
export default {
  data() {
    return {
      value: "",
      showArea: false,
      areaList: city, // 数据格式见 Area 组件文档
      username: "",
      tel: "",
      describe: "",
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onConfirm(values) {
      this.value = values.map((item) => item.name).join("  ");
      this.showArea = false;
    },
  },
};
</script>

<style lang="scss">
.Editside {
  .van-nav-bar {
    .van-icon-arrow-left {
      color: #000;
    }
  }
  form {
    width: 100%;
    height: 384px;
    padding: 34px 23px;
    background: #fafafa;
    display: flex;
    flex-direction: column;
    .van-cell__value {
      margin-top: 18px;
      height: 64px;
    }
    .van-button {
      width: 288px;
      height: 54px;
    }
  }
}
</style>