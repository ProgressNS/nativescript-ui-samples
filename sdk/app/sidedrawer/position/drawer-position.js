var drawerPositionModel = require("./drawer-position-model");
function onPageLoaded(args) {
    var page = args.object;
    page.bindingContext = new drawerPositionModel.DrawerPositionModel();
}
exports.onPageLoaded = onPageLoaded;
