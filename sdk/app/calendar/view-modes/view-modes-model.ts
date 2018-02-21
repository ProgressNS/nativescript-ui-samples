import calendarModule = require("nativescript-ui-calendar");
import observableModule = require("tns-core-modules/data/observable");
import frameModule = require("tns-core-modules/ui/frame");

export class ViewModel extends observableModule.Observable{
    private _selectionInfo;
	constructor(){
		super();
        this._selectionInfo = {
            options: ["Week", "Month", "Month names", "Year", "Day"],
            index: 1
        };
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