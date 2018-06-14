import * as viewModel from "./autocomplete-readonly-model";

export function onPageLoaded(args) {
    const page = args.object;
    page.bindingContext = new viewModel.ViewModel(args);
}