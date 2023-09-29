import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { QuillModule } from 'ngx-quill'
//@ts-ignore
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
		QuillModule.forRoot()
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
