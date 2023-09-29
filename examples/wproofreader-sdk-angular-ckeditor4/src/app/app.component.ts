import { Component } from '@angular/core';
import { CKEditor4 } from 'ckeditor4-angular/ckeditor';
//@ts-ignore
import WProofreader from '@webspellchecker/wproofreader-sdk-js';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	public text = 'Enter you\'re text here with real spelling and grammer mistakes to see how WProofreader work. Alot of potential errors will be underlined; hover on the marked wods for instant correction suggesstions.';
	public onReady( event: CKEditor4.EventInfo ) {
		const editor = event.editor;

		WProofreader.init({
			container: editor.window.getFrame() ? editor.window.getFrame().$ : editor.element.$
		});
	}
}
