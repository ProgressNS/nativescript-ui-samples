import * as viewModel from "./events-view-modes-model";
import * as calendarModule from "nativescript-ui-calendar";

let viewModelContext: viewModel.ViewModel;
export function onPageLoaded(args) {
    const page = args.object;
    if (viewModelContext === undefined) {
        viewModelContext = new viewModel.ViewModel();
    }
    page.bindingContext = viewModelContext;
}

export function onNavigatedTo(args) {
    viewModelContext.updateEventsViewMode();
}

export function onNavigatedFrom(args) {
    if (args.isBackNavigation === true) {
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
