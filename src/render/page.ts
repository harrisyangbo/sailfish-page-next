import { defineComponent, h } from 'vue';
import SailfishRender from './render';

export default defineComponent({
	name: 'SailfishPage',
	// setup() {},
	// components: {
	// 	SailfishRender
	// },
	render() {
		return h (SailfishRender, {}, [])
	}
})