import * as viewModel from "./options-model";

let viewModelContext: viewModel.ViewModel;

export function  onLoaded(args) {
    const page = args.object;
    viewModelContext = new viewModel.ViewModel(args.object.navigationContext);
    page.bindingContext = viewModelContext;
}
export function onNavigatedTo(args) {
    viewModelContext.selectRow(args.object.navigationContext.index);
}