import { Component } from '@angular/core';
import { FroalaEditorDirective } from 'angular-froala-wysiwyg';
import WProofreader from '@webspellchecker/wproofreader-sdk-js';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {
	public text = 'Enter you\'re text here with real spelling and grammer mistakes to see how WProofreader work. Alot of potential errors will be underlined; hover on the marked wods for instant correction suggesstions.';

	public options: Object = {
		events : {
			'initialized': (editor: FroalaEditorDirective) => {
				WProofreader.init({
					//@ts-ignore
					container: editor._editor.el
				});
			}
		}
	}
}
