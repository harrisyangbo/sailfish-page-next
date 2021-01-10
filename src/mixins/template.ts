/**
 * Catalyst模板逻辑，管理加载的Catalyst组件
 */
// import { getProperty, setProperty, validator } from '@xes/dh-component-vue-mp-ui';
// import { configToCamelCase } from '../common/util';
// import configAdapter from '../common/data_adapter';
// import { registerCustomComponent, typeComponents } from '@xes/dh-component-vue-mp-ui';
export default {
  props: {
    businessConfig: {
      type: Object,
      default: () => {
				return {}
			}
    },
    initiateModel: {
      type: Object,
      default: () => {
				return {}
			}
    }
  },
  data() {
    return {
      $mpComponentStatus: {},
      $mpLoadPromises: {}, // 页面上onload触发的交互集合
      $mpAllLoadPromisesCollected: false,
      $mpStartWatchInputChange: false,
      $mpPageLoadTriggered: false,
      $mpDrawerContentChanged: false, // 该变量在父页面内使用，用来表示滑层页面内容是否有变化。子页面不能直接修改该变量
      componentTree: null,
      dataModel: null
    };
  },
  // computed: {
  //   scriptContext() {
  //     return {
  //       $dataModel: this.dataModel,
  //       $row: undefined
  //     };
  //   }
  // },
  mounted() {
    // try {
    //   if (this.businessConfig) {
    //     this.init(this.businessConfig);
    //   }
    // } catch (error) {
    //   // this.$message.error(error.message);
    //   throw new Error(error)
    // }
    console.log('template mixin mounted')
  },
  // provide() {
  //   return {
  //     $mpRoot: this,
  //     $mpRegister: this.$mpRegister,
  //     $mpSyncStatus: this.$mpSyncStatus,
  //     $mpUnRegister: this.$mpUnRegister,
  //     $mpSetDrawerContentChangedOfParent: this.$mpSetDrawerContentChanged,
  //     $mpRegisterLoadPromise: this.$mpRegisterLoadPromise,
  //     $mpSyncLoadPromise: this.$mpSyncLoadPromise,
  //     $mpUnRegisterLoadPromise: this.$mpUnRegisterLoadPromise
  //   };
  // },
  // inject: {
  //   $mpSetDrawerContentChangedOfParent: {
  //     default: () => null
  //   }
  // },
  methods: {
    init(rawBusinessConfig: any) {
      console.log('template mixin init')
      console.log(rawBusinessConfig)
      // if (JSON.stringify(this.customComponentsList) !== '{}') {
      //   // 动态注册自定义组件
      //   for (let key in this.customComponentsList) {
      //     let componentCategory = 'input';
      //     if (key.includes('logic')) componentCategory = 'logic';
      //     if (key.includes('table')) componentCategory = 'table';
      //     console.log(`has custom: ${typeComponents[key]}`);
      //     if (!typeComponents[key]) {
      //       console.log(`register component: ${key}`);
      //       registerCustomComponent(null, componentCategory, key, this.customComponentsList[key]);
      //     }
      //   }
      // }
      // 校验数据合法性
      // try {
      //   validator.check(rawBusinessConfig);
      // } catch (e) {
      //   this.$message.error('页面配置数据存在错误');
      //   console.error(e);
      //   return;
      // }
      // 重置状态数据
      // this.resetData();
      // 整理配置数据
      // let { businessConfig, dataModel } = configAdapter.make(rawBusinessConfig);
      // console.log('catalyst render is initiated，making config data。 businessConfig: ', businessConfig, 'dataModel: ', dataModel);
      // for (let key in this.initiateModel) {
      //   setProperty(dataModel, key, this.initiateModel[key]);
      // }
      // this.dataModel = dataModel;
      // this.componentTree = configToCamelCase(businessConfig);
      // 调用注入的渲染tab切换标签的方法
      // if (businessConfig.tabs && !!this.$mpRenderTab) {
      //   this.$mpRenderTab(businessConfig.tabs);
      // }
    },
    // resetData() {
    //   this.$data.$mpComponentStatus = {};
    //   this.$data.$mpPageLoadTriggered = false;
    //   this.$data.$mpDrawerContentChanged = false;
    //   this.componentTree = null;
    //   this.dataModel = null;
    // },
    // $mpSetDrawerContentChanged(isChanged = false) {
    //   this.$data.$mpDrawerContentChanged = isChanged;
    // },
    // $mpRegister(id, status) {
    //   // console.log('register component, id: ', id, '$ready: ', status.$ready);
    //   this.$data.$mpComponentStatus[id] = status;
    // },
    // $mpSyncStatus(id, status) {
    //   // console.log('sync component, id: ', id, '$ready: ', status.$ready);
    //   this.$data.$mpComponentStatus[id] = Object.assign({}, this.$data.$mpComponentStatus[id], status);
    //   // 判断组件加载状态，只有当第一次全部组件达到ready状态时，才会触发catalystPageLoad事件
    //   if (this.$data.$mpPageLoadTriggered) {
    //     return;
    //   }
    //   if (Object.values(this.$data.$mpComponentStatus).map(o => o.$ready).every(r => r)) {
    //     this.$data.$mpPageLoadTriggered = true;
    //     // console.log('emit catalystPageLoad event');
    //     this.$emit('catalystPageLoad');
    //   }
    // },
    // $mpUnRegister(id) {
    //   // console.log('unRegister component: ', id);
    //   delete this.$data.$mpComponentStatus[id];
    // },
    // $mpRegisterLoadPromise(id) {
    //   this.$data.$mpLoadPromises[id] = null;
    // },
    // $mpSyncLoadPromise(id, pro) {
    //   this.$data.$mpLoadPromises[id] = pro;
    //   if (this.$data.$mpAllLoadPromisesCollected) {
    //     return;
    //   }
    //   const pros = Object.values(this.$data.$mpLoadPromises);
    //   if (pros.every(p => p)) {
    //     this.$data.$mpAllLoadPromisesCollected = true;
    //     // 等所有onload事件执行完毕之后，保存一份表单项数据的快照
    //     Promise.all(pros).finally(() => {
    //       this.$data.$mpStartWatchInputChange = true;
    //       console.log('onload logic finished! start watching input\'s change event!');
    //     });
    //   }
    // },
    // $mpUnRegisterLoadPromise(id) {
    //   delete this.$data.$mpLoadPromises[id];
    // }
  }
  // beforeDestroy() {
  //   this.$emit('catalystBeforePageUnload');
  // }
};
