function Editor() {
	const text = 'Enter you\'re text here with real spelling and grammer mistakes to see how WProofreader work. Alot of potential errors will be underlined; hover on the marked wods for instant correction suggesstions.';

	return (	
		<textarea data-wsc-autocreate="true" defaultValue={ text } rows="10"></textarea>
	);
}

export default Editor;
