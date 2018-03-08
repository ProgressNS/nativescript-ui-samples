import viewModel = require("./view-modes-model");
import calendarModule = require("nativescript-ui-calendar");

var viewModelContext : viewModel.ViewModel;

export function onPageLoaded(args){
    var page = args.object;
    if(viewModelContext === undefined) {
        viewModelContext = new viewModel.ViewModel();
    }
    
    page.bindingContext = viewModelContext;
    viewModelContext.updateViewMode();
}

export function onNavigatedFrom(args) {
    if(args.isBackNavigation === true) {
        viewModelContext = undefined;
    }
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

export function onDaySetViewModeTap(args: any) {
    viewModelContext.setViewMode(calendarModule.CalendarViewMode.Day);
}