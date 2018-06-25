import * as viewModel from "./selection-modes-model";
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
    viewModelContext.updateSelectionMode();
}

export function onNavigatedFrom(args) {
    if (args.isBackNavigation === true) {
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