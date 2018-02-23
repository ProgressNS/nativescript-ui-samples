import calendarModule = require("nativescript-ui-calendar");

var calendar : calendarModule.RadCalendar;

export function onPageLoaded(args){
    var page = args.object;
     calendar = page.getViewById("calendar");
}

export function onNavigateForwardTap(args: any) {
    calendar.navigateForward();
}

export function onNavigateBackTap(args: any) {
    calendar.navigateBack();
}

export function onGoToDateTap(args: any) {
    var date = new Date();
    calendar.goToDate(date);
}