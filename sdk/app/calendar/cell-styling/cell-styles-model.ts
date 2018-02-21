import * as calendarModule from "nativescript-ui-calendar";
import { Observable } from "tns-core-modules/data/observable";
import * as frameModule from "tns-core-modules/ui/frame";
import { Color } from "tns-core-modules/color";

export class StylingViewModel extends Observable {

    private _selectionInfo;
    constructor() {
        super();

        this._selectionInfo = {
            options: ["Week", "Month", "Month names", "Year", "Day"],
            index: 1
        };

        let now = new Date();
        let startDate: Date,
            endDate: Date,
            event: calendarModule.CalendarEvent;
        let colors: Array<Color> = [new Color(200, 188, 26, 214), new Color(220, 255, 109, 130), new Color(255, 55, 45, 255), new Color(199, 17, 227, 10), new Color(255, 255, 54, 3)];
        let events: Array<calendarModule.CalendarEvent> = new Array<calendarModule.CalendarEvent>();
        for (let i = 1; i < 10; i++) {
            startDate = new Date(now.getFullYear(), now.getMonth(), i * 2);
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

	set viewMode(value: string){
		this.set("ViewMode", value);
		
	}
	
	get viewMode() : string{
		return this.get("ViewMode");
	}
	
	public setViewMode(viewMode : string){
		this.viewMode = viewMode;
	}

     public updateViewMode() {
        var index: number = this._selectionInfo.index;
        if(index == 0) {
           this.viewMode = calendarModule.CalendarViewMode.Week;
        } else if (index == 1) {
            this.viewMode = calendarModule.CalendarViewMode.Month;
        } else if (index == 2) {
            this.viewMode = calendarModule.CalendarViewMode.MonthNames;
        } else if (index == 3) {
            this.viewMode = calendarModule.CalendarViewMode.Year;
        } else {
            this.viewMode = calendarModule.CalendarViewMode.Day;
        }
    }
    
    public onOptionsTapped() {
        var navigationEntry = {
            moduleName: "./navigation/options-menu/options",
            context: this._selectionInfo,
            animated: true
        };
        
        frameModule.topmost().navigate(navigationEntry);
    }
}