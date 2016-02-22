
import viewModel = require("./listview-selection-model");
var listView;
var lblSelection;
export function onPageLoaded(args) {
    var page = args.object;
    listView = page.getViewById("listView");
    lblSelection = page.getViewById("txtSelection");
    page.bindingContext = new viewModel.ViewModel();
}
