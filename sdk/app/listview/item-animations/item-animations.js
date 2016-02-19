var viewModel = require("./item-animations-model");
var viewModelContext;
function onPageLoaded(args) {
    var page = args.object;
    if (viewModelContext === undefined) {
        viewModelContext = new viewModel.ViewModel();
    }
    page.bindingContext = new viewModel.ViewModel();
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
    debugger;
}
exports.onNoneSetSelectionModeTap = onNoneSetSelectionModeTap;
