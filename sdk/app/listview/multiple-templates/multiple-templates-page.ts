// >> listview-multiple-templates-context
import viewModel = require("./multiple-templates-model");
export function onPageLoaded(args){
    var page = args.object;
    page.bindingContext = new viewModel.ViewModel();
}
// << listview-multiple-templates-context