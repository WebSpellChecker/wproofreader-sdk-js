import WProofreaderSDK from '@webspellchecker/wproofreader-sdk-js';
import FroalaEditor from 'react-froala-wysiwyg';

import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

function Editor() {
	const text = 'Enter you\'re text here with real spelling and grammer mistakes to see how WProofreader work. Alot of potential errors will be underlined; hover on the marked wods for instant correction suggesstions.';

	return (
		<FroalaEditor
			tag='textarea'
			model={text}
			config={{
				events : {
					'initialized' : function() {
						WProofreaderSDK.init({
							container: this.$iframe ? this.$iframe[0] : this.el
						});
					}
				}
			}}
		/>
	);
}

export default Editor;
