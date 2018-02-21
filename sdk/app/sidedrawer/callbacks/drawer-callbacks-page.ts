import callbacksModelModule = require("./drawer-callbacks-model");
import frameModule = require("tns-core-modules/ui/frame");
import { DrawerStateChangingEventArgs, DrawerStateChangedEventArgs } from 'nativescript-ui-sidedrawer';

var drawerCallbacksModel : callbacksModelModule.DrawerCallbacksModel;

export function onNavigatedTo(args) {
    var page = args.object;
    drawerCallbacksModel = new callbacksModelModule.DrawerCallbacksModel();
    page.bindingContext = drawerCallbacksModel;
}

export function pageLoaded(args) {

}
// >> sidedrawer-events-handlers
export function onDrawerClosed(args: DrawerStateChangedEventArgs) {
    drawerCallbacksModel.onDrawerClosed(args);
}

export function onDrawerClosing(args: DrawerStateChangingEventArgs) {
    drawerCallbacksModel.onDrawerClosing(args);
}

export function onDrawerOpened(args: DrawerStateChangedEventArgs) {
  drawerCallbacksModel.onDrawerOpened(args);
}

export function onDrawerOpening(args: DrawerStateChangingEventArgs) {
    drawerCallbacksModel.onDrawerOpening(args);
}

export function onDrawerPan(args: DrawerStateChangedEventArgs) {
    drawerCallbacksModel.onDrawerPan(args);
}
// << sidedrawer-events-handlers