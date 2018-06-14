import * as viewModel from "./autocomplete-customization-model";

export function onPageLoaded(args) {
    const page = args.object;
    page.bindingContext = new viewModel.ViewModel();
}