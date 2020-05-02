import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { GoogleAnalyticsEventsService } from './../../services/GoogleAnalyticsEvents/GoogleAnalyticsEvents.service';

@Component({
	selector: 'bk-example',
	templateUrl: './example.component.html',
	styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {

	constructor(private googleAnalyticsEventsService: GoogleAnalyticsEventsService, private titleService: Title) { }

	ngOnInit() {
		this.titleService.setTitle(this.titleService.getTitle() + ' | Exmaple');
	}

	addEvent(eventName: string, eventCategory: string, eventAction: string, eventLabel?: string, eventValue?: number) {
		this.googleAnalyticsEventsService.eventEmmiter(eventName, eventCategory, eventAction, eventLabel, eventValue);
	}

}
