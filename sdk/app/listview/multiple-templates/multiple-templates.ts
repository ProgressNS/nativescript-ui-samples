import viewModel = require("./multiple-templates-model");
export function onPageLoaded(args){
    var page = args.object;
    page.bindingContext = new viewModel.ViewModel();
}