import viewModel = require("./header-footer-model");
export function onPageLoaded(args){
    var page = args.object;
    page.bindingContext = new viewModel.ViewModel();
}