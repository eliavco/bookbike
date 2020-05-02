import { GoogleAnalyticsEventsService } from './services/GoogleAnalyticsEvents/GoogleAnalyticsEvents.service';
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleComponent } from './components/example/example.component';

@NgModule({
	declarations: [
		AppComponent,
		ExampleComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	providers: [
		GoogleAnalyticsEventsService,
		Title
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }
