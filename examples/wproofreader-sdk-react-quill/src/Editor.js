import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import WProofreaderSDK from '@webspellchecker/wproofreader-sdk-js';
import { useRef, useEffect } from 'react';

function Editor() {
	const text = 'Enter you\'re text here with real spelling and grammer mistakes to see how WProofreader work. Alot of potential errors will be underlined; hover on the marked wods for instant correction suggesstions.';
	const quillRef = useRef(null);

	useEffect(() => {
		if (quillRef.current) {
			WProofreaderSDK.init({
				container: quillRef.current.getEditor().root
			});
		}
	}, []);

	return (
		<ReactQuill
			ref={quillRef}
			value={text}
			theme="snow" // You can use other themes if desired
		/>
	);
}

export default Editor;
