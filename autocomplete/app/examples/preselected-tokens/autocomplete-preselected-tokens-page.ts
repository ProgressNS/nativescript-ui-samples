import * as viewModel from "./autocomplete-preselected-tokens-model";

export function onPageLoaded(args) {
    const page = args.object;
    page.bindingContext = new viewModel.ViewModel(args);
}