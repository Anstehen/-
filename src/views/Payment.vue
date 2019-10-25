<template>
  <div id="invitation">
      <div class="headline">
        <span class="headline_span">孔雀计划五星服务站注册</span>
      </div>
      <div class="underline"></div>
      <div class="count">
          <img class="count_img" src="../assets/images/paymentBac.png" alt="背景图">
          <div class="count_words">本授权牌由<strong>美在中国&银联商务</strong>联合授权发行，授予合作美业沙龙为授牌银行白金卡VIP<strong>五星级指定服务站</strong>称号，<strong>银行VIP用户可通过识别二维码在美在中国主页上进行验证。</strong></div>
          <div class="monery">
              <span class="monery_spanOne">授权牌工本费：</span>
              <span class="monery_spanTwo">199元</span>
          </div>
      </div>
      <div class="btn">
          <div class="btn_page">
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
      
    };
  },
  methods:{
    // 注册按钮点击
    registerClick:function(){
        let self = _this; 
        
    }
  },
  mounted(){
      let self = this;  

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
