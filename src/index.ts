// import mpUI from '@xes/dh-component-vue-mp-ui';
// import '@xes/dh-component-vue-mp-ui/dist/dh_component_vue_mp_ui.min.css';
import renderComponent from './render/index';
// import global from './common/global';
// import ElementUI from 'element-ui';
// import configConvert from './compatibility/convert';

// export { configConvert };
import { App } from 'vue';
import global from './common/global';
interface Options {
  hasPermit?: boolean, // 权限接口
  getNameByUrl?(): string, // 页面名称
  formInputComponents?: any, // 表单输入/展示自定义组件
  tableFieldComponents?: any, // 表格自定义组件
  logicComponents?: any, // 逻辑自定义组件
}
const install = function(Vue: App, options: Options) {
  global.setItem('getNameByUrlHandler', options.getNameByUrl);
  // Vue.use(ElementUI);
  // Vue.use(mpUI, {
  //   hasPermit,
  //   formInputComponents,
  //   tableFieldComponents,
  //   logicComponents
  // });
  Vue.component('sailfish-page', renderComponent);
}
export default {
  install
};