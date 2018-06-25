import * as categoriesViewModel from "./categories-view-model";
import * as frameModule from "tns-core-modules/ui/frame";
import * as actionBarModule from "tns-core-modules/ui/action-bar";
import * as applicationModule from "tns-core-modules/application";
import * as utilsModule from "tns-core-modules/utils/utils";

let dataModel = categoriesViewModel.navigationModel;

export function pageLoaded(args) {
    if (frameModule.topmost().android) {
        const page = args.object;
        const actionBar = page.actionBar === undefined ? new actionBarModule.ActionBar() : page.actionBar;
        actionBar.title = dataModel.currentParent.title;
        if (applicationModule.android) {
            const navigationButton = new actionBarModule.NavigationButton();
            navigationButton.on("tap", args => {
                if (page.content) {
                    utilsModule.ad.dismissSoftInput(page.content.android);
                }
                frameModule.topmost().goBack();
            });
            if (dataModel.hasBackNavigation) {
                navigationButton.android.systemIcon = "ic_menu_back";
                actionBar.navigationButton = navigationButton;
            }
        }
        if (page.actionBar !== actionBar) {
            page.actionBar = actionBar;
        }
    }
}

export function onPageNavigatingTo(args) {
    const page = args.object;
    dataModel.initModelData();
    page.bindingContext = dataModel;
}

export function onPageNavigatingFrom(args) {
    if (args.isBackNavigation && (dataModel.canMoveBack() === true)) {
        dataModel.moveBack();
    }
}

export function onBackTap(args) {
    frameModule.topmost().goBack();
}