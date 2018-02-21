import calendarModule = require("nativescript-ui-calendar");
import observableModule = require("tns-core-modules/data/observable");
import frameModule = require("tns-core-modules/ui/frame");
import { Color } from "tns-core-modules/color";

export class ViewModel extends observableModule.Observable {

    constructor() {
        super();
        let now = new Date();
        let startDate: Date,
            endDate: Date,
            event: calendarModule.CalendarEvent;
        let colors: Array<Color> = [new Color(200, 188, 26, 214), new Color(220, 255, 109, 130), new Color(255, 55, 45, 255), new Color(199, 17, 227, 10), new Color(255, 255, 54, 3)];
        let events: Array<calendarModule.CalendarEvent> = new Array<calendarModule.CalendarEvent>();
        for (let i = 1; i < 10; i++) {
            startDate = new Date(now.getFullYear(), now.getMonth(), i * 2, 1);
            endDate = new Date(now.getFullYear(), now.getMonth(), (i * 2), 3);
            event = new calendarModule.CalendarEvent("event " + i, startDate, endDate, false, colors[i * 10 % (colors.length - 1)]);
            events.push(event);
            if (i % 3 == 0) {
                event = new calendarModule.CalendarEvent("second " + i, startDate, endDate, true, colors[i * 5 % (colors.length - 1)]);
                events.push(event);
            }
        }
        this.source = events;
    }

    set source(value: Array<calendarModule.CalendarEvent>) {
        this.set("eventSource", value);
    }

    get source(): Array<calendarModule.CalendarEvent> {
        return <Array<calendarModule.CalendarEvent>>this.get("eventSource");
    }

    public onDateSelected(args: calendarModule.CalendarSelectionEventData) {
        var date: Date = args.date;
        var calendar: calendarModule.RadCalendar = <calendarModule.RadCalendar>frameModule.topmost().getViewById("calendar");
        var events: Array<calendarModule.CalendarEvent> = calendar.getEventsForDate(date);
        this.set("myItems", events);
    }
}