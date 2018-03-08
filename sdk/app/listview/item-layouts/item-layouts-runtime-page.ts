import { ViewModel } from "./item-layouts-model";
import { Page } from "tns-core-modules/ui/page";
import { RadListView, ListViewGridLayout, ListViewLinearLayout, ListViewStaggeredLayout } from "nativescript-ui-listview";
import { ios as isIOS } from "application";

let listView: RadListView;

export function onPageLoaded(args) {
    var page = args.object as Page;
    listView = page.getViewById<RadListView>("myListView");
    page.bindingContext = new ViewModel();
}

export function changeToLinear(args) {
    var layout = new ListViewLinearLayout()
    listView.listViewLayout = layout;
}

export function changeToGrid(args) {
    var layout = new ListViewGridLayout()
    if (isIOS) {
        layout.itemHeight = 200;
    }

    layout.spanCount = 2;
    listView.listViewLayout = layout;
}

export function changeToStaggered(args) {
    var layout = new ListViewStaggeredLayout()
    layout.spanCount = 3;
    listView.listViewLayout = layout;
}
