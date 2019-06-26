import { RadCalendar, CalendarSelectionMode, DateRange } from "nativescript-ui-calendar";

let _calendar: RadCalendar;

export function onPageLoaded(args) {
    const page = args.object;
    _calendar = page.getViewById("calendar");
}

// >> calendar-programmatic-selection-ts
export function onSingleSelectionTap(args: any) {
    _calendar.selectionMode = CalendarSelectionMode.Single;
    let selectedDate = dateTomorrow();
    _calendar.selectedDate = selectedDate;
}

export function onMultipleSelectionTap(args: any) {
    _calendar.selectionMode = CalendarSelectionMode.Multiple;
    let firstSelectedDate = dateTomorrow();
    let secondSelectedDate = dateNextWeek();
    _calendar.selectedDates = [firstSelectedDate, secondSelectedDate];
}

export function onRangeSelectionTap(args: any) {
    _calendar.selectionMode = CalendarSelectionMode.Range;
    let firstSelectedDate = dateTomorrow();
    let lastSelectedDate = dateNextWeek();
    _calendar.selectedDateRange = new DateRange(firstSelectedDate, lastSelectedDate);
}

export function onClearSelectionTap(args: any) {
    _calendar.clearSelection();
}
// << calendar-programmatic-selection-ts

function dateTomorrow(): Date {
    let date = new Date();
    date.setDate(date.getDate() + 1);
    return date;
}

function dateNextWeek(): Date {
    let date = new Date();
    date.setDate(date.getDate() + 7);
    return date;
}