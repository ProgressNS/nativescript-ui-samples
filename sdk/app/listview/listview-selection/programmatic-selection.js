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
}
exports.onItemDeselected = onItemDeselected;
function onSelectAllTap(args) {
    debugger;
    listView.selectAll();
}
exports.onSelectAllTap = onSelectAllTap;
function onDeselectAllTap(args) {
    listView.deselectAll();
}
exports.onDeselectAllTap = onDeselectAllTap;
