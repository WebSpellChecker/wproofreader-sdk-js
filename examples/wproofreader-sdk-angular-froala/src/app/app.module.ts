import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
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
		FroalaEditorModule.forRoot(),
		FroalaViewModule.forRoot()
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
