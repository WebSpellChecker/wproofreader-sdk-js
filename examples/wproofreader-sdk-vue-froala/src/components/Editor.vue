<script>
import "froala-editor/css/froala_editor.pkgd.min.css";
import FroalaEditor from "froala-editor/js/froala_editor.pkgd.min.js";
import WProofreaderSDK from '@webspellchecker/wproofreader-sdk-js';

export default {
	setup: () => {
		const text = 'Enter you\'re text here with real spelling and grammer mistakes to see how WProofreader work. Alot of potential errors will be underlined; hover on the marked wods for instant correction suggesstions.';
		return { text };
	},
	mounted: () => {
		new FroalaEditor("#edit", {
			events: {
				initialized() {
					WProofreaderSDK.init({
						container: this.$iframe ? this.$iframe[0] : this.el
					});
				}
			}
		});
	},
};
</script>


<template>
	<div id="edit">{{ text }}</div>
</template>
