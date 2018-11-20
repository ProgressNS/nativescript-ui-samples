import { ViewModel } from "./fixed-size-auto-with-small-source-model";
import { Page } from "tns-core-modules/ui/page";
import { RadListView, ListViewLoadOnDemandMode } from "nativescript-ui-listview";

let listView: RadListView;

export function onPageLoaded(args) {
    const page = args.object as Page;
    listView = page.getViewById<RadListView>("ls");
    page.bindingContext = new ViewModel();
}

export function onChangeAuto() {
    listView.loadOnDemandMode = ListViewLoadOnDemandMode.Auto;
}

export function onChangeNone() {
    listView.loadOnDemandMode = ListViewLoadOnDemandMode.None;
}

export function onChangeManual() {
    listView.loadOnDemandMode = ListViewLoadOnDemandMode.Manual;
}
