import * as viewModel from "./autocomplete-completion-mode-model";

export function onPageLoaded(args){
    var page = args.object;

    page.bindingContext = new viewModel.ViewModel(args);
}