import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EditorModule } from '@tinymce/tinymce-angular';
import WProofreader from '@webspellchecker/wproofreader-sdk-js';

import { AppComponent } from './app.component';

WProofreader.configure({
	autoSearch: true,
	autoDestroy: true,
	enforceAI: true,
	serviceId: 'your-service-id'
});

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		EditorModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
