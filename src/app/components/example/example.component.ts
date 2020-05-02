import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';

import { GoogleAnalyticsEventsService } from './../../services/GoogleAnalyticsEvents/GoogleAnalyticsEvents.service';
import { ExampleService } from './../../services/example/example.service';

@Component({
	selector: 'bk-example',
	templateUrl: './example.component.html',
	styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {

	info;

	constructor(
		private googleAnalyticsEventsService: GoogleAnalyticsEventsService,
		private titleService: Title,
		private exampleService: ExampleService) { }

	ngOnInit() {
		this.titleService.setTitle(this.titleService.getTitle() + ' | Exmaple');
		this.exampleService.getInfo().subscribe(info => {
			this.info = info;
			console.log(info);
		});
	}

	addEvent(eventName: string, eventCategory: string, eventAction: string, eventLabel?: string, eventValue?: number) {
		this.googleAnalyticsEventsService.eventEmmiter(eventName, eventCategory, eventAction, eventLabel, eventValue);
	}

}
