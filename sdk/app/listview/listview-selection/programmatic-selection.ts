
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

export function onSelectItemAtTap(args){
    listView.selectItemAt(Number(txtSelectItemIndex.text));
}

export function onDeselectItemAtTap(args){
    listView.deselectItemAt(Number(txtDeselectItemIndex.text));
}

export function onSelectAllTap(args) {
    listView.selectAll();
}

export function onDeselectAllTap(args) {
    listView.deselectAll();
}
