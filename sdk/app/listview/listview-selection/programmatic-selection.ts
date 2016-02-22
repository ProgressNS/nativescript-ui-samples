
import viewModel = require("./listview-selection-model");
var listView;
var lblSelection;
var txtDeselectItemIndex;
var txtSelectItemIndex;
export function onPageLoaded(args) {
    var page = args.object;
    listView = page.getViewById("listView");
    lblSelection = page.getViewById("txtSelection");
    txtSelectItemIndex = page.getViewById("txtSelectItemIndex");
    txtDeselectItemIndex = page.getViewById("txtDeselectItemIndex");
    page.bindingContext = new viewModel.ViewModel();
}

export function onItemSelected(args) {

    // var selectedItems = listView.getSelectedItems();
    // var selectedTitles = "Selected items: ";
    // for (var i = 0; i < selectedItems.length; i++) {
    //     selectedTitles += selectedItems[i].itemName;

    //     if (i < selectedItems.length - 1) {
    //         selectedTitles += ", ";
    //     }
    // }

    // lblSelection.text = selectedTitles;
}

export function onSelectItemAtTap(args){
    listView.selectItemAt(Number(txtSelectItemIndex.text));
}

export function onDeselectItemAtTap(args){
    listView.deselectItemAt(Number(txtDeselectItemIndex.text));
}

export function onItemDeselected(args) {

    // var selectedItems = listView.getSelectedItems();
    // var selectedTitles = "Selected items: ";
    // for (var i = 0; i < selectedItems.length; i++) {
    //     selectedTitles += selectedItems[i].itemName;

    //     if (i < selectedItems.length - 1) {
    //         selectedTitles += ", ";
    //     }
    // }

    // lblSelection.text = selectedTitles;
}

export function onSelectAllTap(args) {
    debugger;
    listView.selectAll();
}

export function onDeselectAllTap(args) {
    listView.deselectAll();
}
