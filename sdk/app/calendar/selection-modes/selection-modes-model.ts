import calendarModule = require("nativescript-telerik-ui-pro/calendar");
import observableModule = require("data/observable");
import frameModule = require("ui/frame");

export class ViewModel extends observableModule.Observable{
    private _selectionInfo;
	constructor(){
		super();
        this._selectionInfo = {
            options: ["None", "Single", "Multiple", "Range"],
            index: 0
        };
	}
    
	set selectionMode(value: string){
		this.set("SelectionMode", value);
	}
	
	get selectionMode() : string{
		return this.get("SelectionMode");
	}
	
	public setSelectionMode(selectionMode : string){
		this.selectionMode = selectionMode;
	}
    
     public updateSelectionMode() {
        var index: number = this._selectionInfo.index;
        if(index == 0) {
           this.selectionMode = calendarModule.CalendarSelectionMode.None;
        } else if (index == 1) {
            this.selectionMode = calendarModule.CalendarSelectionMode.Single;
        } else if (index == 2) {
            this.selectionMode = calendarModule.CalendarSelectionMode.Multiple;
        } else {
             this.selectionMode = calendarModule.CalendarSelectionMode.Range;
        }
        this.resetSelection();
    }
    
    public resetSelection() {
        var calendar: calendarModule.RadCalendar = <calendarModule.RadCalendar>(frameModule.topmost().getViewById("calendar"));
        if (!calendar) {
            return;
        }
        calendar.reload();
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