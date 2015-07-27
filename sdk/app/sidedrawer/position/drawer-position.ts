import drawerPositionModel = require("./drawer-position-model");

export function onPageLoaded(args){
    var page = args.object;
    page.bindingContext = new drawerPositionModel.DrawerPositionModel();
}
