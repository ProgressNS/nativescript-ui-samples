import viewModel = require("./drawer-over-navigation-model");
import actionBarModule = require("ui/action-bar");
import applicationModule = require("application");
import utilsModule = require("utils/utils");
import frameModule = require("ui/frame");

export function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = new viewModel.DrawerOverNavigationModel();
}