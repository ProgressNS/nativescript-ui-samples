import { NavigationViewModel } from "./categories-view-model";
import { Page } from "tns-core-modules/ui/page";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";

export function pageLoaded(args) {
    let dataModel = new NavigationViewModel();
    let page = args.object as Page;
    page.bindingContext = dataModel;
    dataModel.sideDrawer = page.parent.parent as RadSideDrawer;
    dataModel.sideDrawer.drawerContent.bindingContext = page.bindingContext;
}