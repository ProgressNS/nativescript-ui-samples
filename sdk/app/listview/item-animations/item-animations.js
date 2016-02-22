var viewModel = require("./item-animations-model");
var frameModule = require("ui/frame");
var viewModelContext;
function onPageLoaded(args) {
    var page = args.object;
    if (viewModelContext === undefined) {
        viewModelContext = new viewModel.ViewModel();
    }
    page.bindingContext = viewModelContext;
    viewModelContext.updateItemAnimation();
}
exports.onPageLoaded = onPageLoaded;
function onNavigatedFrom(args) {
    if (args.isBackNavigation === true) {
        viewModelContext = undefined;
    }
}
exports.onNavigatedFrom = onNavigatedFrom;
function onNoneSetSelectionModeTap(args) {
    var listView = frameModule.topmost().getViewById("ls");
    listView.listViewLayout.itemInsertAnimation = "Default";
    listView.listViewLayout.itemDeleteAnimation = "Default";
}
exports.onNoneSetSelectionModeTap = onNoneSetSelectionModeTap;
function onSingleSetSelectionModeTap(args) {
    var listView = frameModule.topmost().getViewById("ls");
    listView.listViewLayout.itemInsertAnimation = "Fade";
    listView.listViewLayout.itemDeleteAnimation = "Fade";
}
exports.onSingleSetSelectionModeTap = onSingleSetSelectionModeTap;
function onMultipleSetSelectionModeTap(args) {
    var listView = frameModule.topmost().getViewById("ls");
    listView.listViewLayout.itemInsertAnimation = "Scale";
    listView.listViewLayout.itemDeleteAnimation = "Scale";
}
exports.onMultipleSetSelectionModeTap = onMultipleSetSelectionModeTap;
function onRangeSetSelectionModeTap(args) {
    var listView = frameModule.topmost().getViewById("ls");
    listView.listViewLayout.itemInsertAnimation = "Slide";
    listView.listViewLayout.itemDeleteAnimation = "Slide";
}
exports.onRangeSetSelectionModeTap = onRangeSetSelectionModeTap;
