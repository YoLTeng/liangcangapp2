<!-- 这是杂志内容的组件 -->
<template>
  <div
    class="magazine-item"
    :style="{ background: 'url(' + img1 + ')' }"
    v-lazy:background-image="img1"
  >
    <p class="magazine-title">跟着大热美剧麦瑟尔夫人，去发现50年代去发现50年代去发现50年代</p>

    <p class="magazine-type">—时尚—</p>

    <p class="magazine-time">-JUL.13-</p>
  </div>
</template>

<script>
import img1 from "../../assets/img/magazineImgs/1546491175586831.png";
export default {
  data() {
    return {
      img1: img1,
    };
  },
};
</script>
<style lang="scss" scoped>
.magazine-item {
  width: 100%;
  height: 210px;
  margin-bottom: 40px;
  &:nth-last-child(1) {
    margin-bottom: 0;
  }
  &:nth-child(1) {
    .magazine-time {
      display: none;
    }
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #f3eff3;
  position: relative;
  .magazine-title {
    width: 322px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 16px;
    margin-bottom: 6px;
  }
  .magazine-type {
    font-size: 14px;
  }

  .magazine-time {
    font-size: 10px;
    position: absolute;
    top: -20px;
    color: #839dbb;
    transform: translateY(-50%);
    letter-spacing: 60%;
  }
}
</style>
