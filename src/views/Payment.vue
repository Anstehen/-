<template>
  <div id="invitation">
      <!-- <div class="headline">
        <span class="headline_span">孔雀计划五星服务站注册</span>
      </div>
      <div class="underline"></div> -->
      <div class="count">
          <img class="count_img" src="../assets/images/paymentBac.png" alt="背景图">
          <div class="count_words">本授权牌由<strong>美在中国&银联商务</strong>联合授权发行，授予合作美业沙龙为授牌银行白金卡VIP<strong>五星级指定服务站</strong>称号，<strong>银行VIP用户可通过识别二维码在美在中国主页上进行验证。</strong></div>
          <div class="monery">
              <span class="monery_spanOne">授权牌工本费：</span>
              <span class="monery_spanTwo">{{zhifujine}}元</span>
          </div>
      </div>
      <div class="btn">
          <div class="btn_page" @click="zhifuzhong" v-if="payStatus==2">
              <span class="btn_page_span">支付中...</span>
              <div class="btp_bac"></div>
          </div>
          <div class="btn_page" @click="makeSureClick" v-else-if="payStatus==3">
              <span class="btn_page_span">在线签约</span>
              <div class="btp_bac"></div>
          </div>
          <div class="btn_page" @click="querenzhifu" v-else>
              <span class="btn_page_span">确认支付</span>
              <div class="btp_bac"></div>
          </div>
      </div>
      <div class="message"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      zhifucanshu:'',//创建订单---支付参数
      zhifujine:0,//支付金额
      payStatus:0,//2:未支付，3：支付成功，
      shoujihao:'',//手机号
      jishu:0,
      clearHandel:'',
      qinayueid:'',//签约id
      shifouqinayue:100,//是否可以签约
      message:'',//提示信息
    };
  },
  methods:{
    // 确认支付点击
    querenzhifu(){
        let self = this;
        // let para = `/chinaumsPay/merchantRegisterPay?orderNo=${self.zhifucanshu}`
        // self.$axios.get(para);
        // window.location.href = 'http://www.baidu.com';
        let para = {
            orderNo:self.zhifucanshu
        }
        self.$axios.post('/chinaumsPay/merchantRegisterPay',para)
        .then(resp => {
                // console.log(resp);
                if(resp.data.code == 0){
                    let jumpUrl = '';
                    if(resp.data.info.url && resp.data.info.url != undefined && resp.data.info.url != null && resp.data.info.url != ''){
                        jumpUrl = resp.data.info.url;
                    }
                    window.location.href = jumpUrl;
                }
        }).catch(err => {
                // console.log(err);
                alert('请求出错，请稍后再试');
        })
    },
    // 支付中
    zhifuzhong(){
        let self = this;

    },
    // 确定
    makeSureClick(){
        let self = this;
        // let para = `/chinaumsPay/H5merchantRegister?mctId=${self.qinayueid}`
        // self.$axios.get(para);
        if(self.shifouqinayue == 1 || self.shifouqinayue == '1'){
            alert(self.message);
            return
        }
        let para = {
            mctId:self.qinayueid
        }
        self.$axios.post('/chinaumsPay/H5merchantRegister',para)
        .then(resp => {
                // console.log(resp);
                if(resp.data.code == 0){
                    let jumpUrl = '';
                    if(resp.data.info.url && resp.data.info.url != undefined && resp.data.info.url != null && resp.data.info.url != ''){
                        jumpUrl = resp.data.info.url;
                    }
                    window.location.href = jumpUrl;
                }
        }).catch(err => {
                // console.log(err);
                alert('请求出错，请稍后再试');
        })
    }
  },
  mounted(){
      let self = this;  
    //   支付完成：610310281100501950614MR
      //console.log(localStorage.getItem("temp"));//输出
    let parameter = self.$route.query;
    let paraOne = `/chinaumsPay/getMerchantRegisterOrder?orderNo=${parameter.orderNo}`;
    //   console.log(parameter.orderNo)
    if(!parameter.orderNo || parameter.orderNo == undefined || parameter.orderNo == null || parameter.orderNo == ''){
        let pageNumber = localStorage.getItem("temp");
        // 创建支付订单
        // pageNumber = 2;
        let para = {
            userNo:pageNumber,
        }
        self.$axios.post('/chinaumsPay/createMerchantRegisterOrder',para)
        .then(resp => {
                // console.log(resp);
                if(resp.data.code == 0){  
                    //创建订单---支付参数
                    if(resp.data.info.orderNo && resp.data.info.orderNo != undefined && resp.data.info.orderNo != null && resp.data.info.orderNo != null){
                        self.zhifucanshu = resp.data.info.orderNo;
                    }
                    // 支付金额
                    if(resp.data.info.price && resp.data.info.price != undefined && resp.data.info.price != null && resp.data.info.price != null){
                        self.zhifujine = resp.data.info.price;
                    }
                }
        }).catch(err => {
                // console.log(err);
                alert('请求出错，请稍后再试');
        })
    }else{
        polling();
    }
    function polling(){
        if(self.jishu <= 8 && self.payStatus != '3'){
            self.clearHandel = setTimeout(function(){
                self.$axios.get(paraOne)
                .then(resp => {
                        // console.log(resp);
                        if(resp.data.code == 0){
                            self.jishu = self.jishu + 1;
                            let canshu = resp.data.info;
                            // 是否可以签约
                            if(canshu.registerStopFlag && canshu.registerStopFlag != undefined && canshu.registerStopFlag != null && canshu.registerStopFlag != null){
                                self.shifouqinayue = canshu.registerStopFlag;
                            }
                            // 提示信息
                            if(canshu.registerStopMessage && canshu.registerStopMessage != undefined && canshu.registerStopMessage != null && canshu.registerStopMessage != null){
                                self.message = canshu.registerStopMessage;
                            }
                            // 支付参数
                            if(canshu.order.no && canshu.order.no != undefined && canshu.order.no != null && canshu.order.no != null){
                                self.zhifucanshu = canshu.order.no;
                            }
                            // 签约id
                            if(canshu.order.userId && canshu.order.userId != undefined && canshu.order.userId != null && canshu.order.userId != null){
                                self.qinayueid = canshu.order.userId;
                            }
                            // 支付金额
                            if(canshu.order.amountOfMoneyReal && canshu.order.amountOfMoneyReal != undefined && canshu.order.amountOfMoneyReal != null && canshu.order.amountOfMoneyReal != null){
                                self.zhifujine = canshu.order.amountOfMoneyReal;
                            }
                            // 支付状态
                            if(canshu.order.statusPay && canshu.order.statusPay != undefined && canshu.order.statusPay != null && canshu.order.statusPay != null){
                                self.payStatus = canshu.order.statusPay;
                                if(canshu.order.statusPay != 3 || canshu.order.statusPay != '3'){
                                    console.log(canshu.order.statusPay)
                                    polling();
                                }
                            }
                            // 手机号
                            if(canshu.order.userMobile && canshu.order.userMobile != undefined && canshu.order.userMobile != null && canshu.order.userMobile != null){
                                self.shoujihao = canshu.order.userMobile;
                            }
                        }else if(resp.data.code == 1001){
                            alert(resp.data.message);
                        }else if(resp.data.code == 2002){
                            alert(resp.data.message);
                        }else{
                            alert('请求出错，请稍后再试!');
                        }
                }).catch(err => {
                        // console.log(err);
                        alert('请求出错，请稍后再试');
                })
            },500)
        }else{
            clearInterval(self.clearHandel);
        }     
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
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    @mixin box_three{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    @mixin box_four{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    @mixin box_five{
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    #invitation{
        @include box_one();
        width: 100%;
        height: auto;
        overflow-x: hidden;
        overflow-y: scroll;
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
        .count{//内容
            @include box_four();
            width:100%;
            height:px2rem(776);
            background:rgba(255,255,255,1);
            box-shadow:0px 12px 12px 0px rgba(206,206,210,0.22);
            .count_img{
                width: px2rem(562);
                height: px2rem(432);
            }
            .count_words{
                width: 82.93%;
                height: auto;
                margin-top: px2rem(36);
                font-size:px2rem(28);
                font-weight:400;
                color:rgba(53,59,80,1);
                line-height:px2rem(40);
            }
            .monery{
                @include box_five();
                width: auto;
                height: px2rem(56);
                margin-top: px2rem(20);
                .monery_spanOne{
                    font-size:px2rem(28);
                    font-weight:500;
                    color:rgba(111,119,146,1);
                    line-height:px2rem(40);
                }
                .monery_spanTwo{
                    margin-left: px2rem(6);
                    font-size:px2rem(28);
                    font-weight:500;
                    color:rgba(243, 65, 21, 1);
                    line-height:px2rem(40);
                }
            }
        }
        .btn{//按钮
            @include box_three();
            margin-top: px2rem(68);
            width: 100%;
            height: auto;
            .btn_page{
                @include box_three();
                width:px2rem(364);
                height:px2rem(96);
                background:linear-gradient(270deg,rgba(255,58,138,1) 0%,rgba(255,2,2,1) 100%);
                border-radius:px2rem(4);
                position: relative;
                .btn_page_span{
                    font-size:px2rem(36);
                    font-weight:500;
                    color:rgba(255,255,255,1);
                    line-height:px2rem(50);
                }
                .btp_bac{
                    position: absolute;
                    bottom: -18px;
                    z-index: -1;
                    width:px2rem(338);
                    height:px2rem(64);
                    background:linear-gradient(270deg,rgba(255,58,138,1) 0%,rgba(255,2,2,1) 100%);
                    border-radius:px2rem(4);
                    opacity:0.28;
                    filter:blur(px2rem(6));
                }
            }
        }
        .message{
            width: 100%;
            height: px2rem(126);
        }
    }
</style>
