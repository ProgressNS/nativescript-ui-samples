
import * as viewModel from './listview-selection-model';
let listView;
let lblSelection;
export function onPageLoaded(args) {
    const page = args.object;
    listView = page.getViewById("listView");
    lblSelection = page.getViewById("txtSelection");
    lblSelection.text = " ";
    page.bindingContext = new viewModel.ViewModel();
}

export function onItemSelected(args) {

    const selectedItems = listView.getSelectedItems();
    let selectedTitles = "Selected items: ";
    for (let i = 0; i < selectedItems.length; i++) {
        selectedTitles += selectedItems[i].itemName;

        if (i < selectedItems.length - 1) {
            selectedTitles += ", ";
        }
    }

    lblSelection.text = selectedTitles;
}

export function onItemDeselected(args) {

    const selectedItems = listView.getSelectedItems();
    let selectedTitles = "Selected items: ";
    for (let i = 0; i < selectedItems.length; i++) {
        selectedTitles += selectedItems[i].itemName;

        if (i < selectedItems.length - 1) {
            selectedTitles += ", ";
        }
    }

    lblSelection.text = selectedTitles;
}
