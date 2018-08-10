import * as drawerPositionModel from "./drawer-shadow-model";

export function onPageLoaded(args) {
    let page = args.object;
    page.bindingContext = new drawerPositionModel.DrawerShadowModel();
}

