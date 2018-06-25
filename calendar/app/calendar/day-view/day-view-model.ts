import * as observableModule from "tns-core-modules/data/observable";
import * as calendarModule from "nativescript-ui-calendar";
import { Color } from "tns-core-modules/color";

export class ViewModel extends observableModule.Observable {
    calendarEvents: Array<calendarModule.CalendarEvent>;
    private _viewModesInfo;
    private _eventTitles: Array<string> = ["Meeting with Jack", "Lunch with Peter", "Planning meeting",
        "Go shopping", "Very important meeting", "Another meeting"];
    private _eventColors: Array<Color> = [new Color("#0288D1"), new Color("#009688"), new Color("#E040FB")];

    constructor() {
        super();
        this.createEvents();
    }

    public createEvents() {
        let events: Array<calendarModule.CalendarEvent> = new Array<calendarModule.CalendarEvent>();
        const now: Date = new Date();
        const startDate: Date = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const endDate: Date = new Date(now.getFullYear(), now.getMonth(), now.getDate());

        startDate.setHours(9);
        endDate.setHours(10);
        let event = new calendarModule.CalendarEvent(this._eventTitles[0], startDate, endDate, false, this._eventColors[0]);
        events.push(event);

        startDate.setHours(12);
        endDate.setHours(13);
        event = new calendarModule.CalendarEvent(this._eventTitles[1], startDate, endDate, false, this._eventColors[1]);
        events.push(event);

        startDate.setHours(13);
        endDate.setHours(14);
        event = new calendarModule.CalendarEvent(this._eventTitles[2], startDate, endDate, false, this._eventColors[0]);
        events.push(event);

        startDate.setHours(20);
        endDate.setHours(22);
        event = new calendarModule.CalendarEvent(this._eventTitles[3], startDate, endDate, false, this._eventColors[2]);
        events.push(event);

        startDate.setHours(2);
        endDate.setHours(4);
        event = new calendarModule.CalendarEvent(this._eventTitles[4], startDate, endDate, false, this._eventColors[0]);
        events.push(event);

        startDate.setHours(16);
        endDate.setHours(17);
        event = new calendarModule.CalendarEvent(this._eventTitles[5], startDate, endDate, false, this._eventColors[0]);
        events.push(event);

        this.calendarEvents = events;
    }
}