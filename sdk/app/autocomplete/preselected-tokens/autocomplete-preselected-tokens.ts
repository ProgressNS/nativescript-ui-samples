import viewModel = require("./autocomplete-preselected-tokens-model");

export function onPageLoaded(args){
    var page = args.object;

    page.bindingContext = new viewModel.ViewModel(args);
}