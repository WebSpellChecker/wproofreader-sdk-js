import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CKEditorModule } from 'ckeditor4-angular';
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
		CKEditorModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
