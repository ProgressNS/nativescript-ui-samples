import viewModel = require("../drawer-over-navigation-model");
import actionBarModule = require("tns-core-modules/ui/action-bar");
import applicationModule = require("tns-core-modules/application");
import utilsModule = require("tns-core-modules/utils/utils");
import frameModule = require("tns-core-modules/ui/frame");

export function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = new viewModel.DrawerOverNavigationModel();

    var actionBar = page.actionBar === undefined ? new actionBarModule.ActionBar() : page.actionBar;
    actionBar.title = "Inner Page";
    if (applicationModule.android) {
        var navigationButton = new actionBarModule.NavigationButton();
        navigationButton.on("tap", args => {
            if (page.content) {
                utilsModule.ad.dismissSoftInput(page.content.android);
            }
            frameModule.topmost().goBack();
        });
        navigationButton.icon = "res://ic_arrow_back_black_24dp";
        actionBar.navigationButton = navigationButton;

    }
    if (page.actionBar !== actionBar) {
        page.actionBar = actionBar;
    }
}