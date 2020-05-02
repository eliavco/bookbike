import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleComponent } from './components/example/example.component';

// services
import { GoogleAnalyticsEventsService } from './services/GoogleAnalyticsEvents/GoogleAnalyticsEvents.service';
import { ExampleService } from './services/example/example.service';

@NgModule({
	declarations: [
		AppComponent,
		ExampleComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule
	],
	providers: [
		GoogleAnalyticsEventsService,
		Title,
		ExampleService
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }
