// >> listview-first-look-context
import viewModel = require("./getting-started-model");
export function onPageLoaded(args){
    var page = args.object;
    page.bindingContext = new viewModel.ViewModel();
}
// << listview-first-look-context