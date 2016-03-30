import viewModel = require("./events-source-model");

var viewModelContext : viewModel.ViewModel;
export function onPageLoaded(args){
    var page = args.object;
    if(viewModelContext === undefined) {
        viewModelContext = new viewModel.ViewModel();
    }

    page.bindingContext = viewModelContext;
    
}