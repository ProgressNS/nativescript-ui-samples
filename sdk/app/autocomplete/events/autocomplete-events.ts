import viewModel = require("./autocomplete-events-model");

export function onPageLoaded(args){
    var page = args.object;

    page.bindingContext = new viewModel.ViewModel(args);
}