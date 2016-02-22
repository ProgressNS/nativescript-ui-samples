var viewModel = require("./view-modes-model");
var calendarModule = require("nativescript-telerik-ui/calendar");
var viewModelContext;
function onPageLoaded(args) {
    var page = args.object;
    if (viewModelContext === undefined) {
        viewModelContext = new viewModel.ViewModel();
    }
    page.bindingContext = viewModelContext;
    viewModelContext.updateViewMode();
}
exports.onPageLoaded = onPageLoaded;
function onNavigatedFrom(args) {
    if (args.isBackNavigation === true) {
        viewModelContext = undefined;
    }
}
exports.onNavigatedFrom = onNavigatedFrom;
function onWeekSetViewModeTap(args) {
    viewModelContext.setViewMode(calendarModule.CalendarViewMode.Week);
}
exports.onWeekSetViewModeTap = onWeekSetViewModeTap;
function onMonthSetViewModeTap(args) {
    viewModelContext.setViewMode(calendarModule.CalendarViewMode.Month);
}
exports.onMonthSetViewModeTap = onMonthSetViewModeTap;
function onMonthNamesSetViewModeTap(args) {
    viewModelContext.setViewMode(calendarModule.CalendarViewMode.MonthNames);
}
exports.onMonthNamesSetViewModeTap = onMonthNamesSetViewModeTap;
function onYearSetViewModeTap(args) {
    viewModelContext.setViewMode(calendarModule.CalendarViewMode.Year);
}
exports.onYearSetViewModeTap = onYearSetViewModeTap;
