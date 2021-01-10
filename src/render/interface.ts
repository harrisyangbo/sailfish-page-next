import { h } from 'vue';

interface ComponentNodes {
	[key: string]: any
}
interface ContextModel {
	[key: string]: any
}
interface ParentNode {
	[key: string]: any
}
export interface RenderComponentTree<T> {
	(createElement: typeof h, componentNodes: ComponentNodes, contextModel: ContextModel, parentNode: ParentNode): Array<T>
}
