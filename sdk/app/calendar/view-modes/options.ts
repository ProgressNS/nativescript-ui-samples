import viewModel = require("./options-model");

var viewModelContext : viewModel.ViewModel;

export function onPageLoaded(args){
    var page = args.object;
    viewModelContext = new viewModel.ViewModel();
    page.bindingContext = viewModelContext;
    viewModelContext.setSelectedOption(args.object.navigationContext);
}