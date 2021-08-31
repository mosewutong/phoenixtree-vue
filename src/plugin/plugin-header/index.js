// 为组件提供 install 安装方法，供按需引入
import pluginHeader from './plugin_header.vue';
pluginHeader.install  = Vue => Vue.component(pluginHeader.name, pluginHeader)
export default pluginHeader