import viewModel = require("./view-modes-model");
import calendarModule = require("nativescript-telerik-ui/calendar");

var viewModelContext : viewModel.ViewModel;

export function onPageLoaded(args){
    var page = args.object;
    viewModelContext = new viewModel.ViewModel();
    page.bindingContext = viewModelContext;
}

export function onWeekSetViewModeTap(args: any) {
    
    viewModelContext.setViewMode(calendarModule.CalendarViewMode.Week);
}

export function onMonthSetViewModeTap(args: any) {
    viewModelContext.setViewMode(calendarModule.CalendarViewMode.Month);
}

export function onMonthNamesSetViewModeTap(args: any) {
    viewModelContext.setViewMode(calendarModule.CalendarViewMode.MonthNames);
}

export function onYearSetViewModeTap(args: any) {
    viewModelContext.setViewMode(calendarModule.CalendarViewMode.Year);
}