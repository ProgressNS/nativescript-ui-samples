import { ViewModel } from "./multiple-with-swipe-model";
import { Page } from "tns-core-modules/ui/page";
import { RadListView, ListViewEventData } from "nativescript-ui-listview";
import { View } from 'tns-core-modules/ui/core/view';
import { EventData } from "tns-core-modules/data/observable";
import { topmost } from "tns-core-modules/ui/frame";

let page: Page;
let bindingContext: ViewModel;

export function onPageLoaded(args) {
    page = args.object;
    bindingContext = new ViewModel();
    page.bindingContext = bindingContext;
}

export function onCellSwiping(args: ListViewEventData) {
    let item = bindingContext.dataItems.getItem(args.index);
    if (args.data.x > 200) {
        console.log("Notify perform left action on: " + item.itemName);
    } else if (args.data.x < -200) {
        console.log("Notify perform right action on: " + item.itemName);
    }
}

export function onSwipeCellStarted(args: ListViewEventData) {
    const swipeLimits = args.data.swipeLimits;
    const swipeView = args.object;
    const leftItem = swipeView.getViewById<View>('mark-view');
    const rightItem = swipeView.getViewById<View>('delete-view');
    swipeLimits.left = leftItem.getMeasuredWidth();
    swipeLimits.right = rightItem.getMeasuredWidth();
    swipeLimits.threshold = leftItem.getMeasuredWidth() / 2;
    let item = bindingContext.dataItems.getItem(args.index);
    console.log(">>> onSwipeCellStarted item: " + item.itemName);
}

export function onSwipeCellFinished(args: ListViewEventData) {
    let item = bindingContext.dataItems.getItem(args.index);
    console.log(">>> onSwipeCellFinished item: " + item.itemName);
}

export function onLeftSwipeClick(args: EventData) {
    let itemView = args.object as View;
    const listView = <RadListView>topmost().currentPage.getViewById("myListView");
    let itemIndex = listView.items.indexOf(itemView.bindingContext);
    let item = bindingContext.dataItems.getItem(itemIndex);
    console.log("Left swipe click for: " + item.itemName);
    listView.notifySwipeToExecuteFinished();
}

export function onRightSwipeClick(args: EventData) {
    let swipeView = args.object as View;
    const listView = <RadListView>topmost().currentPage.getViewById("myListView");
    let itemIndex = listView.items.indexOf(swipeView.bindingContext);
    console.log("Right swipe click for: " + swipeView.bindingContext.itemName);

    // Currently it is not supported to change the items with splice while using data operations.
    // bindingContext.dataItems.splice(bindingContext.dataItems.indexOf(swipeView.bindingContext), 1);
    listView.notifySwipeToExecuteFinished();
}

export function onItemSelected(args: ListViewEventData) {
    let item = bindingContext.dataItems.getItem(args.index);
    console.log("onItemSelected for: " + item.itemName);
}

export function onItemDeselected(args: ListViewEventData) {
    let item = bindingContext.dataItems.getItem(args.index);
    console.log("onItemDeselected for: " + item.itemName);
}

export function onItemTap(args: ListViewEventData) {
    console.log("args.index " + args.index);
    let item = bindingContext.dataItems.getItem(args.index);
    console.log("onItemTap for: " + item.itemName);
}
