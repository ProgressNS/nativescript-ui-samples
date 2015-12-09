var viewModel = require("./listview-selection-model");
var listView;
var lblSelection;
function onPageLoaded(args) {
    var page = args.object;
    listView = page.getViewById("listView");
    lblSelection = page.getViewById("txtSelection");
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
