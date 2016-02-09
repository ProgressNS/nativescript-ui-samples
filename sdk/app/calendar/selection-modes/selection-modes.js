var viewModel = require("./selection-modes-model");
var calendarModule = require("nativescript-telerik-ui/calendar");
var viewModelContext;
function onPageLoaded(args) {
    var page = args.object;
    if (viewModelContext === undefined) {
        viewModelContext = new viewModel.ViewModel();
    }
    page.bindingContext = viewModelContext;
    viewModelContext.updateSelectionMode();
}
exports.onPageLoaded = onPageLoaded;
function onNavigatedFrom(args) {
    if (args.isBackNavigation === true) {
        viewModelContext = undefined;
    }
}
exports.onNavigatedFrom = onNavigatedFrom;
function onNoneSetSelectionModeTap(args) {
    viewModelContext.setSelectionMode(calendarModule.CalendarSelectionMode.None);
}
exports.onNoneSetSelectionModeTap = onNoneSetSelectionModeTap;
function onSingleSetSelectionModeTap(args) {
    viewModelContext.setSelectionMode(calendarModule.CalendarSelectionMode.Single);
}
exports.onSingleSetSelectionModeTap = onSingleSetSelectionModeTap;
function onMultipleSetSelectionModeTap(args) {
    viewModelContext.setSelectionMode(calendarModule.CalendarSelectionMode.Multiple);
}
exports.onMultipleSetSelectionModeTap = onMultipleSetSelectionModeTap;
function onRangeSetSelectionModeTap(args) {
    viewModelContext.setSelectionMode(calendarModule.CalendarSelectionMode.Range);
}
exports.onRangeSetSelectionModeTap = onRangeSetSelectionModeTap;
