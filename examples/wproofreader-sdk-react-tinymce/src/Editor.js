import { Editor as TinyMCE } from '@tinymce/tinymce-react';
import WProofreaderSDK from '@webspellchecker/wproofreader-sdk-js';

function Editor() {
	const text = 'Enter you\'re text here with real spelling and grammer mistakes to see how WProofreader work. Alot of potential errors will be underlined; hover on the marked wods for instant correction suggesstions.';

	const onInstanceReady = function(event) {
		WProofreaderSDK.init({
			container: event.target.iframeElement
		});
	}

	return (
		<TinyMCE
			initialValue={text}
			onInit={onInstanceReady}
		/>
	);
}

export default Editor;
