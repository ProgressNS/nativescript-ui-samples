var calendar;
function onPageLoaded(args) {
    var page = args.object;
    calendar = page.getViewById("calendar");
}
exports.onPageLoaded = onPageLoaded;
function onNavigateForwardTap(args) {
    calendar.navigateForward();
}
exports.onNavigateForwardTap = onNavigateForwardTap;
function onNavigateBackTap(args) {
    calendar.navigateBack();
}
exports.onNavigateBackTap = onNavigateBackTap;
function onGoToDateTap(args) {
    var date = new Date(2015, 1, 19);
    calendar.goToDate(date);
}
exports.onGoToDateTap = onGoToDateTap;
