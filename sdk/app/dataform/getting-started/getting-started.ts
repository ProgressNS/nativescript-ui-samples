// >> dataform-getting-started
import viewModel = require("./getting-started-model");
export function onPageLoaded(args) {
    var page = args.object;
    page.bindingContext = new viewModel.ViewModel();
}
// << dataform-getting-started