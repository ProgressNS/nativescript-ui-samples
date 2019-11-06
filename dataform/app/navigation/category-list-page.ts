import { navigationModel } from "./categories-view-model";
import { Frame } from "tns-core-modules/ui/frame";
import { ActionBar, NavigationButton } from "tns-core-modules/ui/action-bar";
import { android as androidApplication } from "tns-core-modules/application";
import { ad } from "tns-core-modules/utils/utils";

let dataModel = navigationModel;

export function pageLoaded(args) {
    if (Frame.topmost().android) {
        let page = args.object;
        let actionBar = page.actionBar === undefined ? new ActionBar() : page.actionBar;
        actionBar.title = dataModel.currentParent.title;
        if (androidApplication) {
            let navigationButton = new NavigationButton();
            navigationButton.on("tap", args => {
                if (page.content) {
                    ad.dismissSoftInput(page.content.android);
                }
                Frame.topmost().goBack();
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
    let page = args.object;
    dataModel.initModelData();

    page.bindingContext = dataModel;
}

export function onPageNavigatingFrom(args) {
    if (args.isBackNavigation && (dataModel.canMoveBack() === true)) {
        dataModel.moveBack();
    }
}

export function onBackTap(args) {
    Frame.topmost().goBack();
}