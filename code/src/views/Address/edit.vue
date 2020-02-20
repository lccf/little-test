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
        id:null,
        consignee:'',
        mobile:'',
        area:'',
        address:''
      }
    },
    components:{

    },
    created(){
      let _this = this;
      this.id = this.$route.query.id;
      let arr = sessionStorage.addressInfo?JSON.parse(sessionStorage.addressInfo):[];
      arr.map(req => {
        if(req.id === _this.id){
          _this.consignee = req.consignee;
          _this.mobile = req.mobile;
          _this.area = req.provinceName +','+ req.cityName +',' + req.districtName;
          _this.address = req.address;
        }
      })
    },
    methods:{
      save(){
        let _this = this;
        let arr = sessionStorage.addressInfo?JSON.parse(sessionStorage.addressInfo):[];
        if(arr.length){
          arr.map(req => {
            if(req.id === _this.id){
              req['consignee'] = _this.consignee;
              req['provinceName'] = _this.area.split(',')[0];
              req['cityName'] = _this.area.split(',')[1];
              req['districtName'] = _this.area.split(',')[2];
              req['address'] = _this.address;
              req['mobile'] = _this.mobile
            }
          })
        }
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
