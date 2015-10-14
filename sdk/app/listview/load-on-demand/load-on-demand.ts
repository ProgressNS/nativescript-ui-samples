
import viewModel = require("./load-on-demand-model");
import listViewModule = require("nativescript-telerik-ui/list-view");

export function onPageLoaded(args){
    var page = args.object;

    page.bindingContext = new viewModel.ViewModel();
}
