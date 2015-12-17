function onPageLoaded(args) {
    var page = args.object;
}
exports.onPageLoaded = onPageLoaded;
function onDateSelected(args) {
    console.log("onDateSelected: " + args.date);
}
exports.onDateSelected = onDateSelected;
function onDateDeselected(args) {
    console.log("onDateDeselected: " + args.date);
}
exports.onDateDeselected = onDateDeselected;
function onNavigatedToDate(args) {
    console.log("onNavigatedToDate: " + args.date);
}
exports.onNavigatedToDate = onNavigatedToDate;
function onNavigatingToDateStarted(args) {
    console.log("onNavigatingToDateStarted: " + args.date);
}
exports.onNavigatingToDateStarted = onNavigatingToDateStarted;
function onViewModeChanged(args) {
    console.log("onViewModeChanged: " + args.newValue);
}
exports.onViewModeChanged = onViewModeChanged;
