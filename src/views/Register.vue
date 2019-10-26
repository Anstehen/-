<template>
  <div id="invitation">
      <div class="headline">
        <span class="headline_span">孔雀计划券邀请码</span>
      </div>
      <div class="underline"></div>
      <div class="present">
          <img class="present_img" src="../assets/images/registerBac.png" alt="背景图">
          <div class="present_one">
              <span class="pron_spanOne">您的朋友</span>
              <img class="pron_img" src="" alt="头像">
              <span class="pron_spanTwo">Mister张先生</span>
          </div>
          <div class="present_two">
              <span class="pt_spanOne">邀请您成为孔雀计划 </span>
              <span class="pt_spanTwo" v-if="distingguish==1">五星服务站</span>
              <span class="pt_spanTwo" v-if="distingguish==2">A级券商</span>
          </div>
      </div>
      <div class="words">
          <span class="words_left">手机验证</span>
          <span class="words_right">您已注册成功</span>
      </div>
      <div class="phone">
          <div class="phone_page">
              <span class="pp_spanOne">+86</span>
              <img class="pp_spanTwo" src="../assets/images/registerIcon.png" alt="三角形">
              <input class="pp_ipt" type="number" maxlength="11" @input="phoneIpt" placeholder="请输入手机号">
          </div>
      </div>
      <div class="code">
          <div class="code_page">
              <input class="cp_ipt" type="number"  @input="codeIpt" placeholder="请输入验证码">
              <div class="cp_div" v-if="wetherShowBtn" @click="huoquyanzhengmaClick">获取验证码</div>
              <span class="cp_span" v-else>剩余 {{yzmNumber}} s</span>
          </div>
      </div>
      <div class="makesure">
          <div class="makesure_page" @click="diquxuanzeClick">确定</div>
      </div>
      <div class="name">
          <div class="name_one">名称</div>
          <div class="name_two">
              <img class="name_two_img" src="../assets/images/registerFawn.png" alt="头像">
              <div class="name_two_div">
                  <input class="ntd_ipt" type="text"  @input="nameIpt" placeholder="请输入名称">
              </div>
          </div>
      </div>
      <div class="city" v-if="diquShow">城市选择</div>
      <div class="choice" v-if="diquShow">
          <div :class="distingguish==1?'choice_modelOne':'choice_model'" @click="cityClick">
              <div class="chmo_left">{{cityTitle}}</div>
              <div class="chmo_right">
                  <img class="chmo_right_img" src="../assets/images/triangle.png" alt="三角形">
              </div>
          </div>
          <div :class="distingguish==1?'choice_modelOne':'choice_model'" @click="provinceClick">
              <div class="chmo_left">{{provinceTitle}}</div>
              <div class="chmo_right">
                  <img class="chmo_right_img" src="../assets/images/triangle.png" alt="三角形">
              </div>
          </div>
          <div class="choice_model" @click="areaClick" v-if="distingguish==2">
              <div class="chmo_left">{{areaTitle}}</div>
              <div class="chmo_right">
                  <img class="chmo_right_img" src="../assets/images/triangle.png" alt="三角形">
              </div>
          </div>
          <van-action-sheet v-model="cityShow" :actions="cityArr" @select="citySelect" />
          <van-action-sheet v-model="provinceShow" :actions="provinceArr" @select="provinceSelect" />
          <van-action-sheet v-model="areaShow" :actions="areaArr" @select="areaSelect" />
      </div>
      <div class="city" v-if="distingguish==2">商铺信息</div>
      <div class="shops" v-if="distingguish==2">
          <div class="shops_model">
              <input class="sm_ipt" type="text"  @input="shposIpt" placeholder="请输入店铺名称">
          </div>
          <div class="shops_model">
              <input class="sm_ipt" type="text"  @input="identifierIpt" placeholder="请输入营业执照编号">
          </div>
      </div>
      <div class="btn">
          <div class="btn_page" @click="registerClick">
              <span class="bp_span">注 册</span>
              <div class="bp_bac"></div>
          </div>
      </div>
      <div class="agree">
          <span class="agree_spanOne">注册代表您已同意</span>
          <span class="agree_spanTwo">《XXX协议》</span>
      </div>
      <div class="bank">
          <div class="bank_page">
              <div class="bapa" v-for="item in listArr">招商银行</div>
              <div class="bapa_message"></div>
          </div>
      </div>
      <div class="message"></div>
  </div>
</template>

<script>
import cityJson from '../assets/js/city';
export default {
  data() {
    return {
      distingguish:1,
      phoneNumber:'',
      codeNumber:'',
      nameNumber:'',
      shopsNumber:'',
      identifierNumber:'',
      wetherShowBtn:true,//获取验证码显隐
      yzmNumber:60,
      yanHandel:'',
      diquShow:false,//区域选择显隐
      listArr:[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],
      cityShow: false,
      cityTitle:'请选择',
      cityObj:{},
      cityArr:[],
      provinceShow: false,
      provinceTitle:'请选择',
      provinceObj:{},
      provinceArr:[],
      areaShow: false,
      areaTitle:'请选择',
      areaObj:{},
      areaArr:[],
    };
  },
  methods:{
    // 省选择
    citySelect(item) {
      let self = this;
      // 默认情况下，点击选项时不会自动关闭菜单
      // 可以通过 close-on-click-action 属性开启自动关闭
    //   console.log(item);
      this.cityShow = false;
      self.cityTitle = item.name;
      self.cityObj = item;
      // Toast(item.name);
      let obj = '';
      for(let i in self.cityArr){
          if(self.cityArr[i].name == self.cityTitle){
            //   console.log(self.cityArr[i]);
            obj =  cityJson[self.cityArr[i].code];
          }
      }
      function findKey (value, compare = (a, b) => a === b) {
        return Object.keys(obj).find(k => compare(obj[k], value))
      }
      var arr = [];
      for (let i in obj) {
        let o = {};
        o[i] = obj[i];
        o['name'] = obj[i];
        o['code'] = findKey(obj[i]);
        arr.push(o)
      }
      self.provinceArr = arr;
        
    },
    cityClick(){
        let self = this;
        self.cityShow = true;
    },
    // 市选择
    provinceSelect(item) {
      let self = this;
      // 默认情况下，点击选项时不会自动关闭菜单
      // 可以通过 close-on-click-action 属性开启自动关闭
    //   console.log(item);
      self.provinceShow = false;
      self.provinceTitle = item.name;
      self.provinceObj = item;
    //   Toast(item.name);
      let obj = '';
      for(let i in self.provinceArr){
          if(self.provinceArr[i].name == self.provinceTitle){
            //   console.log(self.provinceArr[i]);
            obj =  cityJson[self.provinceArr[i].code];
          }
      }
      function findKey (value, compare = (a, b) => a === b) {
        return Object.keys(obj).find(k => compare(obj[k], value))
      }
      var arr = [];
      for (let i in obj) {
        let o = {};
        o[i] = obj[i];
        o['name'] = obj[i];
        o['code'] = findKey(obj[i]);
        arr.push(o)
      }
    //   console.log(arr);
      self.areaArr = arr;
    },
    provinceClick(){
        let self = this;
        if(self.provinceArr.length == 0){
            alert('请选择省')
        }else{
            self.provinceShow = true;
        }      
    },
    // 区选择
    areaSelect(item) {
      let self = this;
      // 默认情况下，点击选项时不会自动关闭菜单
      // 可以通过 close-on-click-action 属性开启自动关闭
      self.areaShow = false;
      self.areaTitle = item.name;
      self.areaObj = item;
    //   console.log(item);
    //   console.log(self.areaTitle);
    //   Toast(item.name);
    },
    areaClick(){
        let self = this;
        if(self.areaArr.length == 0){
            alert('请选择省市')
        }else{
            self.areaShow = true;
        }
    },
    // 去定按钮显示地区选择
    diquxuanzeClick:function(){
        let self = this;
        self.diquShow = true;
    },
    // 输入手机号
    phoneIpt(e){
      let self = this;
      //e.target 指向了dom元素
      // console.log(e.target.value);
      self.phoneNumber = e.target.value;
    },
    // 请输入验证码
    codeIpt(e){
      let self = this;
      //e.target 指向了dom元素
      // console.log(e.target.value);
      self.codeNumber = e.target.value;
    },
    // 输入验证码点击
    huoquyanzhengmaClick(){
        let self = this;
        self.wetherShowBtn = false;
        self.countNumberClick(self);
    },
    // 计数
    countNumberClick(val){
      let self = val;
      if(self.yzmNumber == 0){
        self.yzmNumber = 60;
        self.wetherShowBtn = true;
        clearInterval(self.yanHandel);
      }else{
        self.yanHandel = setTimeout(function(){
          self.yzmNumber = self.yzmNumber - 1;
          self.countNumberClick(self);
        }, 1000);
      }
    },
    // 请输入名称
    nameIpt(e){
      let self = this;
      //e.target 指向了dom元素
      // console.log(e.target.value);
      self.nameNumber = e.target.value;
    },
    // 请输入店铺名称
    shposIpt(e){
      let self = this;
      //e.target 指向了dom元素
      // console.log(e.target.value);
      self.shopsNumber = e.target.value;
    },
    // 请输入营业执照编号
    identifierIpt(e){
      let self = this;
      //e.target 指向了dom元素
      // console.log(e.target.value);
      self.identifierNumber = e.target.value;
    },
    // 注册按钮点击
    registerClick:function(){
        let self = this; 
        self.$router.push({path:'Payment',query:{paan:'111'}});
    }
},
  mounted(){
    let self = this;
    // 省份数组处理
    let obj =  cityJson['100000'];
    function findKey (value, compare = (a, b) => a === b) {
        return Object.keys(obj).find(k => compare(obj[k], value))
    }
    var arr = [];
    for (let i in obj) {
        let o = {};
        o[i] = obj[i];
        o['name'] = obj[i];
        o['code'] = findKey(obj[i]);
        arr.push(o)
    }
    self.cityArr = arr;
    // 页面传参处理
    let parameter = self.$route.query;
    if(parameter.paan == 1 || parameter.paan == '1'){// 孔雀计划A级券商注册
        self.distingguish = 1;
    }else if(parameter.paan == 2 || parameter.paan == '2'){// 孔雀计划五星服务站注册
        self.distingguish = 2;
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
        flex-direction: row;
        align-items: center;
    }
    @mixin box_five{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    @mixin box_six{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    @mixin box_seven{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    @mixin box_eight{
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
        .present{//顶部内容
            @include box_three();
            width: 100%;
            height: px2rem(478);
            position: relative;
            .present_img{
                width: 100%;
                height: px2rem(478);
                position: absolute;
                top: 0;
                left: 0;
                z-index: -1;
            }
            .present_one{
                @include box_four();
                width: auto;
                height: px2rem(64);
                position: absolute;
                top: 22%;
                left: 5.33%;
                .pron_spanOne{
                    font-size:px2rem(28);
                    font-weight:500;
                    color:rgba(53,59,80,1);
                    line-height:px2rem(40);
                }
                .pron_img{
                    margin-left: px2rem(12);
                    width: px2rem(64);
                    height: px2rem(64);
                    border-radius: 50%;
                }
                .pron_spanTwo{
                    margin-left: px2rem(12);
                    font-size:px2rem(28);
                    font-weight:bold;
                    color:rgba(53,59,80,1);
                    line-height:px2rem(40);
                }
            }
            .present_two{
                @include box_four();
                width: auto;
                height: px2rem(40);
                position: absolute;
                top: 38%;
                left: 5.33%;
                .pt_spanOne{
                    font-size:px2rem(28);
                    font-weight:400;
                    color:rgba(53,59,80,1);
                    line-height:px2rem(40);
                }
                .pt_spanTwo{
                    margin-left: px2rem(8);
                    font-size:px2rem(28);
                    font-weight:bold;
                    color:rgba(53,59,80,1);
                    line-height:px2rem(40);
                }
            }
        }
        .words{//手机验证
            @include box_six();
            margin-top: px2rem(40);
            width: 100%;
            height: px2rem(44);
            .words_left{
                margin-left: 5.33%;
                font-size:px2rem(32);
                font-weight:bold;
                color:rgba(53,59,80,1);
                line-height:px2rem(44);
            }
            .words_right{
                margin-right: 4.27%;
                font-size:px2rem(32);
                font-weight:400;
                color:rgba(8,194,153,1);
                line-height:px2rem(44);
            }
        }
        .phone{//手机号
            @include box_three();
            margin-top: px2rem(24);
            width: 100%;
            height: px2rem(76);
            .phone_page{
                @include box_four();
                width: 90.4%;
                height: 100%;
                border-bottom: px2rem(2) solid #BACCD8;
                .pp_spanOne{
                    font-size:px2rem(32);
                    font-weight:bold;
                    color:rgba(53,59,80,1);
                    line-height:px2rem(44);
                }
                .pp_spanTwo{
                    margin-left: px2rem(12);
                    width: px2rem(24);
                    height: px2rem(16);
                }
                .pp_ipt{
                    margin-left: px2rem(23);
                    width: px2rem(380);
                    height: 100%;
                    border: none;
                    background: none;
                    outline: none;
                    font-size:px2rem(28);
                    font-weight:400;
                    color:#95A0B6;
                    line-height:px2rem(40);
                }
            }
        }
        .code{//验证码
            @include box_three();
            margin-top: px2rem(28);
            width: 100%;
            height: px2rem(76);
            .code_page{
                @include box_six();
                width: 90.4%;
                height: 100%;
                border-bottom: px2rem(2) solid #BACCD8;
                .cp_ipt{
                    margin-left: px2rem(23);
                    width: px2rem(266);
                    height: 100%;
                    border: none;
                    background: none;
                    outline: none;
                    font-size:px2rem(28);
                    font-weight:400;
                    color:#95A0B6;
                    line-height:px2rem(40);
                }
                .cp_div{
                    @include box_three();
                    margin-right: px2rem(12);
                    width:px2rem(152);
                    height:px2rem(50);
                    border-radius:px2rem(26);
                    border:px2rem(2) solid rgba(92,127,238,1);
                    font-size:px2rem(24);
                    font-weight:400;
                    color:rgba(92,127,238,1);
                    line-height:px2rem(34);
                }
                .cp_span{
                   @include box_three();
                    margin-right: px2rem(12);
                    width:px2rem(152);
                    height:px2rem(50);
                    font-size:px2rem(24);
                    font-weight:400;
                    color:rgba(92,127,238,1);
                    line-height:px2rem(34); 
                }
            }
        }
        .makesure{//确定按钮
            @include box_three();
            margin-top: px2rem(32);
            width: 100%;
            height: px2rem(64);
            .makesure_page{
                @include box_three();
                width:px2rem(218);
                height:px2rem(64);
                background:rgba(92,127,238,1);
                border-radius:px2rem(8);
                font-size:px2rem(28);
                font-weight:400;
                color:rgba(255,255,255,1);
                line-height:px2rem(40);
            }
        }
        .name{//名称
            @include box_seven();
            margin-top: px2rem(40);
            width: 100%;
            height: auto;
            .name_one{
                width: 90.4%;
                height: px2rem(44);
                font-size:px2rem(32);
                font-weight:bold;
                color:rgba(53,59,80,1);
                line-height:px2rem(44);
            }
            .name_two{
                @include box_eight();
                width: 90.4%;
                height: px2rem(92);
                margin-top: px2rem(24);
                .name_two_img{
                    width:px2rem(92);
                    height:px2rem(92);
                    border:px2rem(2) solid rgba(186,204,216,1);
                    border-radius: 50%;
                }
                .name_two_div{
                    width: px2rem(566);
                    height: px2rem(76);
                    margin: px2rem(16) 0 0 px2rem(20);
                    border-bottom:px2rem(2) solid #BACCD8;
                    .ntd_ipt{
                        width: px2rem(266);
                        height: 100%;
                        border: none;
                        background: none;
                        outline: none;
                        font-size:px2rem(28);
                        font-weight:400;
                        color:#95A0B6;
                        line-height:px2rem(40);
                    }
                }
            }
        }
        .city{//城市选择
            width: auto;
            height: px2rem(44);
            margin: px2rem(40) 0 0 5.33%;
            font-size:px2rem(32);
            font-family:PingFangSC-Medium,PingFang SC;
            font-weight:bold;
            color:rgba(53,59,80,1);
            line-height:px2rem(44);
        }
        .choice{//三级联动
            @include box_two();
            margin-top: px2rem(24);
            width: 100%;
            height: px2rem(76);
            .choice_model{
                @include box_four();
                width:px2rem(216);
                height:px2rem(76);
                margin-left: px2rem(12);
                background:rgba(255,255,255,0.15);
                box-shadow:0 0 px2rem(6) 0 rgba(0,0,0,0.16);
                border-radius:px2rem(4);
                overflow: hidden;
                .chmo_left{
                    @include box_three();
                    width: px2rem(172);
                    height: 100%;
                    font-size:px2rem(32);
                    font-weight:400;
                    color:rgba(129,139,158,1);
                    line-height:px2rem(44);
                }
                .chmo_right{
                   @include box_three();
                   width: px2rem(44);
                   height: 100%; 
                   .chmo_right_img{
                       width: px2rem(24);
                       height:px2rem(16);
                   }
                }
            }
            .choice_modelOne{
                @include box_four();
                width:px2rem(310);
                height:px2rem(76);
                margin-left: px2rem(12);
                background:rgba(255,255,255,0.15);
                box-shadow:0 0 px2rem(6) 0 rgba(0,0,0,0.16);
                border-radius:px2rem(4);
                overflow: hidden;
                .chmo_left{
                    @include box_three();
                    width: px2rem(266);
                    height: 100%;
                    font-size:px2rem(32);
                    font-weight:400;
                    color:rgba(129,139,158,1);
                    line-height:px2rem(44);
                }
                .chmo_right{
                   @include box_three();
                   width: px2rem(44);
                   height: 100%; 
                   .chmo_right_img{
                       width: px2rem(24);
                       height:px2rem(16);
                   }
                }
            }
            .van-action-sheet__item{
                height: px2rem(130);
                font-size: px2rem(36);
            }
        }
        .shops{//商铺信息
            @include box_seven();
            width: 100%;
            height: auto;
            .shops_model{
                width: 90.4%;
                height: px2rem(76);
                margin-top: px2rem(24);
                border: px2rem(1) solid rgba(149,160,182,0.48);
                .sm_ipt{
                    width: 100%;
                    height: 100%;
                    border: none;
                    background: none;
                    outline: none;
                    font-size:px2rem(28);
                    font-weight:400;
                    color:#95A0B6;
                    line-height:px2rem(40);
                }
            }
        }
        .btn{//注册按钮
            @include box_three();
            margin-top: px2rem(48);
            width: 100%;
            height: auto;
            .btn_page{
                @include box_three();
                width: 86.67%;
                height: px2rem(98);
                background:linear-gradient(270deg,rgba(82,168,199,1) 0%,rgba(65,151,201,1) 100%);
                border-radius:px2rem(8);
                position: relative;
                .bp_span{
                    font-size:px2rem(36);
                    font-weight:500;
                    color:rgba(255,255,255,1);
                    line-height:px2rem(50);
                }
                .bp_bac{
                    position: absolute;
                    bottom: -16px;
                    z-index: -1;
                    width:px2rem(610);
                    height:px2rem(96);
                    background:linear-gradient(270deg,rgba(82,168,199,1) 0%,rgba(65,151,201,1) 100%);
                    border-radius:px2rem(8);
                    opacity:0.24;
                    filter:blur(px2rem(7));
                }
            }
        }
        .agree{//协议文字
            @include box_two();
            width: 100%;
            height: px2rem(40);
            margin-top: px2rem(28);
            .agree_spanOne{
                font-size:px2rem(28);
                font-weight:500;
                color:rgba(53,59,80,1);
                line-height:px2rem(40);
            }
            .agree_spanTwo{
                font-size:px2rem(28);
                font-weight:500;
                color:#5186C0;
                line-height:px2rem(40);
            }
        }
        .bank{
            @include box_three();
            margin-top: px2rem(28);
            width: 100%;
            height: auto;
            .bank_page{
                @include box_five();
                width: 91.47%;
                height:auto;
                background:rgba(251,251,251,1);
                border-radius:px2rem(8);
                border:px2rem(2) solid rgba(230,230,230,1);
                .bapa{
                  padding: px2rem(24) 0 0 px2rem(46);
                  font-size:px2rem(28);
                  font-weight:400;
                  color:rgba(88,94,107,1);
                  line-height:px2rem(40);  
                }
                .bapa_message{
                    width: 100%;
                    height: px2rem(24);
                }
            }
        }
        .message{//底部留白
            width: 100%;
            height: px2rem(260);
        }
    }
</style>
