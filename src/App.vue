<template>
  <div id="app">

    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view />
  </div>
</template>


<style lang="scss">
  html,body,#app{
    width: 100%;
    height: 100%;
    background: #FFFFFF;
  }
</style>
<script>
export default {
  data() {
    return {
      
    };
  },
  methods:{

  },
  mounted(){
      let self = this;
      // 公用函数
      function chulihanshu(val){
        if(val && val != undefined && val != null && val != ''){
          return true
        }else{
          return false
        }    
      }
      // 获取处理 cookie
      // document.cookie=`token=${1231231}`;
      // document.cookie=`tel=${1561}`;
      var getCookie = document.cookie;
      if(getCookie.indexOf(';') != -1){//手机号，token都存在
        let getArr = getCookie.split(';');
        let getTel = getArr[0];
        let getToken = getArr[1];
        let strTel = getArr[0].split('=')[1];
        let strToken = getArr[1].split('=')[1];
        if(chulihanshu(strTel) && chulihanshu(strToken)){
          let para = {
            token:strToken,
          }
          self.$axios.post('/cityPartnerMerchant/getInfoByToken',para)
            .then(resp => {
              // console.log(resp);
              if(resp.data.code == 0){
                if(resp.data.info.role == 1 || resp.data.info.role == '1'){//城市合伙人
                  self.$router.push({path:'Broker',query:{paan:strTel}});
                }else if(resp.data.info.role == 2 || resp.data.info.role == '2'){//A级券商
                  self.$router.push({path:'Brokeraevel',query:{paan:strTel}});
                }
              }
            }).catch(err => {
              // console.log(err);
              alert('请求出错，请稍后再试');
          })
        }
      }
  }
}
</script>
