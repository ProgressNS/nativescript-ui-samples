import categoriesViewModel = require("./categories-view-model");
import frameModule = require("tns-core-modules/ui/frame");
import actionBarModule = require("tns-core-modules/ui/action-bar");
import applicationModule = require("tns-core-modules/application");
import utilsModule = require("tns-core-modules/utils/utils");

var dataModel = categoriesViewModel.navigationModel;

export function pageLoaded(args) {
    if (frameModule.topmost().android) {
        var page = args.object;
        var actionBar = page.actionBar === undefined ? new actionBarModule.ActionBar() : page.actionBar;
        actionBar.title = dataModel.currentParent.title;
        if (applicationModule.android) {
            var navigationButton = new actionBarModule.NavigationButton();
            navigationButton.on("tap", args => {
                if (page.content) {
                    utilsModule.ad.dismissSoftInput(page.content.android);
                }
                frameModule.topmost().goBack();
            });
            if (dataModel.hasBackNavigation) {
                navigationButton.icon = "res://ic_arrow_back_black_24dp";
                actionBar.navigationButton = navigationButton;
            }
        }
        
        if (page.actionBar !== actionBar) {
            page.actionBar = actionBar;
        }
    }
}

export function onPageNavigatingTo(args) {
    var page = args.object;
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