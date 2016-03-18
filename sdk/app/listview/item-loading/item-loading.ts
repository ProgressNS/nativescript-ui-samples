
import viewModel = require("./item-loading-model");
var listView;
var lblSelection;
export function onPageLoaded(args) {
    var page = args.object;
    listView = page.getViewById("listView");
    lblSelection = page.getViewById("txtSelection");
    page.bindingContext = new viewModel.ViewModel();
}

export function onItemSelected(args) {

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

export function onItemDeselected(args) {

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

export function onItemLoading(args) {
    debugger;
    if (args.itemIndex % 2 == 0){
        args.view.backgroundColor="#b3ecff";
        args.view._subViews[0].fontSize="24";
        args.view._subViews[1].fontSize="18";
        
    }
    else {
        args.view.backgroundColor="#ccf2ff";
        args.view._subViews[0].fontSize="20";
        args.view._subViews[1].fontSize="14";
    }
}