import { ViewModel } from "./multiple-with-swipe-model";
import { Page } from "tns-core-modules/ui/page";
import { RadListView, ListViewEventData } from "nativescript-ui-listview";
import { View } from 'tns-core-modules/ui/core/view';
import { EventData } from "tns-core-modules/data/observable";
import { Frame } from "tns-core-modules/ui/frame";
import { Label } from "tns-core-modules/ui/label";

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
    const message = "onSwipeCellStarted item: " + item.itemName;
    console.log(message);
    let lbl = <Label>Frame.topmost().getViewById("lbl");
    lbl.text = message;
}

export function onSwipeCellFinished(args: ListViewEventData) {
    let item = bindingContext.dataItems.getItem(args.index);
    const message = "onSwipeCellFinished item: " + item.itemName;
    console.log(message);
    let lbl = <Label>Frame.topmost().getViewById("lbl");
    lbl.text = message;
}

export function onLeftSwipeClick(args: EventData) {
    let itemView = args.object as View;
    const listView = <RadListView>Frame.topmost().currentPage.getViewById("myListView");
    let itemIndex = listView.items.indexOf(itemView.bindingContext);
    let item = bindingContext.dataItems.getItem(itemIndex);
    const message = "Left swipe click for: " + itemView.bindingContext.itemName;
    console.log(message);
    let lbl = <Label>Frame.topmost().getViewById("lbl");
    lbl.text = message;
    listView.notifySwipeToExecuteFinished();
}

export function onRightSwipeClick(args: EventData) {
    let swipeView = args.object as View;
    const listView = <RadListView>Frame.topmost().currentPage.getViewById("myListView");
    let itemIndex = listView.items.indexOf(swipeView.bindingContext);
    const message = "Right swipe click for: " + swipeView.bindingContext.itemName;
    console.log(message);
    let lbl = <Label>Frame.topmost().getViewById("lbl");
    lbl.text = message;
    // Currently it is not supported to change the items with splice while using data operations.
    // bindingContext.dataItems.splice(bindingContext.dataItems.indexOf(swipeView.bindingContext), 1);
    listView.notifySwipeToExecuteFinished();
}

export function onItemSelected(args: ListViewEventData) {
    let item = bindingContext.dataItems.getItem(args.index);
    const message = "onItemSelected for: " + item.itemName;
    console.log(message);
    let lbl = <Label>Frame.topmost().getViewById("lbl");
    lbl.text = message;
}

export function onItemDeselected(args: ListViewEventData) {
    let item = bindingContext.dataItems.getItem(args.index);
    const message = "onItemDeselected for: " + item.itemName;
    console.log(message);
    let lbl = <Label>Frame.topmost().getViewById("lbl");
    lbl.text = message;
}

export function onItemTap(args: ListViewEventData) {
    console.log("args.index " + args.index);
    let item = bindingContext.dataItems.getItem(args.index);
    const message = "onItemTap for: " + item.itemName;
    console.log(message);
    let lbl = <Label>Frame.topmost().getViewById("lbl");
    lbl.text = message;
}
