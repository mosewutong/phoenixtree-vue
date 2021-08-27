<template>
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
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      formInline: {}
    }
  },
}
</script>
