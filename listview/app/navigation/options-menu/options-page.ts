import { ViewModel } from "./options-page-model";

let viewModelContext: ViewModel;

export function onLoaded(args) {
    const page = args.object;
    viewModelContext = new ViewModel(args.object.navigationContext);
    page.bindingContext = viewModelContext;
}
export function onNavigatedTo(args) {
    viewModelContext.selectRow(args.object.navigationContext.index);
}