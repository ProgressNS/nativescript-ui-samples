import * as viewModel from "./custom-events-model";

let viewModelContext: viewModel.ViewModel;
export function onPageLoaded(args) {
    const page = args.object;
    viewModelContext = new viewModel.ViewModel();
    page.bindingContext = viewModelContext;
}

export function onCellTap(args) {
    viewModelContext.onCellTap(args);
}