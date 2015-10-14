var viewModel = require("./item-layouts-model");
function onPageLoaded(args) {
    var page = args.object;
    page.bindingContext = new viewModel.ViewModel();
}
exports.onPageLoaded = onPageLoaded;
