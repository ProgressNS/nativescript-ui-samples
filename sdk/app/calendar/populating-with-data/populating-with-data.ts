import viewModel = require("./populating-with-data-model");

var viewModelContext : viewModel.ViewModel;
export function onPageLoaded(args){
    var page = args.object;
    viewModelContext = new viewModel.ViewModel();
    page.bindingContext = viewModelContext;
}

export function onDateSelected(args) {
    viewModelContext.onDateSelected(args);
}