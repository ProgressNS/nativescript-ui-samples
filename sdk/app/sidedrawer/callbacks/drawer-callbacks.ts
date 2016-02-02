import callbacksModelModule = require("./drawer-callbacks-model");
import frameModule = require("ui/frame");

var drawerCallbacksModel : callbacksModelModule.DrawerCallbacksModel;

export function onNavigatedTo(args) {
    var page = args.object;
    drawerCallbacksModel = new callbacksModelModule.DrawerCallbacksModel();
    page.bindingContext = drawerCallbacksModel;
}

export function pageLoaded(args) {

}

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
