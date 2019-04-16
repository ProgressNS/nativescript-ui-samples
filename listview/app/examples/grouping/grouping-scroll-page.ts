import { ViewModel } from "./grouping-scroll-model";
import { RadListView } from "nativescript-ui-listview";
import { Page } from "tns-core-modules/ui/page";
import { EventData } from "tns-core-modules/data/observable";

let page: Page;
let bindingContext: ViewModel;

export function onPageLoaded(args) {
    page = args.object;
    bindingContext = new ViewModel();
    page.bindingContext = bindingContext;
}

export function toggleGrouping(args: EventData) {
    let listView = page.getViewById("myListView") as RadListView;
    if (!listView.groupingFunction) {
        listView.groupingFunction = bindingContext.myGroupingFunc;
        bindingContext.isEnabled = true;
    } else {
        listView.groupingFunction = undefined;
        bindingContext.isEnabled = false;
    }
}

export function scrollTo(args: EventData) {
    let listView = page.getViewById("myListView") as RadListView;
    listView.scrollToIndex(1);
}
