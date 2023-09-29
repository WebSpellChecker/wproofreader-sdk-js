<script>
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import { QuillEditor } from '@vueup/vue-quill'
import WProofreaderSDK from '@webspellchecker/wproofreader-sdk-js';

export default {
	setup: () => {
		const text = 'Enter you\’re text here with real spelling and grammer mistakes to see how WProofreader work. Alot of potential errors will be underlined; hover on the marked wods for instant correction suggesstions.';
		return { text };
	},
	components: {
		QuillEditor
	},
	methods: {
		onReady(editor) {
			WProofreaderSDK.init({
				container: editor.root
			});
		}
	}
};
</script>

<template>
	<QuillEditor theme="snow" v-model:content="text" content-type="text" @ready="onReady"/>
</template>
