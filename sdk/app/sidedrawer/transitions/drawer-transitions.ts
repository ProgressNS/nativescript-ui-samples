import viewModel = require("./drawer-transitions-model");

export function onPageLoaded(args){
    var page = args.object;
    page.bindingContext = new viewModel.DrawerTransitionsModel();
}
