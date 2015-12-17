import calendarModule = require("nativescript-telerik-ui/calendar");
import observableModule = require("data/observable");

export class ViewModel extends observableModule.Observable{
	constructor(){
		super();
		
		this.viewMode = calendarModule.CalendarViewMode.Week;
	}
	
	set viewMode(value: calendarModule.CalendarViewMode){
		this.set("ViewMode", value);
		
	}
	
	get viewMode() : calendarModule.CalendarViewMode{
		return this.get("ViewMode");
	}
	
	public setViewMode(viewMode : string){
		this.viewMode = viewMode;
	}
}