import viewModel = require("./events-view-modes-model");
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
    viewModelContext.updateEventsViewMode();
}

export function onNavigatedFrom(args) {
    if(args.isBackNavigation === true) {
        viewModelContext = undefined;
    }
}

export function onNoneEventViewModeTapped(args) {
    viewModelContext.eventsMode = calendarModule.CalendarEventsViewMode.None;
}

export function onInlineEventViewModeTapped(args) {
    viewModelContext.eventsMode = calendarModule.CalendarEventsViewMode.Inline;
}

export function onPopoverEventViewModeTapped(args) {
    viewModelContext.eventsMode = calendarModule.CalendarEventsViewMode.Popover;
}
