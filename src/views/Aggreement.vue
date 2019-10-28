<template>
  <div id="aggree">
      <div class="aggree_one"><strong>《美在中国》孔雀计划线上合作协议</strong></div>
      <div class="aggree_two">
          <div class="aggree_two_words">甲方：杭州品曦文化有限公司</div>
      </div>
      <div class="aggree_two">
          <div class="aggree_two_words">地址：浙江省杭州市西湖区文二路391号西湖国际科技大厦5号楼2层227－236室</div>
      </div>
      <div class="aggree_two">
          <div class="aggree_two_words">乙方： 注册人</div>
      </div>
      <div class="aggree_three">
          <div class="aggree_three_words">一、甲乙双方本着平等自愿、公平的原则，就《美在中国》孔雀计划项目合作达成协议如下：</div>
      </div>
      <div class="aggree_four">
          <div class="aggree_four_words">1、乙方为甲方【美在中国】孔雀计划项目<span class="aggree_four_words_center">A级孔雀券商</span>。</div>
      </div>
      <div class="aggree_three">
          <div class="aggree_three_words">2、	任务量及分润细则</div>
      </div>
      <div class="aggree_four">
          <div class="aggree_four_words">2.1 甲方孔雀计划项目启动后，乙方自主签约15个工作日内，完成所属地区签约沙龙<span class="aggree_four_words_center">50</span>家，乙方享受该区域签约沙龙门店的现金收益、按<span class="aggree_four_words_center">15% 每单</span>进行结算。</div>
      </div>
      <div class="aggree_four">
          <div class="aggree_four_words">未在规定时间内完成目标任务量，按现金收益<span class="aggree_four_words_center">10%  每单</span>进行结算。</div>
      </div>
      <div class="aggree_three">
          <div class="aggree_three_words">2.2 在15个工作日内，若该地区签约总量提前完成，即提前终止券商市场签约。</div>
      </div>
      <div class="aggree_three">
          <div class="aggree_three_words">3、合作期限为签约日开始一年时间。</div>
      </div>
      <div class="aggree_three">
          <div class="aggree_three_words">4、结算日期 </div>
      </div>
      <div class="aggree_three">
          <div class="aggree_three_words">每月25日（节假日顺延）进行结算。 </div>
      </div>
      <div class="aggree_three">
          <div class="aggree_three_words">二、其他约定 </div>
      </div>
      <div class="aggree_three">
          <div class="aggree_three_words">1、保密约定：关于本合作项目的任何商业信息包括但不限于合作模式、合作内容、收益分配等，或一方在合作过程中获取的对方的商业秘密，双方应严格保密。</div>
      </div>
      <div class="aggree_three">
          <div class="aggree_three_words">任何一方不得采取不正当手段获取对方的商业机密，也不得向第三方透露其知悉的商业秘密。任何一方违反保密约定，均应承担相应的法律责任。</div>
      </div>
      <div class="aggree_three">
          <div class="aggree_three_words">三、争议的处理 </div>
      </div>
      <div class="aggree_three">
          <div class="aggree_three_words">1、本协议受中华人民共和国法律管辖并按其进行解释。 </div>
      </div>
      <div class="aggree_three">
          <div class="aggree_three_words">2、本协议在履行过程中发生的争议，由双方当事人协商解决，也可由有关部门调解：协商或调解不成的，依法向甲方所在地人民法院起诉解决。</div>
      </div>
      <div class="message"></div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      
    };
  },
  methods:{
    
  },
  mounted(){
      
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
  flex-wrap: wrap;
}
@mixin box_four{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#aggree{
    @include box_one();
    width: 100%;
    height: auto;
    overflow-x: hidden;
    overflow-y: scroll;
    .aggree_one{
        @include box_two();
        margin-top: px2rem(48);
        font-size:px2rem(40);
        color:rgba(53,53,53,1);
        line-height:px2rem(56);
    }
    .aggree_two{
        @include box_two();
        width: 100%;
        height: auto;
        margin-top: px2rem(8);
        .aggree_two_words{
            width: 91.47%;
            font-size:px2rem(28);
            color:rgba(53,53,53,1);
            line-height:px2rem(56);
        }
    }
    .aggree_three{
        @include box_two();
        width: 100%;
        height: auto;
        margin-top: px2rem(8);
        .aggree_three_words{
            width: 91.47%;
            font-size:px2rem(28);
            color:rgba(53,53,53,1);
            line-height:px2rem(56);
        }
    }
    .aggree_four{
        @include box_two();
        width: 100%;
        height: auto;
        margin-top: px2rem(8);
        .aggree_four_words{
            @include box_three();
            width: 91.47%;
            font-size:px2rem(28);
            color:rgba(53,53,53,1);
            line-height:px2rem(56);
            .aggree_four_words_center{
                text-decoration: underline;
            }
        }
    }
    .message{
        width: 100%;
        height: px2rem(120);
    }
}
</style>
