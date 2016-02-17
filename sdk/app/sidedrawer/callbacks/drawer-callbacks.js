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
    console.log("OnDrawerClosed");
}
exports.onDrawerClosed = onDrawerClosed;
function onDrawerClosing(args) {
    drawerCallbacksModel.onDrawerClosing();
    console.log("OnDrawerClosing");
}
exports.onDrawerClosing = onDrawerClosing;
function onDrawerOpened(args) {
    drawerCallbacksModel.onDrawerOpened();
    console.log("OnDrawerOpened");
}
exports.onDrawerOpened = onDrawerOpened;
function onDrawerOpening(args) {
    drawerCallbacksModel.onDrawerOpening();
    console.log("OnDrawerOpening");
}
exports.onDrawerOpening = onDrawerOpening;
