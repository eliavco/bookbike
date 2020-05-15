import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleComponent } from './components/example/example.component';

import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarHttpModule } from '@ngx-loading-bar/http';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';

// services
import { GoogleAnalyticsEventsService } from './services/GoogleAnalyticsEvents/GoogleAnalyticsEvents.service';
import { ExampleService } from './services/example/example.service';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
	declarations: [
		AppComponent,
		ExampleComponent,
		NotFoundComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		LoadingBarHttpClientModule,
		LoadingBarHttpModule,
		LoadingBarRouterModule,
		FontAwesomeModule
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
