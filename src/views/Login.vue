<template>
  <div id="login">
      <div class="headline">
        <span class="headline_span">手机验证</span>
      </div>
      <div class="underline"></div>
      <div class="introduce">
        <img class="introduce_img" src="../assets/images/print.png" alt="美在中国">
        <span class="introduce_text">欢迎登陆美在中国商券主页</span>
      </div>
      <div class="words">手机号</div>
      <div class="phone">
        <span class="phone_spanOne">+86</span>
        <img class="phone_img" src="../assets/images/triangle.png" alt="三角形">
        <span class="phone_spanTwo"></span>
        <input class="phone_ipt" type="number" maxlength="11" @input="phoneIpt" placeholder="请输入手机号">
      </div>
      <div class="underline_one"><div class="underline_one_line"></div></div>
      <div class="words_one">请输入验证码</div>
      <div class="code">
        <div class="code_page">
          <input class="code_page_ipt" type="number" @input="codeIpt" placeholder="请输入验证码">
          <div class="code_page_right">
            <span class="cpr_spanOne"></span>
            <!-- <span class="cpr_spanTwo">重新发送(30s)</span> -->
            <span class="cpr_spanThree">发送验证码</span>
          </div>
        </div>
      </div>
      <div class="underline_one"><div class="underline_one_line"></div></div>
      <div class="btn">
        <!-- <div class="btn_page">登 录</div> -->
        <div class="btn_pageOne" @click="ssigninClick">登 录</div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phoneNumber:'',
      codeNumber:'',
    };
  },
  methods:{
    // 输入手机号
    phoneIpt(e){
      let self = this;
      //e.target 指向了dom元素
      // console.log(e.target.value);
      self.phoneNumber = e.target.value;
      // console.log(self.phoneNumber);
    },
    // 输入验证码
    codeIpt(e){
      let self = this;
      //e.target 指向了dom元素
      // console.log(e.target.value);
      self.codeNumber = e.target.value;
      // console.log(self.codeNumber);
    },
    // 登录
    ssigninClick(e){
      let self = this;
      self.$router.push({path:'Broker',query:{paan:'111'}});
      // self.$router.push({path:'Brokeraevel',query:{paan:'111'}});
    }
  }
};
</script>

<style lang="scss" scoped>
@mixin box_one{
  display: flex;
  flex-direction: column;
}
@mixin box_two{
  display: flex;
  justify-content: center;
  align-items: center;
}
@mixin box_three{
  display: flex;
  flex-direction: row;
  align-items: center;
}
@mixin box_four{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#login{
  @include box_one();
  width: 100%;
  height: 100%;
  background-color: $page-color;
  .headline{//标题
    @include box_two();
    width:100%;
    height:px2rem(88);
    background:#FFFFFF;
    .headline_span{
      font-size:px2rem(36);
      font-weight:500;
      color:rgba(74,74,74,1);
      line-height:px2rem(25);
    }
  }
  .underline{//下划线
    width: 100%;
    height: px2rem(1);
    background: #EDEDED;
  }
  .introduce{//顶部标题
    @include box_three();
    width: 100%;
    height: px2rxm(90);
    margin: px2rem(32) 0 0 5.33%;
    .introduce_img{
      width: px2rem(88);
      height: px2rem(90);
    }
    .introduce_text{
      margin-left: px2rem(18);
      font-size:px2rem(40);
      font-weight:500;
      color:rgba(53,53,53,1);
      line-height:px2rem(56);
    }
  }
  .words{//文字
    margin: px2rem(22) 0 0 7.47%;
    width: auto;
    height: px2rem(34);
    font-size:px2rem(24);
    font-weight:400;
    color:rgba(74,74,74,0.72);
    line-height:px2rem(34);
  }
  .phone{//手机号
    @include box_three();
    width: auto;
    height: px2rem(40);
    margin: px2rem(20) 0 0 7.47%;
    .phone_spanOne{
      font-size:px2rem(28);
      font-weight:400;
      color:rgba(53,53,53,1);
      line-height:px2rem(32);
    }
    .phone_img{
      margin-left: px2rem(16);
      width: px2rem(20);
      height: px2rem(12);
    }
    .phone_spanTwo{
      width:px2rem(2);
      height:px2rem(24);
      background:#CBCDD8;
      margin-left: px2rem(16);
    }
    .phone_ipt{
      margin-left: px2rem(16);
      width: px2rem(260);
      height: px2rem(40);
      border: none;
      background: none;
      outline: none;
      font-size:px2rem(28);
      font-weight:400;
      color:rgba(74,74,74,1);
      line-height:px2rem(40);
    }
  }
  .underline_one{//下划线
    @include box_two();
    width: 100%;
    height: px2rem(2);
    margin-top: px2rem(22);
    .underline_one_line{
      width: 85.87%;
      height: px2rem(2);
      background: #CBCDD8;
    }
  }
  .words_one{//请输入手机号
    margin: px2rem(24) 0 0 7.47%;
    width: auto;
    height: px2rem(34);
    font-size:px2rem(24);
    font-weight:400;
    color:rgba(74,74,74,0.72);
    line-height:px2rem(34);
  }
  .code{//验证码
    @include box_two();
    width: 100%;
    height: px2rem(40);
    margin-top: px2rem(20);
    .code_page{
      @include box_four();
      width: 85.87%;
      height: 100%;
      .code_page_ipt{
        width: px2rem(320);
        height: 100%;
        border: none;
        background: none;
        outline: none;
        font-size:px2rem(28);
        font-weight:400;
        color:rgba(74,74,74,1);
        line-height:px2rem(40);
      }
      .code_page_right{
        @include box_three();
        width: auto;
        height: 100%;
        .cpr_spanOne{
          width:px2rem(2);
          height:px2rem(24);
          background: #CBCDD8;
        }
        .cpr_spanTwo{
          margin-left: px2rem(16);
          font-size:px2rem(28);
          font-weight:400;
          color:rgba(35,33,77,1);
          line-height:px2rem(40);
          opacity: 0.54;
        }
        .cpr_spanThree{
          margin-left: px2rem(16);
          font-size:px2rem(28);
          font-weight:400;
          color:rgba(35,33,77,1);
          line-height:px2rem(40);
        }
      }
    }
  }
  .btn{//按钮
    @include box_two();
    width: 100%;
    height: px2rem(92); 
    margin-top: px2rem(56);
    .btn_page{
      @include box_two();
      width: 91.47%;
      height: 100%;
      background:linear-gradient(135deg,rgba(255,73,23,1) 0%,rgba(245,26,26,1) 100%);
      border-radius:px2rem(4);
      opacity: 0.6;
      font-size:px2rem(36);
      font-weight:bold;
      color:rgba(255,255,255,1);
      line-height:px2rem(50);
    }
    .btn_pageOne{
      @include box_two();
      width: 91.47%;
      height: 100%;
      background:linear-gradient(135deg,rgba(255,73,23,1) 0%,rgba(245,26,26,1) 100%);
      border-radius:px2rem(4);
      font-size:px2rem(36);
      font-weight:bold;
      color:rgba(255,255,255,1);
      line-height:px2rem(50);
    }
  }
}
</style>
