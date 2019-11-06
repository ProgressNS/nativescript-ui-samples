import { ViewModel } from "./swipe-actions-model";
import { RadListView, ListViewEventData } from "nativescript-ui-listview";
import { View } from 'tns-core-modules/ui/core/view';
import { Frame } from "tns-core-modules/ui/frame";
let bindingContext: ViewModel;

export function onPageLoaded(args) {
    const page = args.object;
    bindingContext = new ViewModel();
    page.bindingContext = bindingContext;
}

export function onCellSwiping(args: ListViewEventData) {
    const swipeLimits = args.data.swipeLimits;
    const currentItemView = args.object;

    if (args.data.x > 200) {
        console.log("Notify perform left action");
    } else if (args.data.x < -200) {
        console.log("Notify perform right action");
    }
}

export function onSwipeCellStarted(args: ListViewEventData) {
    const swipeLimits = args.data.swipeLimits;
    const swipeView = args['object'];
    const leftItem = swipeView.getViewById<View>('mark-view');
    const rightItem = swipeView.getViewById<View>('delete-view');
    swipeLimits.left = leftItem.getMeasuredWidth();
    swipeLimits.right = rightItem.getMeasuredWidth();
    swipeLimits.threshold = leftItem.getMeasuredWidth() / 2;
}

export function onSwipeCellFinished(args: ListViewEventData) {
}

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

export function onDisableEnableTap() {
    bindingContext.enabled = !bindingContext.enabled;
}

export function onItemSwiping(args) {
    args.returnValue = bindingContext.enabled;
}