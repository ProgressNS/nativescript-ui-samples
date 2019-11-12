import { navigationModel } from "./categories-view-model";
import { ActionBar, NavigationButton } from "tns-core-modules/ui/action-bar";
import { android as androidApplication } from "tns-core-modules/application";
import { ad } from "tns-core-modules/utils/utils";
import { Frame } from "tns-core-modules/ui/frame";

const dataModel = navigationModel;
export function pageLoaded(args) {
    if (Frame.topmost().android) {
        const page = args.object;
        const actionBar = page.actionBar === undefined ? new ActionBar() : page.actionBar;
        actionBar.title = dataModel.currentParent.title;
        if (androidApplication) {
            const navigationButton = new NavigationButton();
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
    Frame.topmost().goBack();
}