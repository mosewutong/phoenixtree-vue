<template>
  <div class="home">
    <phoenixtree-header :dropdowmArr="dropdowmArr" @emitChange="commandChange">
      <template v-slot:header-title>
        <img src="../assets/mo.png" alt="">
        cesh
      </template>

      <!-- <template v-slot:header-btn-pic>{{userPic}}</template> -->
      <!-- <template v-slot:header-btn-name>{{userName}}</template> -->
    </phoenixtree-header>
    <div class="homeContent">
      <phoenixtree-layout :noPadding='false' :noContentPadding="false">
        <template v-slot:Frame-content>
          <phoenixtree-base-table>
            <template v-slot:slot-form>
              <el-form :inline="true" :model="formInline">
                <el-form-item label="审批人">
                  <el-input v-model="formInline.user" placeholder="审批人" size="mini"></el-input>
                </el-form-item>
                <el-form-item label="审批人">
                  <el-input v-model="formInline.user" placeholder="审批人" size="small"></el-input>
                </el-form-item>
                <el-form-item label="审批人">
                  <el-date-picker
                    v-model="formInline.value1"
                    type="datetimerange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
                  </el-date-picker>
                </el-form-item>
                <el-form-item label="日期">
                  <el-date-picker
                    v-model="formInline.user"
                    type="date"
                    placeholder="选择日期">
                  </el-date-picker>
                </el-form-item>
              </el-form>
            </template>
          </phoenixtree-base-table>
        </template>
      </phoenixtree-layout>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      formInline: {},
      userPic: '',
      userName: '',
      dropdowmArr: [
        {
          name: '登出',
          command: 'out',
        },
        {
          name: '修改',
          command: 'change',
        }
      ]
    }
  },
  mounted(){
    // this.userName = 'administrator';
    this.userName = '墨色梧桐';
    this.userPic = this.userName.substr(0,1);
    this.userPic = this.userPic.toUpperCase();
  },
  methods:{
    commandChange(obj){
      console.log('1==',obj);
    }
  }
}
</script>

<style lang="less" scoped>
.home{
  width: 100%;
  height: 100%;
  .homeContent{
    width: 100%;
    height: calc(100% - 50px);
  }
}
</style>
