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
// >> sidedrawer-events-handlers
export function onDrawerClosed(args) {
    drawerCallbacksModel.onDrawerClosed();
    console.log("OnDrawerClosed");
}

export function onDrawerClosing(args) {
    drawerCallbacksModel.onDrawerClosing();
    console.log("OnDrawerClosing");
}

export function onDrawerOpened(args) {
  drawerCallbacksModel.onDrawerOpened();
  console.log("OnDrawerOpened");
}

export function onDrawerOpening(args) {
    drawerCallbacksModel.onDrawerOpening();
    console.log("OnDrawerOpening");
}
// << sidedrawer-events-handlers