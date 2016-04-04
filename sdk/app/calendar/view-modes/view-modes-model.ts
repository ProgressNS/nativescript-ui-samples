import calendarModule = require("nativescript-telerik-ui-pro/calendar");
import observableModule = require("data/observable");
import frameModule = require("ui/frame");

export class ViewModel extends observableModule.Observable{
    private _selectionInfo;
	constructor(){
		super();
        this._selectionInfo = {
            options: ["Week", "Month", "Month names", "Year"],
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
        } else {
             this.viewMode = calendarModule.CalendarViewMode.Year;
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