// >> data-operations-sorting-context
import { ViewModel } from "./sorting-model";
import { Page } from "tns-core-modules/ui/page";
import { RadListView } from "nativescript-ui-listview";

var page: Page;
var bindingContext: ViewModel;

export function onPageLoaded(args) {
    page = args.object;
    bindingContext = new ViewModel();
    page.bindingContext = bindingContext;
}

export function toggleSorting() {
    var listView = page.getViewById("myListView") as RadListView;
    if (!listView.sortingFunction) {
        listView.sortingFunction = bindingContext.mySortingFunc;
        bindingContext.isEnabled = true;
    } else {
        listView.sortingFunction = undefined;
        bindingContext.isEnabled = false;
    }
}
// << data-operations-sorting-context