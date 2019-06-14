import { ViewModel } from "./first-visible-index-model";
import { Page } from "tns-core-modules/ui/page/page";
import { RadListView } from "nativescript-ui-listview";

let myList: RadListView;
let viewModel: ViewModel;

export function onPageLoaded(args) {
    const page = args.object as Page;
    page.bindingContext = viewModel = new ViewModel();
    myList = page.getViewById("myList");

    setTimeout(() => {
        getFirstVisiblePosition();
    }, 100);
}

export function getFirstVisiblePosition() {
    let firstVisibleIndex = myList.getFirstVisiblePosition();
    viewModel.updateFirstVisibleIndex(firstVisibleIndex);
    console.log("First visible index:", firstVisibleIndex);
}