
import viewModel = require("./item-reorder-model");
import listViewModule = require("nativescript-telerik-ui/list-view");

export function onPageLoaded(args){
    var page = args.object;

    page.bindingContext = new viewModel.ViewModel();
}
