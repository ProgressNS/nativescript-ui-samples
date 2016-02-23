var categoriesViewModel = require("./categories-view-model");
var frameModule = require("ui/frame");
var dataModel = categoriesViewModel.navigationModel;
function pageLoaded(args) {
    var page = args.object;
    dataModel.initModelData();
    if (frameModule.topmost().ios) {
        frameModule.topmost().ios.controller.interactivePopGestureRecognizer.enabled = false;
    }
    page.bindingContext = dataModel;
}
exports.pageLoaded = pageLoaded;
function onPageNavigatingTo(args) {
    args.object.bindingContext = undefined;
    if (args.isBackNavigation && (dataModel.canMoveBack() === true)) {
        dataModel.moveBack();
    }
}
exports.onPageNavigatingTo = onPageNavigatingTo;
function onPageNavigatingFrom(args) {
}
exports.onPageNavigatingFrom = onPageNavigatingFrom;
function onBackTap(args) {
    frameModule.topmost().goBack();
}
exports.onBackTap = onBackTap;
