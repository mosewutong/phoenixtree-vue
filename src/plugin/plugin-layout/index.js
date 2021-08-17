// 为组件提供 install 安装方法，供按需引入
import layout from './layout.vue';
layout.install  = Vue => Vue.component(layout.name, layout)
export default layout