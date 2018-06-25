import * as calendarModule from "nativescript-ui-calendar";

let calendar: calendarModule.RadCalendar;

export function onPageLoaded(args) {
    const page = args.object;
    calendar = page.getViewById("calendar");
}

export function onNavigateForwardTap(args: any) {
    calendar.navigateForward();
}

export function onNavigateBackTap(args: any) {
    calendar.navigateBack();
}

export function onGoToDateTap(args: any) {
    const date = new Date();
    calendar.goToDate(date);
}