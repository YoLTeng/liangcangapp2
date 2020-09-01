<template>
  <div class="welcome">
    <div class="main">
      <img src="../assets/img/welcomeImgs/logo.png" alt class="logo" />
      <img src="../assets/img/welcomeImgs/text.png" alt class="text" />
      <img src="../assets/img/welcomeImgs/shenghuozn.png" alt class="shenghuozn" />
      <img src="../assets/img/welcomeImgs/copyright.png" alt class="copyright" />
    </div>
    <span>{{timer}}</span>
  </div>
</template>

<script>
export default {
    data(){
        return{
            timer:3,
            stetimer:null,
        }
    },
    mounted() {
        this.stetimer=setInterval(() => {
            this.timer--
        }, 1000);
        setTimeout(() => {
        this.$router.push("./home"),
        this.stetimer=null
        }, 3000);
    },
}
</script>

<style lang="scss" scope>
.welcome {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 160px;
  position: relative;
  .main {
    width: 159px;
    .logo {
      width: 143px;
      height: 150px;
    }
    .text {
      width: 159px;
      height: 86px;
      margin-top: 91px;
    }
    .shenghuozn {
      width: 150px;
      height: 18px;
      margin-top: 27px;
    }
    .copyright {
      width: 148px;
      height: 8px;
      margin-top: 70px;
    }
  }
  span{
      position: absolute;
      top: 610px;
      left: 20px;
      font-size: 16px;
  }
}
</style>