import { ViewModel } from "./change-size-at-runtime-model";
import { RadListView } from "nativescript-ui-listview";
import { Page } from "tns-core-modules/ui/page";

let listView: RadListView;
let page: Page;

export function onPageLoaded(args) {
    page = args.object;
    listView = page.getViewById<RadListView>("myListView");
    page.bindingContext = new ViewModel(listView);
}

export function tabUpdate(args) {
    (<ViewModel>page.bindingContext).isThirdVisible = true;
    listView.updateHeaderFooter();
}
