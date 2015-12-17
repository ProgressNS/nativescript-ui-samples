import calendarModule = require("nativescript-telerik-ui/calendar");
import observableModule = require("data/observable");

export class ViewModel extends observableModule.Observable{
	constructor(){
		super();
		
		this.selectionMode = calendarModule.CalendarSelectionMode.Week;
	}
	
	set selectionMode(value: calendarModule.CalendarSelectionMode){
		this.set("SelectionMode", value);
		
	}
	
	get selectionMode() : calendarModule.CalendarSelectionMode{
		return this.get("SelectionMode");
	}
	
	public setSelectionMode(selectionMode : string){
		this.selectionMode = selectionMode;
	}
}