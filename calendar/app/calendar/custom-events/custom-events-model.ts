import { RadCalendar, CalendarEvent, CalendarCellTapEventData } from "nativescript-ui-calendar";
import { Color } from "tns-core-modules/color";
import { Observable } from "tns-core-modules/data/observable";

export class ViewModel extends Observable {
    eventColors = [new Color("#71CBED"), new Color("#689F38"), new Color("#7B1FA2")];
    constructor() {
        super();
        let now = new Date();
        let startDate: Date,
            endDate: Date,
            event: CustomEvent;
        // >> calendar-custom-event-items-ts
        let events: Array<CustomEvent> = new Array<CustomEvent>();
        for (let i = 1; i < 10; i++) {
            startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + i % 2, 12 + i);
            endDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + i % 2, 12 + i, 30);
            let eventLocation = i > 5 ? "at home" : "at the office";
            event = new CustomEvent(i, "event " + i, eventLocation, startDate, endDate, false, this.eventColors[i % 3]);
            events.push(event);
        }
        this.source = events;
        // << calendar-custom-event-items-ts
    }

    set source(value: Array<CustomEvent>) {
        this.set("eventSource", value);
    }

    get source(): Array<CustomEvent> {
        return <Array<CustomEvent>>this.get("eventSource");
    }

    public onCellTap(args: CalendarCellTapEventData) {
        const date: Date = args.date;
        const calendar: RadCalendar = <RadCalendar>args.object;
        const events = calendar.getEventsForDate(date);
        this.set("myItems", events);
    }
}

// >> calendar-custom-event-model-ts
export class CustomEvent extends CalendarEvent {
    id: number;
    location: string;
    formattedTime: string;

    constructor(id: number, title: string, location: string, startDate: Date, endDate: Date, isAllDay?: boolean, eventColor?: Color) {
        super(title, startDate, endDate, isAllDay, eventColor);
        this.id = id;
        this.location = location;
        const hours = startDate.getHours();
        const minutes = startDate.getMinutes();
        this.formattedTime = (hours < 10 ? "0" : "") + hours + ':' + (minutes < 10 ? "0" : "") + minutes;
    }
}
// << calendar-custom-event-model-ts