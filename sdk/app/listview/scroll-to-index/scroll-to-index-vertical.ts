import { ViewModel } from "./scroll-to-index-model-vertical";
import { RadListView } from "nativescript-pro-ui/listview";
import frameModule = require("tns-core-modules/ui/frame");

var viewModelContext: ViewModel;

export function onPageLoaded(args) {
    var page = args.object;
    if (viewModelContext === undefined) {
        viewModelContext = new ViewModel();
    }

    page.bindingContext = viewModelContext;
}

export function onNavigatedTo(args) {
    viewModelContext.updateViewModel();
}

export function onNavigatedFrom(args) {
    if (args.isBackNavigation === true) {
        viewModelContext = undefined;
    }
}

export function onTap() {
    // >> listview-scroll-to-index
    let listView: RadListView = <RadListView>(frameModule.topmost().currentPage.getViewById("listView"));
    
    listView.scrollToIndex(50, false, viewModelContext.get('myScrollPosition'));
    // << listview-scroll-to-index
}