import calendarModule = require("nativescript-telerik-ui/calendar");
import observableModule = require("data/observable");
import frameModule = require("ui/frame");

export class ViewModel extends observableModule.Observable{
		
	constructor(){
		super();
		
		var events : Array<calendarModule.CalendarEvent> = new Array<calendarModule.CalendarEvent>();
		for (var i = 1; i < 10; i++) {
            var now: Date = new Date();
            var startDate: Date = new Date(now.getFullYear(), now.getMonth(), i * 2);
            var endDate: Date = new Date(now.getFullYear(), now.getMonth(), (i * 2) + (i % 3));
			var event = new calendarModule.CalendarEvent("event" + i, startDate, endDate);
			events.push(event);
		}
		
		this.source = events;
	}
	
	set source(value : Array<calendarModule.CalendarEvent>) {
		this.set("eventSource", value);
	}
	
	get source() : Array<calendarModule.CalendarEvent> {
		return <Array<calendarModule.CalendarEvent>>this.get("eventSource");
	}
    
    public onDateSelected(args: calendarModule.CalendarSelectionEventData) {
        var date: Date = args.date;
        var calendar: calendarModule.RadCalendar = <calendarModule.RadCalendar>frameModule.topmost().getViewById("calendar");
        var events: Array<calendarModule.CalendarEvent> = calendar.getEventsForDate(date);        
        this.set("myItems", events);
    }
}