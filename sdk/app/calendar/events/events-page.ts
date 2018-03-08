import calendarModule = require("nativescript-ui-calendar");

export function onPageLoaded(args){
    var page = args.object;
}

// >> calendar-handling-events

export function onDateSelected(args: calendarModule.CalendarSelectionEventData) {
    console.log("onDateSelected: " + args.date);
}

export function onDateDeselected(args: calendarModule.CalendarSelectionEventData) {
    console.log("onDateDeselected: " + args.date);
}

export function onNavigatedToDate(args: calendarModule.CalendarNavigationEventData) {
    console.log("onNavigatedToDate: " + args.date);
}

export function onNavigatingToDateStarted(args: any) {
    console.log("onNavigatingToDateStarted: " + args.date);
}

export function onViewModeChanged(args: calendarModule.CalendarViewModeChangedEventData) {
    console.log("onViewModeChanged: " + args.newValue);
}

// << calendar-handling-events