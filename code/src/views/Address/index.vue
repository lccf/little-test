<template>
  <div class="address-warp">
      <div class="address-list" v-for="item in addressInfo">
        <div class="list-title">
          <span>{{item.consignee}}</span><i>{{item.mobile}}</i>
        </div>
        <div class="list-address">
          {{item.countryName + item.provinceName + item.cityName + item.districtName + item.address}}
        </div>
        <div class="list-option">
          <van-button v-if="item.isdefault" plain type="primary" color="#fd7304" size="small">默认地址</van-button>
          <van-button type="default" v-if="!item.isdefault" size="small" @click="defaultValueFun(item.id)">设为默认</van-button>
          <van-button type="default" size="small" @click="toAddresEdit(item.id)">编辑</van-button>
          <van-button type="default" size="small" @click="toAddresDel(item.id)">删除</van-button>
        </div>
      </div>
      <div class="btn-warp">
        <van-button plain type="primary" color="#fd7304" @click="toAddresPlus">+ 新增收货地址</van-button>
      </div>
  </div>
</template>
<script>
  import { GetAddressInfo } from 'src/api/store'
  import rightIcon from 'src/assets/right-icon.png'

  export default {
    name: 'address-info',
    data() {
      return {
        rightIcon,
        addressInfo:{},
        selectFlag:false
      }
    },
    components:{

    },
    created(){
      if(!sessionStorage.addressInfo){
        GetAddressInfo().then(res => {
          this.addressInfo = res;
          sessionStorage.setItem('addressInfo',JSON.stringify(res))
        });
      } else {
        this.addressInfo = JSON.parse(sessionStorage.addressInfo)
      }
    },
    methods:{
      toAddresPlus(){
        this.$router.push('/addressplus')
      },
      toAddresEdit(id){
        this.$router.push({path:'/addressedit',query:{id:id}})
      },
      defaultValueFun(id){
        let arr = sessionStorage.addressInfo?JSON.parse(sessionStorage.addressInfo):[];
        let newArr = [];
        if(arr.length){
          arr.map(req => {
            req.isdefault = !(req.id !== id)
            newArr.push(req)
          });
          this.addressInfo = newArr
          sessionStorage.setItem('addressInfo',JSON.stringify(newArr))
        }
      },
      toAddresDel(id){
        let arr = sessionStorage.addressInfo?JSON.parse(sessionStorage.addressInfo):[];
        let newArr = [];
        if(arr.length){
          arr.map(req => {
            if(req.id !== id){
              newArr.push(req)
            }
          });
          this.addressInfo = newArr
          sessionStorage.setItem('addressInfo',JSON.stringify(newArr))
        }
      }
    }
  }
</script>
<style scoped lang="scss">
  .address-warp{

    .address-list{
      width: 100%;background-color: #fff;margin-top: .6rem;
      padding: .6rem;
      .list-title{
        font-size: .7rem;color: #666;line-height: 1.2rem;
        span{
          margin-right: 1rem;
        }
        i{
          font-style: normal;
        }
      }
      .list-address{
        font-size: .7rem;color: #666;line-height: 1.6;
      }
      .list-option{
        margin-top: 1.2rem;
      }
    }
    .btn-warp{
      display: flex;align-items: center;justify-content: center;
      width: 100%;padding-top: 1.2rem;
    }
  }
</style>
