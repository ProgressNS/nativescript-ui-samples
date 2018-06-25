import * as viewModel from "./populating-with-data-model";

let viewModelContext: viewModel.ViewModel;
export function onPageLoaded(args) {
    const page = args.object;
    viewModelContext = new viewModel.ViewModel();
    page.bindingContext = viewModelContext;
}

export function onDateSelected(args) {
    viewModelContext.onDateSelected(args);
}