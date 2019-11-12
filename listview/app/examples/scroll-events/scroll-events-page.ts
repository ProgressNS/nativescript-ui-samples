import { ViewModel } from "./scroll-events-model";
import { RadListView, ListViewScrollEventData } from "nativescript-ui-listview";
import { Frame } from "tns-core-modules/ui/frame";
import { Label } from "tns-core-modules/ui/label";

export function onPageLoaded(args) {
    const page = args.object;

    page.bindingContext = new ViewModel();
}

export function onScrolled(args: ListViewScrollEventData) {
    let lblState = <Label>Frame.topmost().getViewById("lblScrollOffset");
    if (lblState) {
        lblState.text = "Scrolled: " + args.scrollOffset;
    }
}

export function onScrollStarted(args: ListViewScrollEventData) {
    let lblState = <Label>Frame.topmost().getViewById("lblState");
    lblState.text = "State: Scroll started with offset: " + args.scrollOffset;
}

export function onScrollEnded(args: ListViewScrollEventData) {
    let lblState = <Label>Frame.topmost().getViewById("lblState");
    lblState.text = "State: Scroll ended with offset: " + args.scrollOffset;
}

export function onScrollDragEnded(args: ListViewScrollEventData) {
    let lblState = <Label>Frame.topmost().getViewById("lblState");
    lblState.text = "State: Scroll drag ended with offset: " + args.scrollOffset;
}