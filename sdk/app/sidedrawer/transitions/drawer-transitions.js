var viewModel = require("./drawer-transitions-model");
function onPageLoaded(args) {
    var page = args.object;
    page.bindingContext = new viewModel.DrawerTransitionsModel();
}
exports.onPageLoaded = onPageLoaded;
