var viewModel = require("./listview-selection-model");
var listView;
var lblSelection;
var txtDeselectItemIndex;
var txtSelectItemIndex;
function onPageLoaded(args) {
    var page = args.object;
    listView = page.getViewById("listView");
    lblSelection = page.getViewById("txtSelection");
    txtSelectItemIndex = page.getViewById("txtSelectItemIndex");
    txtDeselectItemIndex = page.getViewById("txtDeselectItemIndex");
    page.bindingContext = new viewModel.ViewModel();
}
exports.onPageLoaded = onPageLoaded;
function onItemSelected(args) {
    var selectedItems = listView.getSelectedItems();
    var selectedTitles = "Selected items: ";
    for (var i = 0; i < selectedItems.length; i++) {
        selectedTitles += selectedItems[i].itemName;
        if (i < selectedItems.length - 1) {
            selectedTitles += ", ";
        }
    }
    lblSelection.text = selectedTitles;
}
exports.onItemSelected = onItemSelected;
function onSelectItemAtTap(args) {
    listView.selectItemAt(Number(txtSelectItemIndex.text));
}
exports.onSelectItemAtTap = onSelectItemAtTap;
function onDeselectItemAtTap(args) {
    listView.deselectItemAt(Number(txtDeselectItemIndex.text));
}
exports.onDeselectItemAtTap = onDeselectItemAtTap;
function onItemDeselected(args) {
    var selectedItems = listView.getSelectedItems();
    var selectedTitles = "Selected items: ";
    for (var i = 0; i < selectedItems.length; i++) {
        selectedTitles += selectedItems[i].itemName;
        if (i < selectedItems.length - 1) {
            selectedTitles += ", ";
        }
    }
    lblSelection.text = selectedTitles;
}
exports.onItemDeselected = onItemDeselected;
function onSelectAllTap(args) {
    listView.selectAll();
}
exports.onSelectAllTap = onSelectAllTap;
function onDeselectAllTap(args) {
    listView.deselectAll();
}
exports.onDeselectAllTap = onDeselectAllTap;
