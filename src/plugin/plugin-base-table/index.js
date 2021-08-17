// 为组件提供 install 安装方法，供按需引入
import baseTable from './baseTable.vue';
baseTable.install  = Vue => Vue.component(baseTable.name, baseTable)
export default baseTable