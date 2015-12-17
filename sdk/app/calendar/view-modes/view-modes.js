var viewModel = require("./view-modes-model");
var calendarModule = require("nativescript-telerik-ui/calendar");
var viewModelContext;
function onPageLoaded(args) {
    var page = args.object;
    viewModelContext = new viewModel.ViewModel();
    page.bindingContext = viewModelContext;
}
exports.onPageLoaded = onPageLoaded;
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
