// >> data-operations-getting-started-context
import { ViewModel } from "./grouping-model";
import { Page } from "tns-core-modules/ui/page";
import { RadListView } from "nativescript-telerik-ui-pro/listview";

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
    } else {
        listView.filteringFunction = undefined;
    }
}

export function toggleSorting() {
    var listView = page.getViewById("myListView") as RadListView;
    if (!listView.sortingFunction) {
        listView.sortingFunction = bindingContext.mySortingFunc;
    } else {
        listView.sortingFunction = undefined;
    }
}

export function toggleGrouping() {
    var listView = page.getViewById("myListView") as RadListView;
    if (!listView.groupingFunction) {
        listView.groupingFunction = bindingContext.myGroupingFunc;
    } else {
        listView.groupingFunction = undefined;
    }
}
// << data-operations-getting-started-context