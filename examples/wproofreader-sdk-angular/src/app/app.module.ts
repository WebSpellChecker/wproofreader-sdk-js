import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import WProofreaderSDK from '@webspellchecker/wproofreader-sdk-js';

import { AppComponent } from './app.component';

WProofreaderSDK.configure({
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
		BrowserModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
