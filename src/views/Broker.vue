<template>
  <div id="borker">
      <div class="headline">
        <span class="headline_span">孔雀计划券商主页</span>
      </div>
      <div class="underline"></div>
      <div class="topbac">
        <img class="topbac_img" src="../assets/images/peacockTopBac.png" alt="背景图">
      </div>
      <div class="material">
        <div class="material_page">
          <div class="mapa_left">
            <img class="mapa_left_img" :src="touxaing" v-if="touxaing!=''">
            <div class="paleim">
              <div class="paleim_top">
                <span class="paleim_top_spanOne">{{mingzi}}</span>
                <span class="paleim_top_spanTwo">{{hongsefangkang}}</span>
              </div>
              <span class="paleim_bot">{{diqu}}</span>
            </div>
          </div>
          <div class="mapa_right">
            <img class="mapa_right_img" src="../assets/images/peacockCity.png" alt="印章">
          </div>
        </div>
      </div>
      <div class="btn">
        <div class="btn_left" @click="extension">
          <span class="btn_left_bac"></span>
          <span class="btn_left_span">A级商券推广码</span>
        </div>
        <div class="btn_right" @click="merchant">
          <span class="btn_right_bac"></span>
          <span class="btn_right_span">商户推广码</span>
        </div>
      </div>
      <div class="list">
        <div class="list_bag">
          <div class="list_page">
            <div class="list_page_model" @click="brokerOne">
              <div class="lpm_bac" v-if="brokerNumber==1"></div>
              <span :class="brokerNumber?'lpm_span':'lpm_spanOne'">A级商券一览</span>
            </div>
            <div class="list_page_line">
              <div class="lpl"></div>
            </div>
            <div class="list_page_model" @click="brokerTwo">
              <div class="lpm_bac" v-if="!brokerNumber"></div>
              <span :class="!brokerNumber?'lpm_span':'lpm_spanOne'">商家一览</span>
            </div>
          </div>
          <div class="entry">
            <div class="entry_top">
              <span class="et_one">已邀请：</span>
              <span class="et_two">{{yaoqingrenshu}}</span>
            </div>
            <div class="entry_bot">
              <div  class="entry_bot_bag">
                <div class="entry_bot_model" v-for="item in listArr">
                  <div class="ebm_left">
                    <div class="el_left">
                      <img :src="item.avatar" alt="">
                    </div>
                    <div class="el_center">
                      <div class="elc_top">
                        <span class="elc_top_spanOne">{{item.name}}</span>
                        <span class="elc_top_spanTwo">{{item.id}}</span>
                      </div>
                      <div class="elc_bot">{{item.addressProvince}}{{item.addressCity}}{{item.addressArea}}</div>
                    </div>
                  </div>
                  <div class="ebm_right">
                    <span class="ebm_right_spanOne">{{item.createTime}}</span>
                    <span class="ebm_right_spanTwo" v-if="item.status==0">成功注册</span>
                    <span class="ebm_right_spanTwo" v-else-if="item.status==2">未支付</span>
                    <span class="ebm_right_spanTwo" v-else>银联审核中</span>
                  </div>
                </div>
              </div>     
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      brokerNumber:true,
      listArr:[],
      ajiquanshangArr:[],
      shangjiayilanArr:[],
      touxaing:'',
      mingzi:'',
      hongsefangkang:'',
      diqu:'',
      yaoqingrenshu:0,
      chuanzhi:0
    };
  },
  methods:{
    // A级商券一览
    brokerOne(){
      let self = this;
      self.brokerNumber = true;
      self.listArr = self.ajiquanshangArr;
    },
    // 商家一览
    brokerTwo(){
      let self = this;
      self.brokerNumber = false;
      self.listArr = self.shangjiayilanArr;
    },
    // A级商券推广码
    extension(){
      let self = this;
      self.$router.push({path:'Invitation',query:{code:1,paraNumber:self.chuanzhi}});
    },
    // 商户推广码
    merchant(){
      let self = this;
      self.$router.push({path:'Invitation',query:{code:2,paraNumber:self.chuanzhi}});
    }
  },
  mounted(){
    let self = this;
    let parameter = self.$route.query;
    // console.log(parameter);
    let acceptPhoneNumber = parameter.paan;
    let para = {
          mobile:acceptPhoneNumber
        }
    self.$axios.post('/cityPartnerMerchant/selectByMobile',para)
      .then(resp => {
        // console.log(resp);
        if(resp.data.code == 0){
          let arrOne = [];
          let arrTwo = [];
          let dataObj = resp.data.info;
          // A级券商一览
          if(dataObj.yCityPartnerList && dataObj.yCityPartnerList != null && dataObj.yCityPartnerList != ''){
            arrOne = dataObj.yCityPartnerList;
          }
          self.ajiquanshangArr = arrOne;
          self.listArr = arrOne;
          // 商家一览
          if(dataObj.yCityPartnerMerchantList && dataObj.yCityPartnerMerchantList != null && dataObj.yCityPartnerMerchantList != ''){
            arrTwo = dataObj.yCityPartnerMerchantList;
          }
          self.shangjiayilanArr = arrTwo;
          // 头像
          let strOne = '';
          if(dataObj.yCityPartner.avatar && dataObj.yCityPartner.avatar != null && dataObj.yCityPartner.avatar != ''){
            strOne = dataObj.yCityPartner.avatar;
          }
          self.touxaing = strOne;
          // 名字
          let strTwo = '暂无';
          if(dataObj.yCityPartner.name && dataObj.yCityPartner.name != null && dataObj.yCityPartner.name != ''){
            strTwo = dataObj.yCityPartner.name;
          }
          self.mingzi = strTwo;
          // 红色方框
          let strThree = '';
          if(dataObj.yCityPartner.id && dataObj.yCityPartner.id != null && dataObj.yCityPartner.id != ''){
            strThree = dataObj.yCityPartner.id;
          }
          self.hongsefangkang = strThree;
          // 地区
          let strFour = '';
          if(dataObj.address && dataObj.address != null && dataObj.address != ''){
            strFour = dataObj.address;
          }
          self.diqu = strFour;
          // 邀请人数
          let strFive = '';
          if(dataObj.partnerCount && dataObj.partnerCount != null && dataObj.partnerCount != ''){
            strFive = dataObj.partnerCount;
          }
          self.yaoqingrenshu = strFive;
          // 传入下级页面的值
          let strNumber = 0;
          if(dataObj.yCityPartner.no && dataObj.yCityPartner.no != null && dataObj.yCityPartner.no != ''){
            strNumber = dataObj.yCityPartner.no;
          }
          self.chuanzhi = strNumber;
        }else{
          alert('请求出错，请稍后再试');
        }
      }).catch(err => {
        // console.log(err);
        alert('请求出错，请稍后再试');
    })
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
@mixin box_six{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
@mixin box_seven{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
@mixin box_eight{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
@mixin box_nine{
  display: flex;
  flex-direction: row;
}
#borker{
  @include box_one();
  width: 100%;
  height: 100%;
  position: relative;
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
  .topbac{//顶部背景图
    @include box_two();
    width: 100%;
    height: px2rem(242);
    .topbac_img{
      width: 100%;
      height: px2rem(242);
    }
  }
  .material{//用户信息
    @include box_two();
    position: absolute;
    top: px2rem(256);
    left: 0;
    width: 100%;
    height: px2rem(176);
    .material_page{
      @include box_four();
      width: 91.47%;
      height: px2rem(176);
      background:rgba(255,255,255,1);
      box-shadow:0px 2px 18px 0px rgba(206,206,210,0.46);
      border-radius:px2rem(8);
      .mapa_left{
        @include box_three();
        width: auto;
        height: 100%;
        margin-left: px2rem(32);
        .mapa_left_img{
          width: px2rem(112);
          height: px2rem(112);
        }
        .paleim{
          @include box_seven();
          width: auto;
          height: 100%;
          margin-left: px2rem(20);
          .paleim_top{
            @include box_three();
            .paleim_top_spanOne{
              font-size:px2rem(28);
              font-weight:500;
              color:rgba(53,59,80,1);
              line-height:px2rem(40);
            }
            .paleim_top_spanTwo{
              margin-left: px2rem(16);
              width:auto;
              height:auto;
              padding: px2rem(8) px2rem(4);
              border-radius:px2rem(3);
              border:px2rem(2) solid rgba(239,21,21,1);
              font-size:px2rem(24);
              font-weight:500;
              color:rgba(239,21,21,1);
              line-height:px2rem(34);
            }
          }
          .paleim_bot{
            margin-top: px2rem(16);
            font-size:px2rem(24);
            font-weight:400;
            color:rgba(144,155,176,1);
            line-height:px2rem(34);
          }
        }
      }
      .mapa_right{
        @include box_two();
        margin-right: px2rem(30);
        width: auto;
        height: 100%;
        .mapa_right_img{
          width: px2rem(142);
          height: px2rem(114);
        }
      }
    }
  }
  .btn{//两个功能按钮
    @include box_eight();
    width: 100%;
    height: px2rem(164);
    margin-top: px2rem(108);
    .btn_left{
      @include box_two();
      width:px2rem(220);
      height:px2rem(64);
      background:linear-gradient(270deg,rgba(255,58,138,1) 0%,rgba(255,2,2,1) 100%);
      border-radius:px2rem(4);
      position: relative;
      .btn_left_bac{
        width:px2rem(202);
        height:px2rem(64);
        position: absolute;
        top: px2rem(8);
        z-index: -1;
        background:linear-gradient(270deg,rgba(255,58,138,1) 0%,rgba(255,2,2,1) 100%);
        border-radius:px2rem(4);
        opacity:0.28;
        filter:blur(px2rem(4));
      }
      .btn_left_span{
        font-size:px2rem(28);
        font-weight:500;
        color:rgba(255,255,255,1);
        line-height:px2rem(40);
      }
    }
    .btn_right{
      margin-left: px2rem(98);
      @include box_two();
      width:px2rem(220);
      height:px2rem(64);
      background:linear-gradient(270deg,rgba(101,151,255,1) 0%,rgba(65,126,254,1) 100%);
      border-radius:px2rem(4);
      position: relative;
    }
    .btn_right_bac{
        width:px2rem(202);
        height:px2rem(64);
        position: absolute;
        top: px2rem(8);
        z-index: -1;
        background:linear-gradient(270deg,rgba(101,151,255,1) 0%,rgba(65,126,254,1) 100%);
        border-radius:px2rem(4);
        opacity:0.28;
        filter:blur(px2rem(4));
      }
      .btn_right_span{
        font-size:px2rem(28);
        font-weight:500;
        color:rgba(255,255,255,1);
        line-height:px2rem(40);
      }
  }
  .list{//一览
    @include box_two();
    width: 100%;
    height: px2rem(916);
    .list_bag{
      @include box_one();
      width: 91.47%;
      height: 100%;
      background:rgba(255,255,255,1);
      box-shadow:0 px2rem(2) px2rem(18) 0 rgba(206,206,210,0.46);
      border-radius:px2rem(8);
      .list_page{
        @include box_nine();
        width: 100%;
        height: px2rem(88);
        .list_page_model{
          @include box_two();
          width: 49%;
          height: 100%;
          position: relative;
          .lpm_bac{
            position: absolute;
            bottom: 0;
            width:px2rem(182);
            height:px2rem(4);
            background:rgba(53,59,80,1);
            border-radius:px2rem(2);
          }
          .lpm_span{
            font-size:px2rem(32);
            font-weight:bold;
            color:rgba(53,59,80,1);
            line-height:px2rem(44);
          }
          .lpm_spanOne{
            font-size:px2rem(32);
            color:rgba(53,59,80,1);
            line-height:px2rem(44);
          }
        }
        .list_page_line{
          @include box_two();
          width: 2%;
          height: 100%;
          .lpl{
            width:px2rem(2);
            height:px2rem(48);
            background:rgba(203,205,216,0.54);
          }
        }
      }
      .entry{//列表循环
        @include box_one();
        width: 100%;
        height: px2rem(828);
        .entry_top{
          @include box_three();
          width: 100%;
          height: px2rem(84);
          background:rgba(245,246,247,0.41);;
          .et_one{
            margin-left: px2rem(42);
            font-size:px2rem(28);
            font-weight:500;
            color:#353B50;
            line-height:px2rem(40);
          }
          .et_two{
            margin-left: px2rem(6);
            font-size:px2rem(28);
            font-weight:500;
            color:#EF2222;
            line-height:px2rem(40);
          }
        }
        .entry_bot{
          @include box_one();
          width: 100%;
          height: px2rem(744);
          overflow: hidden;
          .entry_bot_bag{
            width: 100%;
            height: auto;
            overflow-x: hidden;
            overflow-y: scroll;
            .entry_bot_model{
              @include box_four();
              width: 100%;
              height: px2rem(138);
              border-bottom: px2rem(1) solid #F0F0F0;
              .ebm_left{
                @include box_three();
                width: auto;
                height: px2rem(86);
                margin-left: px2rem(32);
                .el_left{
                  width:px2rem(68);
                  height:px2rem(68);
                  border:px2rem(2) solid rgba(186,204,216,1);
                  border-radius: 50%;
                  overflow: hidden;
                }
                .el_center{
                  @include box_one();
                  width: auto;
                  margin-left: px2rem(20);
                  .elc_top{
                    @include box_three();
                    .elc_top_spanOne{
                      font-size:px2rem(28);
                      font-weight:500;
                      color:rgba(53,59,80,1);
                      line-height:px2rem(40);
                    }
                    .elc_top_spanTwo{
                      margin-left: px2rem(16);
                      font-size:px2rem(28);
                      font-weight:500;
                      color:rgba(48,83,255,1);
                      line-height:px2rem(40);
                    }
                  }
                  .elc_bot{
                    margin-top: px2rem(12);
                    font-size:px2rem(24);
                    font-weight:400;
                    color:rgba(115,123,140,1);
                    line-height:px2rem(34);
                  }
                }
              }
              .ebm_right{
                @include box_six();
                width: auto;
                height: 100%;
                margin-right: px2rem(36);
                .ebm_right_spanOne{
                  font-size:px2rem(24);
                  font-weight:400;
                  color:rgba(115,123,140,1);
                  line-height:px2rem(34);
                }
                .ebm_right_spanTwo{
                  margin-left: px2rem(32);
                  font-size:px2rem(24);
                  font-weight:400;
                  color:rgba(115,123,140,1);
                  line-height:px2rem(34);
                }
              }
            }
          }
        }
      }
    }
  }
}
      
</style>
