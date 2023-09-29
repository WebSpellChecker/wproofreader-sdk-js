import { CKEditor } from 'ckeditor4-react';
import WProofreaderSDK from '@webspellchecker/wproofreader-sdk-js';

function Editor() {
	const text = 'Enter you\'re text here with real spelling and grammer mistakes to see how WProofreader work. Alot of potential errors will be underlined; hover on the marked wods for instant correction suggesstions.';

	return (
		<CKEditor
			initData={text}
			onInstanceReady={ ( { editor } ) => {
				WProofreaderSDK.init({
					container: editor.window.getFrame() ? editor.window.getFrame().$ : editor.element.$
				});
			}}
		/>
	);
}

export default Editor;
