
import viewModel = require("./scroll-events-model");
import listViewModule = require("nativescript-ui-listview");
import frameModule = require("tns-core-modules/ui/frame");
import labelModule = require("tns-core-modules/ui/label");

export function onPageLoaded(args) {
    var page = args.object;

    page.bindingContext = new viewModel.ViewModel();
}

export function onScrolled(args: listViewModule.ListViewScrollEventData) {
    let lblState = <labelModule.Label>frameModule.topmost().getViewById("lblScrollOffset");
    if (lblState) {
        lblState.text = "Scrolled: " + args.scrollOffset;
    }
}

export function onScrollStarted(args: listViewModule.ListViewScrollEventData) {
    let lblState = <labelModule.Label>frameModule.topmost().getViewById("lblState");
    lblState.text = "State: Scroll started with offset: " + args.scrollOffset;
}

export function onScrollEnded(args: listViewModule.ListViewScrollEventData) {
    let lblState = <labelModule.Label>frameModule.topmost().getViewById("lblState");
    lblState.text = "State: Scroll ended with offset: " + args.scrollOffset;
}

export function onScrollDragEnded(args: listViewModule.ListViewScrollEventData) {
    let lblState = <labelModule.Label>frameModule.topmost().getViewById("lblState");
    lblState.text = "State: Scroll drag ended with offset: " + args.scrollOffset;
}