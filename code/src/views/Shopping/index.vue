<template>
  <div class="goods-warp">
    <div class="goods-top">
      <div class="goods-bannner">
        <van-swipe class="my-swipe" indicator-color="white">
          <van-swipe-item v-for="(item,index) in goodsInfo.galleryList" :key="index">
            <div class="banner-box" :style="{backgroundImage:'url('+base_url + item.imageUrl+')'}"></div>
          </van-swipe-item>
        </van-swipe>

      </div>
      <div class="goods-price"><span>￥{{goodsInfo.marketPrice}}</span><i>初上市价格：￥{{goodsInfo.salePrice}}</i></div>
    </div>
    <div class="goods-setting" @click="selectLink">
      <span>请选择配送方式，颜色，尺码，数量</span>
      <i :style="{backgroundImage:'url('+rightIcon+')'}"></i>
    </div>
    <div class="goods-content">
      <ul>
        <li v-for="item in SwitchList"
            @click="clickFun(item)"
            :key="item.id"
            :class="SwitchId === item.id ? 'active':''">{{item.label}}</li>
      </ul>
      <div class="content-warp">

      </div>
    </div>
    <div class="goods-warp-fiexd-bottom">
      <ul class="goods-fiexd-left">
        <li>
          <i :style="{backgroundImage:'url('+homeIcon+')'}"></i>
          <span>首页</span>
        </li>
        <li>
          <i :style="{backgroundImage:'url('+serviceIcon+')'}"></i>
          <span>客服</span>
        </li>
        <li>
          <i :style="{backgroundImage:'url('+cartIcon+')'}"></i>
          <span>购物车</span>
        </li>
      </ul>
      <div class="goods-fiexd-right">
        <a>立即购买</a>
        <a class="active">添加至购物车</a>
      </div>
    </div>

    <div class="goods-fiexd-mask" v-if="selectFlag">
      <goodsSelectInfo :goodsInfo="goodsInfo" @closeFun="closeFun"></goodsSelectInfo>
    </div>
  </div>
</template>
<script>
  import { GetGoodsInfo } from 'src/api/store'
  import rightIcon from 'src/assets/right-icon.png'
  import cartIcon from 'src/assets/cat-icon.png'
  import homeIcon from 'src/assets/home-cion.png'
  import serviceIcon from 'src/assets/service-icon.png'
  import goodsSelectInfo from './select'

  export default {
    name: 'goods-info',
    data() {
      return {
        rightIcon,cartIcon,homeIcon,serviceIcon,
        base_url:'https://pic.bonwebuy.com',
        SwitchList:[
          {
            id:1,
            label:'详情'
          },
          {
            id:2,
            label:'评论'
          }
        ],
        SwitchId:1,
        goodsInfo:{},
        selectFlag:false
      }
    },
    components:{
      goodsSelectInfo
    },
    created(){
      GetGoodsInfo().then(res => {
        console.log(res)
        this.goodsInfo = res
      })
    },
    methods:{
      clickFun(item){
        this.SwitchId = item.id
      },
      selectLink(){
        this.selectFlag = true
      },
      closeFun(){
        this.selectFlag = false
      }
    }
  }
</script>
<style scoped lang="scss">
  .goods-warp{
    background-color: #f8f8f8;
    .goods-top{
      width: 100%;background-color: #fff;
      .goods-bannner{
        .banner-box{
          width: 100%;height: 17rem;
          background-position: center;background-repeat: no-repeat;
          background-size: contain;
        }
      }
      .goods-price{
        width: 100%;height: 2rem;padding: 0 .6rem;
        display: flex;align-items: center;justify-content: space-between;
        span{
          color: #fd7304;font-size: .75rem;
        }
        i{
          color: #8f8f8f;font-size: .65rem;font-style: normal;
        }
      }

    }
    .goods-setting{
      margin: .24rem 0;padding: 0 .6rem;height: 2rem;background-color: #fff;
      display: flex;align-items: center;justify-content: space-between;
      span{
        font-size: .7rem;color: #333;
      }
      i{
        display: block;width: 1rem;height: 1rem;
        background-position: center;background-repeat: no-repeat;
        background-size: contain;
      }
    }
    .goods-content{
      border-bottom: 1px solid #ddd;background-color: #fff;
      ul{
        margin: .24rem 0;padding: 0 .6rem;height: 2rem;
        display: flex;align-items: center;justify-content: space-between;
        li{
          width: 50%;display: flex;align-items: center;justify-content: center;
          font-size: .7rem;color: #999;
        }
        .active{
          color: #333;
        }
      }
    }
    .goods-warp-fiexd-bottom{
      width: 100%;height: 2rem;
      position: fixed;bottom: 0;left: 0;right: 0;margin: auto;
      z-index: 99;border-top: 1px solid #ddd;
      display: flex;align-items: center;justify-content: space-between;
      .goods-fiexd-left{
        width: 40%;height: 100%;
        display: flex;align-items: center;
        li{
          width: 33.3%;height: 100%;border-right: 1px solid #ddd;
          display: flex;align-items: center;flex-direction: column;justify-content: center;
          i{
            display: block;width: .8rem;height: .8rem;
            background-position: center;background-repeat: no-repeat;
            background-size: contain;
          }
          span{
            font-size: .6rem;
          }
        }
      }
      .goods-fiexd-right{
        width: 60%;height: 100%;
        display: flex;align-items: center;
        a{
          width: 50%;height: 100%;font-size: .7rem;
          display: flex;align-items: center;flex-direction: column;justify-content: center;
          color: #fd7304;
        }
        .active{
          background-color: #fd7304;color: #fff;
        }
      }
    }
    .goods-fiexd-mask{
      width: 100%;height: 100%;background-color: #fff;
      position: fixed;top:0;bottom: 0;left: 0;right: 0;margin: auto;
      z-index: 999;
    }
  }
</style>
