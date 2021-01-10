import { defineComponent, h } from 'vue';
import templateMixin from '../mixins/template'
export default defineComponent({
	name: 'SailfishRender',
	props: {
		pageTitle: {
      type: String,
      default: ''
    },
    customComponentsList: {
      type: Object,
      default: () => {
        return {};
      }
    }
	},
	setup() {
		console.log('>>>SailfishRender setup>>>')
  },
  mixins: [templateMixin],
	inject: {
    // tab 切换方法
    $mpRenderTab: {
      default: () => null
    },
    // 关键字搜索方法
    $mpMatchKeyword: {
      default: () => null
    }
	},
	data() {
    return {
      showDialog: false,
      showDrawer: false,
      currentDialogOrDrawerUri: '',
    };
	},
  computed: {
    // 弹窗或滑层的标题
    dialogOrDrawerTitle() {
      if (this.currentDialogOrDrawerUri) {
        let title = '';
        // if (this.$mpGetNameByUrl) {
        //   title = this.$mpGetNameByUrl(this.currentDialogOrDrawerUri);
        // }
        return title ? title : '';
      } else {
        return '';
      }
    }
	},
	render() {
    // let children = [];
    // if (!!this.pageTitle && (!this.businessConfig || !this.businessConfig.tabs)) {
    //   children.push(h('header', {
    //     'class': 'list-title'
    //   }, [this.pageTitle]));
    // }
    // /** 
    //  * 创建最外层包裹元素
    //  * 创建 el-form 表单
    // */
    // if (this.componentTree && this.dataModel) {
    //   children.push(h('div', {
    //     'class': 'list-template'
    //   }, [
    //     h('el-form', {
    //       props: {
    //         model: this.dataModel
    //       }
    //     }, this.renderComponentTree(h, [ this.componentTree ], this.dataModel))
    //   ]));
    // }
    // if (this.showDialog) {
    //   // 渲染对话框
    //   children.push(h('el-dialog', {
    //     props: {
    //       title: this.dialogOrDrawerTitle,
    //       visible: this.showDialog,
    //       appendToBody: true
    //     },
    //     on: {
    //       'update:visible': (val) => {
    //         this.showDialog = val;
    //       }
    //     }
    //   }, this.$slots.dialog));
    // }
    // if (this.showDrawer) {
    //   const that = this;
    //   // 渲染滑层
    //   children.push(h('dh-drawer', {
    //     props: {
    //       size: '82%',
    //       beforeClose(close) {
    //         if (that.$data.$mpDrawerContentChanged) {
    //           this.$confirm('当前页面内容已做更改，关闭后将不会对修改内容做保存，是否确认关闭？', '', {
    //             confirmButtonText: '确定',
    //             cancelButtonText: '取消',
    //             type: 'warning'
    //           }).then(() => {
    //             that.$mpSetDrawerContentChanged(false);
    //             close();
    //           }).catch(() => {});
    //         } else {
    //           that.$mpSetDrawerContentChanged(false);
    //           close();
    //         }
    //       },
    //       destroyOnClose: true,
    //       title: this.dialogOrDrawerTitle,
    //       visible: this.showDrawer,
    //       direction: 'rtl'
    //     },
    //     on: {
    //       'update:visible': (val) => {
    //         this.showDrawer = val;
    //       }
    //     }
    //   }, this.$slots.docker));
    // }
    return h('div', {'class': 'list-template-box'}, 'sailfish render渲染器');
	},
	methods: {
		// renderComponentTree(createElement, componentNodes, contextModel, parentNode = null) {
    //   let layoutHeaderSlot = false;
    //   let parentComponentId = '';
    //   if (parentNode) {
    //     // 判断如果父组件是行布局组件，并且是否开启了头部插槽。如果layoutHeaderSlot为true，则将componentNodes中的第一个组件(表单块、表单组件、交互组件)放到头部插槽
    //     if (parentNode.type === 'row') {
    //       layoutHeaderSlot = parentNode.foldable && !parentNode.label;
    //     }
    //     // 如果父组件带有componentId，则当前子组件的componentId会拼接上父组件的componentId
    //     if (parentNode.__uniqueComponentId) {
    //       parentComponentId = `${parentNode.__uniqueComponentId}`;
    //     }
    //   }

    //   const childrenComponents = [];
    //   componentNodes.forEach((componentNode, index) => {
    //     let slotName = 'default';
    //     if (index === 0 && layoutHeaderSlot) {
    //       slotName = 'header';
    //     }
    //     if (componentNode.componentId) {
    //       // 父子componentId拼接起来，作为子组件的唯一componentId，保存在__uniqueComponentId属性上作为传递给catalyst组件的值
    //       componentNode.__uniqueComponentId = !parentComponentId ? componentNode.componentId : `${parentComponentId}.${componentNode.componentId}`;
    //     }
    //     // 组装组件属性对象
    //     const props = _pickBy(componentNode, (value, key) => ![ 'type', 'keyName', 'children' ].includes(key));
    //     props.componentId = componentNode.__uniqueComponentId;
    //     if (isLayout(componentNode)) {
    //       // 布局组件
    //       // 如果有子组件，则需要递归渲染子组件
    //       if (typer.getType(componentNode.children) === typer.EnumType.bArray && componentNode.children.length > 0) {
    //         childrenComponents.push(createElement(typeComponents[componentNode.type], {
    //           props
    //         }, this.renderComponentTree(createElement, componentNode.children, contextModel, componentNode)));
    //       } else {
    //         childrenComponents.push(createElement(typeComponents[componentNode.type], {
    //           props
    //         }));
    //       }
    //     } else if (componentNode.type === 'block') {
    //       // 表单块组件
    //       const blockComp = this.renderBlock(createElement, componentNode, contextModel, slotName);
    //       if (blockComp) {
    //         childrenComponents.push(blockComp);
    //       }
    //     } else if (isInput(componentNode)) {
    //       // 表单组件
    //       const inputComp = this.renderInput(createElement, componentNode, contextModel, slotName);
    //       if (inputComp) {
    //         childrenComponents.push(inputComp);
    //       }
    //     } else if (componentNode.type === 'table') {
    //       // 表格组件
    //       const tableComp = this.renderTable(createElement, componentNode, contextModel);
    //       if (tableComp) {
    //         childrenComponents.push(tableComp);
    //       }
    //     } else if (isInteraction(componentNode)) {
    //       // 交互组件
    //       const interactionComp = this.renderInteraction(createElement, componentNode);
    //       if (interactionComp) {
    //         childrenComponents.push(interactionComp);
    //       }
    //     } else if (isLogic(componentNode)) {
    //       // 逻辑组件
    //       const logicComp = this.renderLogic(createElement, componentNode);
    //       if (logicComp) {
    //         childrenComponents.push(logicComp);
    //       }
    //     } else {
    //       // 其它组件
    //       childrenComponents.push(createElement(typeComponents[componentNode.type], {
    //         props
    //       }));
    //     }
    //   });
    //   return childrenComponents;
    // },
	}
})