
import viewModel = require("./item-loading-model");
var listView;
var lblSelection;
export function onPageLoaded(args) {
    var page = args.object;
    listView = page.getViewById("listView");
    page.bindingContext = new viewModel.ViewModel();
}

// >> listview-item-loading-model
export function onItemLoading(args) {
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
// << listview-item-loading-model