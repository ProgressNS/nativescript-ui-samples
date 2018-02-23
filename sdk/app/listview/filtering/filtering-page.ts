// >> data-operations-filtering-context
import { ViewModel } from "./filtering-model";
import { Page } from "tns-core-modules/ui/page";
import { RadListView } from "nativescript-ui-listview";

var page: Page;
var bindingContext: ViewModel;

export function onPageLoaded(args) {
    page = args.object;
    bindingContext = new ViewModel();
    page.bindingContext = bindingContext;
}

export function toggleFilter() {
    var listView = page.getViewById("myListView") as RadListView;
    if (!listView.filteringFunction) {
        listView.filteringFunction = bindingContext.myFilteringFunc;
        bindingContext.isEnabled = true;
    } else {
        listView.filteringFunction = undefined;
        bindingContext.isEnabled = false;
    }
}
// << data-operations-filtering-context