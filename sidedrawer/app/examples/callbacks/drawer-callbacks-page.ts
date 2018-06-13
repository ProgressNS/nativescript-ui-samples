import { DrawerCallbacksModel } from "./drawer-callbacks-model";
import { DrawerStateChangingEventArgs, DrawerStateChangedEventArgs } from 'nativescript-ui-sidedrawer';

let drawerCallbacksModel: DrawerCallbacksModel;

export function onNavigatedTo(args) {
    let page = args.object;
    drawerCallbacksModel = new DrawerCallbacksModel();
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