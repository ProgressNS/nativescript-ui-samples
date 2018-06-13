import * as drawerPositionModel from "./drawer-position-model";

export function onPageLoaded(args) {
    let page = args.object;
    page.bindingContext = new drawerPositionModel.DrawerPositionModel();
}

