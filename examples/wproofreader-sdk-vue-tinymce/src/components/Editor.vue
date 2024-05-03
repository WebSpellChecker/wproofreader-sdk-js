<script>
import TinyMCE from "@tinymce/tinymce-vue";
import WProofreaderSDK from '@webspellchecker/wproofreader-sdk-js';

export default {
	setup: () => {
		const text = 'Enter you\'re text here with real spelling and grammer mistakes to see how WProofreader work. Alot of potential errors will be underlined; hover on the marked wods for instant correction suggesstions.';
		const initCallback = (editor) => {
			WProofreaderSDK.init({
				container: editor.iframeElement
			});
		};

		return { text, initCallback };
	},
	components: {
		TinyMCE
	}
};
</script>

<template>
	<TinyMCE
		api-key="no-api-key"
		:initialValue="text"
		:init="{
			init_instance_callback: initCallback
		}"
	/>
</template>
