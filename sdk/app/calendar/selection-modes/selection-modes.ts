import viewModel = require("./selection-modes-model");
import calendarModule = require("nativescript-telerik-ui/calendar");

var viewModelContext : viewModel.ViewModel;

export function onPageLoaded(args){
    var page = args.object;
    viewModelContext = new viewModel.ViewModel();
    page.bindingContext = viewModelContext;
}

export function onNoneSetSelectionModeTap(args: any) {
    
    viewModelContext.setSelectionMode(calendarModule.CalendarSelectionMode.None);
}

export function onSingleSetSelectionModeTap(args: any) {
    viewModelContext.setSelectionMode(calendarModule.CalendarSelectionMode.Sengle);
}

export function onMultipleSetSelectionModeTap(args: any) {
    viewModelContext.setSelectionMode(calendarModule.CalendarSelectionMode.Multiple);
}

export function onRangeSetSelectionModeTap(args: any) {
    viewModelContext.setSelectionMode(calendarModule.CalendarSelectionMode.Range);
}