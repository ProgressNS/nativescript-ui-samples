import observableModule = require("tns-core-modules/data/observable");
import calendarModule = require("nativescript-ui-calendar");
import frameModule = require("tns-core-modules/ui/frame");

export class ViewModel extends observableModule.Observable {
    calendarEvents: Array<calendarModule.CalendarEvent>;
    private _viewModesInfo;
    private _eventTitles: Array<string> = ["Meeting with Jack", "Lunch with Peter", "Planning meeting",
                                            "Go shopping", "Very important meeting", "Another meeting", "Random event"];
 
    constructor() {
        super();
        this.createEvents();
        this._viewModesInfo = {
            options: ["None", "Inline", "Popover (available on iPad only)"],
            index: 0
        };
    }
    
    get eventsMode() {
        return this.get("eventsViewMode");
    }
    
    set eventsMode(value: string) { 
        this.set("eventsViewMode", value);
    }
    
    public createEvents() {
        let events: Array<calendarModule.CalendarEvent> = new Array<calendarModule.CalendarEvent>();
        let j = 1;
        for (let i = 0; i < this._eventTitles.length; i++) {
            var now: Date = new Date();
            var startDate: Date = new Date(now.getFullYear(), now.getMonth(), j * 2);
            var endDate: Date = new Date(now.getFullYear(), now.getMonth(), (j * 2) + (j % 3));
			var event = new calendarModule.CalendarEvent(this._eventTitles[i], startDate, endDate);
			events.push(event);
            j++;
		}
        this.calendarEvents = events;
    }
    
    public updateEventsViewMode() {
        let radCalendar: calendarModule.RadCalendar = <calendarModule.RadCalendar>(frameModule.topmost().getViewById("calendar"));
        if (!radCalendar.ios) {
            return;
        }
        
        var index: number = this._viewModesInfo.index;
        if(index == 0) {
           this.eventsMode = calendarModule.CalendarEventsViewMode.None;
        } else if (index == 1) {
            this.eventsMode = calendarModule.CalendarEventsViewMode.Inline;
        } else {
            if (UIDevice.currentDevice.userInterfaceIdiom === UIUserInterfaceIdiomPad) {
                this.eventsMode = calendarModule.CalendarEventsViewMode.Popover;
            } else {
                let prevIndex = 0;
                if (this.eventsMode === calendarModule.CalendarEventsViewMode.Inline) {
                    prevIndex = 1;
                }
                
                this._viewModesInfo.index = prevIndex;
            }
        } 
    }
    
    public onOptionsTapped() {
        var navigationEntry = {
            moduleName: "./navigation/options-menu/options",
            context: this._viewModesInfo,
            animated: true
        };
        
        frameModule.topmost().navigate(navigationEntry);
    }
}