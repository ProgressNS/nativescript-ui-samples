import * as viewModel from "./events-source-model";

let viewModelContext: viewModel.ViewModel;
export function onPageLoaded(args) {
    const page = args.object;
    if (viewModelContext === undefined) {
        viewModelContext = new viewModel.ViewModel();
    }

    page.bindingContext = viewModelContext;
}