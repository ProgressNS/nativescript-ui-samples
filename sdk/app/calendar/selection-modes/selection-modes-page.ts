import viewModel = require("./selection-modes-model");
import calendarModule = require("nativescript-ui-calendar");

var viewModelContext : viewModel.ViewModel;

export function onPageLoaded(args){
    var page = args.object;
    if(viewModelContext === undefined) {
        viewModelContext = new viewModel.ViewModel();
    }
    
    page.bindingContext = viewModelContext;
}

export function onNavigatedTo(args) {
    viewModelContext.updateSelectionMode();
}

export function onNavigatedFrom(args) {
    if(args.isBackNavigation === true) {
        viewModelContext = undefined;
    }
}

export function onNoneSetSelectionModeTap(args: any) {
    viewModelContext.setSelectionMode(calendarModule.CalendarSelectionMode.None);
}

export function onSingleSetSelectionModeTap(args: any) {
    viewModelContext.setSelectionMode(calendarModule.CalendarSelectionMode.Single);
}

export function onMultipleSetSelectionModeTap(args: any) {
    viewModelContext.setSelectionMode(calendarModule.CalendarSelectionMode.Multiple);
}

export function onRangeSetSelectionModeTap(args: any) {
    viewModelContext.setSelectionMode(calendarModule.CalendarSelectionMode.Range);
}