// >> listview-first-look-context
import viewModel = require("./getting-started-model");
import listViewModule = require("nativescript-telerik-ui/list-view");

export function onPageLoaded(args){
    var page = args.object;
    page.bindingContext = new viewModel.ViewModel();
}
// << listview-first-look-context