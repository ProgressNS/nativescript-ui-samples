var callbacksModelModule = require("./drawer-callbacks-model");
var frameModule = require("ui/frame");
function onNavigatedTo(args) {
    var page = args.object;
    var drawerCallbacksModel = new callbacksModelModule.DrawerCallbacksModel();
    page.bindingContext = drawerCallbacksModel;
    var drawer = frameModule.topmost().getViewById("sideDrawer");
    drawer.delegate = drawerCallbacksModel;
}
exports.onNavigatedTo = onNavigatedTo;
