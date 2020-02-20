<template>
  <div class="address-plus-warp">
    <div class="plus-list">
      <van-field
          v-model="consignee"
          label="收货人"
          placeholder="请输入收货人"
          input-align="right"></van-field>
    </div>
    <div class="plus-list">
      <van-field
          v-model="mobile"
          label="手机号"
          placeholder="请输入手机号"
          input-align="right"></van-field>
    </div>
    <div class="plus-list">
      <van-field
          v-model="area"
          label="所在地区"
          placeholder="请输入所在地区"
          input-align="right"></van-field>
    </div>
    <div class="plus-list">
      <van-field
          v-model="address"
          label="详细地址"
          placeholder="请输入详细地址"
          input-align="right"></van-field>
    </div>
    <div class="btn-warp">
      <van-button plain type="primary" color="#fd7304" @click="save">保存</van-button>
    </div>
  </div>
</template>
<script>
  import rightIcon from 'src/assets/right-icon.png'

  export default {
    name: 'address-plus',
    data() {
      return {
        rightIcon,
        addressInfo:{},
        consignee:'',
        mobile:'',
        area:'',
        address:''
      }
    },
    components:{

    },
    created(){

    },
    methods:{
      save(){
        let arr = sessionStorage.addressInfo?JSON.parse(sessionStorage.addressInfo):[];
        arr.push({
          "id": arr.length + 200,
          "consignee": this.consignee,
          "country": 1,
          "countryName": "中国",
          "province": 2,
          "provinceName": this.area.split(',')[0],
          "city": 36,
          "cityName": this.area.split(',')[1],
          "district": 425,
          "districtName": this.area.split(',')[2],
          "address": this.address,
          "mobile": this.mobile,
          "isdefault": false
        });
        sessionStorage.setItem('addressInfo',JSON.stringify(arr))
        this.$router.push('/address')
      }
    }
  }
</script>
<style scoped lang="scss">
  .address-plus-warp{
    .plus-list{
      border-bottom: 1px solid #ddd;
    }
    .btn-warp{
      display: flex;align-items: center;justify-content: center;
      width: 100%;padding-top: 1.2rem;
    }
  }
</style>
