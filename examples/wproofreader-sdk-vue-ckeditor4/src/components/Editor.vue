<script>
import { component as CKEditor } from '@mayasabha/ckeditor4-vue3';
import WProofreaderSDK from '@webspellchecker/wproofreader-sdk-js';

export default {
	setup: () => {
		const text = 'Enter you\'re text here with real spelling and grammer mistakes to see how WProofreader work. Alot of potential errors will be underlined; hover on the marked wods for instant correction suggesstions.';
		return { text };
	},
	components: {
		CKEditor
	},
	methods: {
		onEditorReady(editor) {
			WProofreaderSDK.init({
				container: editor.window.getFrame() ? editor.window.getFrame().$ : editor.element.$
			});
		}
	}
};
</script>

<template>
	<CKEditor v-model="text" @ready="onEditorReady"></CKEditor>
</template>
