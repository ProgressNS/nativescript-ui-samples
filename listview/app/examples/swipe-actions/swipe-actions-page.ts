import { ViewModel, DataItem } from "./swipe-actions-model";
import { RadListView, SwipeActionsEventData, ListViewEventData } from "nativescript-ui-listview";
import { View } from 'tns-core-modules/ui/core/view';
import { Label } from 'tns-core-modules/ui/label';
import { Frame } from "tns-core-modules/ui/frame";

export function onPageLoaded(args) {
    const page = args.object;

    page.bindingContext = new ViewModel();
}

export function onItemSwiping(args: SwipeActionsEventData) {
}

// >> listview-swipe-action-release-notify
export function onSwipeCellProgressChanged(args: SwipeActionsEventData) {
    const swipeLimits = args.data.swipeLimits;
    const currentItemView = args.object;

    if (args.data.x > 200) {
        console.log("Notify perform left action");
    } else if (args.data.x < -200) {
        console.log("Notify perform right action");
    }
}
// << listview-swipe-action-release-notify

// >> listview-swipe-action-release-limits
export function onSwipeCellStarted(args: SwipeActionsEventData) {
    const swipeLimits = args.data.swipeLimits;
    const swipeView = args.object;
    const leftItem = swipeView.getViewById<View>('mark-view');
    const rightItem = swipeView.getViewById<View>('delete-view');
    swipeLimits.left = leftItem.getMeasuredWidth();
    swipeLimits.right = rightItem.getMeasuredWidth();
    swipeLimits.threshold = leftItem.getMeasuredWidth() / 2;
}
// << listview-swipe-action-release-limits

// >> listview-swipe-action-release-execute
export function onSwipeCellFinished(args: SwipeActionsEventData) {
}
// << listview-swipe-action-release-execute

// >> listview-swipe-action-handlers
export function onLeftSwipeClick(args: ListViewEventData) {
    const listView = <RadListView>Frame.topmost().currentPage.getViewById("listView");
    console.log("Left swipe click");
    listView.notifySwipeToExecuteFinished();
}

export function onRightSwipeClick(args) {
    const listView = <RadListView>Frame.topmost().currentPage.getViewById("listView");
    console.log("Right swipe click");
    const viewModel: ViewModel = <ViewModel>listView.bindingContext;
    viewModel.dataItems.splice(viewModel.dataItems.indexOf(args.object.bindingContext), 1);
}
// << listview-swipe-action-handlers

export function onLayoutTap(args) {
    const message = "Tap on Layout for item: " + (<DataItem>args.object.bindingContext).name;
    console.log(message);
    const listView = <RadListView>Frame.topmost().currentPage.getViewById("listView");
    listView.notifySwipeToExecuteFinished();
    let lbl = <Label>Frame.topmost().getViewById("lbl");
    lbl.text += " \n" + message;
}

export function onLabelTap(args) {
    const message = "Tap on Title: " + (<Label>args.object).text;
    console.log(message);
    let lbl = <Label>Frame.topmost().getViewById("lbl");
    lbl.text = message;
}