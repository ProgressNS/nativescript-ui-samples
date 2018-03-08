import viewModel = require("./transition-modes-model");
import calendarModule = require("nativescript-ui-calendar");

var viewModelContext : viewModel.ViewModel;

export function onPageLoaded(args){
    var page = args.object;
    if(viewModelContext === undefined) {
        viewModelContext = new viewModel.ViewModel();
    }
    
    page.bindingContext = viewModelContext;
    viewModelContext.updateTransitionMode();
}

export function onNoneTransitionModeTapped() {
    viewModelContext.calendarTransition = calendarModule.CalendarTransitionMode.None;
}

export function  onSlideTransitionModeTapped() {
    viewModelContext.calendarTransition = calendarModule.CalendarTransitionMode.Slide;
}

export function  onStackTransitionModeTapped() {
    viewModelContext.calendarTransition = calendarModule.CalendarTransitionMode.Stack;
}

export function  onPlainTransitionModeTapped() {
    viewModelContext.calendarTransition = calendarModule.CalendarTransitionMode.Plain;
}

export function  onFreeTransitionModeTapped() {
    viewModelContext.calendarTransition = calendarModule.CalendarTransitionMode.Free;
}

export function  onComboTransitionModeTapped() {
    viewModelContext.calendarTransition = calendarModule.CalendarTransitionMode.Combo;
}

export function  onOverlapTransitionModeTapped() {
    viewModelContext.calendarTransition = calendarModule.CalendarTransitionMode.Overlap;
}