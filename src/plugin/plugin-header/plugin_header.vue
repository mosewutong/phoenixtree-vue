<template>
  <div class="plugin_header">
    <div class="plugin_header_left">
      <slot name="slot-header-title">
        <img src="../../assets/mo.png" alt="">
        后台管理系统
      </slot>
    </div>

    <div class="plugin_header_right">
      <div class="leftListUser">
        <el-dropdown @command="commandChange">
          <div class="leftListUserPic el-dropdown-link">
            <span class="userPic">
              <slot name="slot-header-btn-pic">A</slot>
            </span>
            <div class="leftListUserTxt">
              <slot name="slot-header-btn-name">administrator</slot>
            </div>
          </div>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item :command="item.command" v-for="(item,index) in dropdowmArr" :key="index">{{ item.name }}</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'phoenixtree-header',
  props: {
    'dropdowmArr': {
      type: Array,
      default: () => {
        return [
          {
            name: '退出登录',
            command: 'logOut'
          }
        ]
      }
    }
  },
  methods:{
    commandChange(obj){
      this.$emit('emitChange', obj);
    },
  }
}
</script>

<style lang="less" scoped>
.plugin_header{
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0 40px;
  .plugin_header_left{
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 14px;
    font-weight: 700;
    color: #000;
    img{
      width: 25px;
      height: 25px;
      margin-right: 10px;
    }
  }
  .plugin_header_right{
    width: 50%;
    height: 100%;
    .leftListUser{
      height: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      overflow: hidden;
      .leftListUserPic{
        display: inline-flex;
        align-items: center;
        height: 100%;
        overflow: hidden;
        cursor: pointer;
        .userPic{
          width: 25px;
          height: 25px;
          border-radius: 50%;
          margin-right: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 18px;
          font-weight: 600;
          background: #409eff;
          color: #fff;
        }
        .leftListUserTxt{
          text-align: center;
        }
      }
    }
  }
}
</style>