import callbacksModelModule = require("./drawer-callbacks-model");
import frameModule = require("ui/frame");

export function onNavigatedTo(args) {
    var page = args.object;
    var drawerCallbacksModel = new callbacksModelModule.DrawerCallbacksModel();
    page.bindingContext = drawerCallbacksModel;
    var drawer = frameModule.topmost().getViewById("sideDrawer");
    drawer.delegate = drawerCallbacksModel;
}
