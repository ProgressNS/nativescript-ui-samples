var callbacksModelModule = require("./drawer-callbacks-model");
var drawerCallbacksModel;
function onNavigatedTo(args) {
    var page = args.object;
    drawerCallbacksModel = new callbacksModelModule.DrawerCallbacksModel();
    page.bindingContext = drawerCallbacksModel;
}
exports.onNavigatedTo = onNavigatedTo;
function pageLoaded(args) {
}
exports.pageLoaded = pageLoaded;
function onDrawerClosed(args) {
    drawerCallbacksModel.onDrawerClosed();
}
exports.onDrawerClosed = onDrawerClosed;
function onDrawerClosing(args) {
    drawerCallbacksModel.onDrawerClosing();
}
exports.onDrawerClosing = onDrawerClosing;
function onDrawerOpened(args) {
    drawerCallbacksModel.onDrawerOpened();
}
exports.onDrawerOpened = onDrawerOpened;
function onDrawerOpening(args) {
    drawerCallbacksModel.onDrawerClosing();
}
exports.onDrawerOpening = onDrawerOpening;
