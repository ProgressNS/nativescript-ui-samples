import calendarModule = require("nativescript-telerik-ui/calendar");
import observableModule = require("data/observable");

export class ViewModel extends observableModule.Observable{
		
	constructor(){
		super();
		
		var events : Array<calendarModule.CalendarEvent> = new Array<calendarModule.CalendarEvent>();
		for (var i = 1; i < 10; i++) {
			
			var event = new calendarModule.CalendarEvent("event" + i, new Date(2015, 11, i * 2), new Date(2015, 11, (i * 2) + (i % 3), 1));
			
			events.push(event);
			
		}
		
		this.source = events;
	}
	
	set source(value : Array<calendarModule.CalendarEvent>) {
		this.set("Source", value);
	}
	
	get source() : Array<calendarModule.CalendarEvent> {
		return <Array<calendarModule.CalendarEvent>>this.get("Source");
	}
}