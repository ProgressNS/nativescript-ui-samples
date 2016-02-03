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
function onPageNavigatingFrom(args) {
    args.object.bindingContext = undefined;
    if (args.isBackNavigation && (dataModel.canMoveBack() === true)) {
        dataModel.moveBack();
    }
}
exports.onPageNavigatingFrom = onPageNavigatingFrom;
