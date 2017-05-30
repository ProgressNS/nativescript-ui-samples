import viewModel = require("./drawer-over-navigation-model");
import actionBarModule = require("tns-core-modules/ui/action-bar");
import applicationModule = require("tns-core-modules/application");
import utilsModule = require("tns-core-modules/utils/utils");
import frameModule = require("tns-core-modules/ui/frame");

export function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = new viewModel.DrawerOverNavigationModel();
}