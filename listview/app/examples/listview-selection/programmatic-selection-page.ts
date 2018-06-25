
import * as viewModel from './listview-selection-model';
let listView;
let lblSelection;
let txtDeselectItemIndex;
let txtSelectItemIndex;
export function onPageLoaded(args) {
    const page = args.object;
    listView = page.getViewById("listView");
    lblSelection = page.getViewById("txtSelection");
    txtSelectItemIndex = page.getViewById("txtSelectItemIndex");
    txtDeselectItemIndex = page.getViewById("txtDeselectItemIndex");
    page.bindingContext = new viewModel.ViewModel();
}

export function onSelectItemAtTap(args) {
    listView.selectItemAt(Number(txtSelectItemIndex.text));
}

export function onDeselectItemAtTap(args) {
    listView.deselectItemAt(Number(txtDeselectItemIndex.text));
}

export function onSelectAllTap(args) {
    listView.selectAll();
}

export function onDeselectAllTap(args) {
    listView.deselectAll();
}
