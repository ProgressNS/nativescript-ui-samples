import * as calendarModule from "nativescript-ui-calendar";
import * as observableModule from "tns-core-modules/data/observable";
import * as frameModule from "tns-core-modules/ui/frame";

export class ViewModel extends observableModule.Observable {
    private _selectionInfo;
    constructor() {
        super();
        this._selectionInfo = {
            options: ["Week", "Month", "Month names", "Year", "Day"],
            index: 1
        };
    }

    set viewMode(value: calendarModule.CalendarViewMode) {
        this.set("ViewMode", value);

    }

    get viewMode(): calendarModule.CalendarViewMode {
        return this.get("ViewMode");
    }

    public setViewMode(viewMode: calendarModule.CalendarViewMode) {
        this.viewMode = viewMode;
    }

    public updateViewMode() {
        let index: number = this._selectionInfo.index;
        if (index === 0) {
            this.viewMode = calendarModule.CalendarViewMode.Week;
        } else if (index === 1) {
            this.viewMode = calendarModule.CalendarViewMode.Month;
        } else if (index === 2) {
            this.viewMode = calendarModule.CalendarViewMode.MonthNames;
        } else if (index === 3) {
            this.viewMode = calendarModule.CalendarViewMode.Year;
        } else {
            this.viewMode = calendarModule.CalendarViewMode.Day;
        }
    }

    public onOptionsTapped() {
        const navigationEntry = {
            moduleName: "navigation/options-menu/options-page",
            context: this._selectionInfo,
            animated: true
        };

        frameModule.topmost().navigate(navigationEntry);
    }
}