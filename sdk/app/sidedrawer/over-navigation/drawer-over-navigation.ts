import viewModel = require("./drawer-over-navigation-model");

export function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = new viewModel.DrawerOverNavigationModel();
}