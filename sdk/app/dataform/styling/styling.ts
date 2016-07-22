// >> dataform-styling
import viewModel = require("./styling-model");
export function onPageLoaded(args) {
    var page = args.object;
    page.bindingContext = new viewModel.ViewModel();
}
// << dataform-styling