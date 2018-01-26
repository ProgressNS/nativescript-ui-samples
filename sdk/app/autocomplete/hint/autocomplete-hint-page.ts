import viewModel = require("./autocomplete-hint-model");

export function onPageLoaded(args){
    var page = args.object;

    page.bindingContext = new viewModel.ViewModel(args);
}