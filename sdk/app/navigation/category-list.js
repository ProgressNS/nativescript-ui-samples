var categoriesViewModel = require("./categories-view-model");
var frameModule = require("ui/frame");
var dataModel = categoriesViewModel.navigationModel;
function pageLoaded(args) {
    if (frameModule.topmost().ios) {
        frameModule.topmost().ios.controller.interactivePopGestureRecognizer.enabled = false;
    }
}
exports.pageLoaded = pageLoaded;
function onPageNavigatingTo(args) {
    var page = args.object;
    dataModel.initModelData();
    page.bindingContext = dataModel;
}
exports.onPageNavigatingTo = onPageNavigatingTo;
function onPageNavigatingFrom(args) {
    args.object.bindingContext = undefined;
    if (args.isBackNavigation && (dataModel.canMoveBack() === true)) {
        dataModel.moveBack();
    }
}
exports.onPageNavigatingFrom = onPageNavigatingFrom;
function onBackTap(args) {
    frameModule.topmost().goBack();
}
exports.onBackTap = onBackTap;
