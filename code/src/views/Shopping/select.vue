<template>
  <div class="goods-select-warp">
    <div class="goods-top">
      <div class="goods-bannner">
        <img :src="base_url + goodsInfo.productUrl">
      </div>
      <div class="goods-price">
        <div class="goods-option-title">
          <span>￥{{goodsInfo.marketPrice}}</span>
          <i :style="{backgroundImage:'url('+closeIcon+')'}" @click.stop="clickCloseFun"></i>
        </div>
        <div class="goods-option-ts">请选择颜色和尺码</div>
      </div>
    </div>
    <div class="goods-color">
      <div class="goods-list-title">颜色：</div>
      <ul>
        <li v-for="item in goodsInfo.saleAttrList.saleAttr1List" :key="item.barcodeSysCode">
          <div :class="getDisabled1(item.saleAttr1ValueCode)?(saleAttr1ValueCode === item.saleAttr1ValueCode?'active':''):''"
               @click="selectedColor(item)">
            <img :src="base_url + item.imageUrl" alt="">
          </div>
        </li>
      </ul>
    </div>
    <div class="goods-size">
      <div class="goods-list-title"><span>尺码：</span><span>尺码表</span></div>
      <ul>
        <li v-for="item in goodsInfo.saleAttrList.saleAttr2List"
            :class="getDisabled(item.saleAttr2ValueCode)?(saleAttr2ValueCode === item.saleAttr2ValueCode?'active':''):''"
            @click="selectedSize(item.saleAttr2ValueCode)"
            :key="item.barcodeSysCode">
          {{item.saleAttr2Value}}
        </li>
      </ul>
    </div>
    <div class="goods-list-num">
      <span class="list-left">购买数量：</span>
      <div class="list-right">
        <span @click="ajjBuyNum">-</span>
        <input type="text" v-model="buyNum">
        <span @click="addBuyNum">+</span>
      </div>
    </div>
    <div class="goods-fiexd-bottom-btn" @click="toPathFun">
      确定
    </div>
  </div>
</template>
<script>
  import rightIcon from 'src/assets/right-icon.png'
  import cartIcon from 'src/assets/cat-icon.png'
  import homeIcon from 'src/assets/home-cion.png'
  import serviceIcon from 'src/assets/service-icon.png'
  import closeIcon from 'src/assets/close.png'
  export default {
    name: 'goods-select-info',
    data() {
      return {
        rightIcon,cartIcon,homeIcon,serviceIcon,closeIcon,
        base_url:'https://pic.bonwebuy.com',
        buyNum:1,
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

        barcodeSysCode:"",
        saleAttr1ValueCode:"",
        saleAttr2ValueCode:""
      }
    },
    props:{
      goodsInfo:Object,
      goodSelect:Object
    },
    created(){

    },
    methods:{
      getDisabled(saleAttr2ValueCode){
        let _this = this;
        let flag = true;
        this.goodsInfo.skuInfo.map(req => {
          if(
            _this.saleAttr1ValueCode === req.saleAttr1ValueCode
            && saleAttr2ValueCode === req.saleAttr2ValueCode
            // && _this.barcodeSysCode === req.barcodeSysCode
          ){
            // console.log(req.stockNum)
            if(req.stockNum < 1){
              flag = false
            }
          }
        });
        return flag
      },
      getDisabled1(saleAttr1ValueCode){
        let _this = this;
        let flag = true;
        this.goodsInfo.skuInfo.map(req => {
          if(
            _this.saleAttr2ValueCode === req.saleAttr2ValueCode
            && saleAttr1ValueCode === req.saleAttr1ValueCode
            // && _this.barcodeSysCode === req.barcodeSysCode
          ){
            // console.log(req.stockNum)
            if(req.stockNum < 1){
              flag = false
            }
          }
        });
        return flag
      },
      selectedColor(e){
        this.barcodeSysCode = e.barcodeSysCode;
        this.saleAttr1ValueCode = e.saleAttr1ValueCode;

        this.getBuyStatus()
      },
      selectedSize(e){
        this.barcodeSysCode = e.barcodeSysCode;
        this.saleAttr2ValueCode = e;

        this.getBuyStatus()
      },
      getBuyStatus(){
        let _this = this;
        let flag = true;
        let num = 1;
        this.goodsInfo.skuInfo.map(req => {
          if(
            _this.saleAttr1ValueCode === req.saleAttr1ValueCode
            && _this.saleAttr2ValueCode === req.saleAttr2ValueCode
          // && _this.barcodeSysCode === req.barcodeSysCode
          ){
            // console.log(req.stockNum)
            num = req.stockNum;
            if(req.stockNum < 1 || _this.buyNum >= req.stockNum){
              flag = false
            }
          }
        });
        if(!flag){
          this.buyNum = num
        }
      },
      clickCloseFun(){
        this.$emit('closeFun')
      },
      ajjBuyNum(){
        if(this.buyNum <= 1){
          return false
        }
        this.buyNum= Number(this.buyNum) - 1
      },
      addBuyNum(){
        let _this = this;
        let flag = true;
        let num = 1;
        this.goodsInfo.skuInfo.map(req => {
          if(
            _this.saleAttr1ValueCode === req.saleAttr1ValueCode
            && _this.saleAttr2ValueCode === req.saleAttr2ValueCode
            // && _this.barcodeSysCode === req.barcodeSysCode
          ){
            // console.log(req.stockNum)
            num = req.stockNum;
            if(req.stockNum < 1 || _this.buyNum >= req.stockNum){
              flag = false
            }
          }
        });
        if(!flag){
          this.buyNum = num
          return false
        }
        this.buyNum= Number(this.buyNum) + 1
      },
      toPathFun(){
        this.$router.push('/address')
      }
    }
  }
</script>
<style scoped lang="scss">
  .goods-select-warp{
    width: 100%;overflow-x: hidden;
    background-color: #f8f8f8;
    .goods-top{
      width: 100%;background-color: #fff;
      display: flex;padding: 1rem;
      .goods-bannner{
        img{
          width: 6rem;height: 6rem;
        }
      }
      .goods-option-title{
        width: 100%;
        display: flex;align-items: center;justify-content: space-between;
        i{
          display: block;width: .8rem;height: .8rem;
          background-position: center;background-repeat: no-repeat;
          background-size: contain;cursor: pointer;
        }
      }
      .goods-price{
        height: 2rem;padding: .6rem .6rem 0;width: 100%;
        span{
          color: #333;font-size: .75rem;
        }
      }
      .goods-option-ts {
        width: 100%;height: 2rem;margin-top: 2rem;
        color: #333;font-size: .75rem;
      }

    }
    .goods-list-title{
      font-size: .7rem;color: #333;height: 2rem;
      display: flex;align-items: center;justify-content: space-between;
    }
    .goods-list-num{
      font-size: .7rem;color: #333;height: 2rem;padding: 0 .6rem;background-color: #fff;
      display: flex;align-items: center;justify-content: space-between;
      .list-left{
        font-size: .7rem;color: #333;
      }
      .list-right{
        display: flex;align-items: center;height: 100%;
        input{
          display: block;width: 3rem;height: 1.4rem;margin:0 .24rem;
          padding: 0 .1rem;text-align: center;
        }
        span{
          font-size: 1.2rem;width: 1rem;text-align: center;
        }
      }
    }
    .goods-color{
      margin: .24rem 0;padding: 0 .6rem;background-color: #fff;
      ul{
        display: flex;width: 100%;flex-wrap: wrap;
        li{
          padding: .6rem 0;margin-right: .2rem;
          img{
            width: 2rem;height: 2rem;
          }
          .active{
            border: 1px solid #fd7304;border-radius: 2px;
          }
        }
      }
    }
    .goods-size{
      margin: .24rem 0;padding: 0 .6rem;background-color: #fff;
      ul{
        display: flex;width: 100%;flex-wrap: wrap;
        li{
          padding: .36rem .24rem;margin-right: .6rem;margin-bottom: .6rem;
          border: 1px solid #ddd;border-radius: 5px;
          font-size: .65rem;color: #333;
        }
        .active{
          border: 1px solid #fd7304;border-radius: 5px;
        }
      }
    }
    .goods-fiexd-bottom-btn{
      width: 100%;height: 2rem;
      position: fixed;bottom: 0;left: 0;right: 0;margin: auto;
      z-index: 99;
      display: flex;align-items: center;
      font-size: .7rem;flex-direction: column;justify-content: center;
      color: #fff;background-color: #fd7304;cursor: pointer;
    }
  }
</style>
