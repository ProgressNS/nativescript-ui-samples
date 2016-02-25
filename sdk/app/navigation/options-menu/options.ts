import viewModel = require("./options-model");

var viewModelContext : viewModel.ViewModel;

export function  onLoaded(args) {
    var page = args.object;
    viewModelContext = new viewModel.ViewModel(args.object.navigationContext);
    page.bindingContext = viewModelContext;
}
export function onNavigatedTo(args){
    viewModelContext.selectRow(args.object.navigationContext.index);
}