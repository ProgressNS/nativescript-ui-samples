import * as viewModel from "./autocomplete-custom-token-model";

export function onPageLoaded(args) {
    const page = args.object;
    page.bindingContext = new viewModel.ViewModel();
}