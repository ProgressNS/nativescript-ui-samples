import viewModel = require("./drawer-over-navigation-model");
import actionBarModule = require("ui/action-bar");
import applicationModule = require("application");
import utilsModule = require("utils/utils");
import frameModule = require("ui/frame");

export function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = new viewModel.DrawerOverNavigationModel();

    var actionBar = page.actionBar === undefined ? new actionBarModule.ActionBar() : page.actionBar;
    actionBar.title = "Drawer Over Navigation";
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