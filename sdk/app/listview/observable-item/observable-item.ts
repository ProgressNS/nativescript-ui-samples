
import viewModel = require("./observable-item-model");

export function onPageLoaded(args){
    var page = args.object;

    page.bindingContext = new viewModel.ViewModel();
}
