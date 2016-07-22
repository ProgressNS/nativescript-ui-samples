// >> dataform-groups
import viewModel = require("./groups-model");
export function onPageLoaded(args) {
    var page = args.object;
    page.bindingContext = new viewModel.ViewModel();
}
// << dataform-groups