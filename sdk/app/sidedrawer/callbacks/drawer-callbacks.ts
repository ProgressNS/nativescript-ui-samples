import callbacksModelModule = require("./drawer-callbacks-model");
import frameModule = require("tns-core-modules/ui/frame");

var drawerCallbacksModel : callbacksModelModule.DrawerCallbacksModel;

export function onNavigatedTo(args) {
    var page = args.object;
    drawerCallbacksModel = new callbacksModelModule.DrawerCallbacksModel();
    page.bindingContext = drawerCallbacksModel;
}

export function pageLoaded(args) {

}
// >> sidedrawer-events-handlers
export function onDrawerClosed(args) {
    drawerCallbacksModel.onDrawerClosed();
}

export function onDrawerClosing(args) {
    drawerCallbacksModel.onDrawerClosing();
}

export function onDrawerOpened(args) {
  drawerCallbacksModel.onDrawerOpened();
}

export function onDrawerOpening(args) {
    drawerCallbacksModel.onDrawerOpening();
}

export function onDrawerPan(args) {
    drawerCallbacksModel.onDrawerPan();
}
// << sidedrawer-events-handlers