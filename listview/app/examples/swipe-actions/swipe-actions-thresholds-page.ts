import { ViewModel } from "./swipe-actions-model";
import { SwipeActionsEventData, ListViewEventData } from "nativescript-ui-listview";
import { View } from 'tns-core-modules/ui/core/view';
import { layout } from "tns-core-modules/utils/utils";

let leftThresholdPassed = false;
let rightThresholdPassed = false;

export function onPageLoaded(args) {
    const page = args.object;

    page.bindingContext = new ViewModel();
}

// >> listview-swipe-action-thresholds
export function onCellSwiping(args: SwipeActionsEventData) {
    const swipeLimits = args.data.swipeLimits;
    const swipeView = args.swipeView;
    const mainView = args.mainView;
    const leftItem = swipeView.getViewById<View>('mark-view');
    const rightItem = swipeView.getViewById<View>('delete-view');

    if (args.data.x > swipeView.getMeasuredWidth() / 4 && !leftThresholdPassed) {
        console.log("Notify perform left action");
        const markLabel = leftItem.getViewById<View>('mark-text');
        leftThresholdPassed = true;
    } else if (args.data.x < -swipeView.getMeasuredWidth() / 4 && !rightThresholdPassed) {
        const deleteLabel = rightItem.getViewById<View>('delete-text');
        console.log("Notify perform right action");
        rightThresholdPassed = true;
    }
    if (args.data.x > 0) {
        const leftDimensions = View.measureChild(
            <View>leftItem.parent,
            leftItem,
            layout.makeMeasureSpec(Math.abs(args.data.x), layout.EXACTLY),
            layout.makeMeasureSpec(mainView.getMeasuredHeight(), layout.EXACTLY));
        View.layoutChild(
            <View>leftItem.parent,
            leftItem,
            0, 0,
            leftDimensions.measuredWidth, leftDimensions.measuredHeight);
    } else {
        const rightDimensions = View.measureChild(
            <View>rightItem.parent,
            rightItem,
            layout.makeMeasureSpec(Math.abs(args.data.x), layout.EXACTLY),
            layout.makeMeasureSpec(mainView.getMeasuredHeight(), layout.EXACTLY));

        View.layoutChild(
            <View>rightItem.parent,
            rightItem,
            mainView.getMeasuredWidth() - rightDimensions.measuredWidth, 0,
            mainView.getMeasuredWidth(), rightDimensions.measuredHeight);
    }
}
// << listview-swipe-action-thresholds

// >> listview-swipe-action-thresholds-limits
export function onSwipeCellStarted(args: SwipeActionsEventData) {
    const swipeLimits = args.data.swipeLimits;
    const swipeView = args.swipeView;
    const leftItem = swipeView.getViewById('mark-view');
    const rightItem = swipeView.getViewById('delete-view');
    swipeLimits.left = swipeLimits.right = args.data.x > 0 ? swipeView.getMeasuredWidth() / 2 : swipeView.getMeasuredWidth() / 2;
    swipeLimits.threshold = swipeView.getMeasuredWidth();
}
// << listview-swipe-action-thresholds-limits

// >> listview-swipe-actions-execute
export function onSwipeCellFinished(args: SwipeActionsEventData) {
    const swipeView = args.swipeView;
    const leftItem = swipeView.getViewById('mark-view');
    const rightItem = swipeView.getViewById('delete-view');
    if (leftThresholdPassed) {
        console.log("Perform left action");
    } else if (rightThresholdPassed) {
        console.log("Perform right action");
    }
    leftThresholdPassed = false;
    rightThresholdPassed = false;
}
// << listview-swipe-actions-execute

export function onLeftSwipeClick(args: ListViewEventData) {
    const listView = args.object;
    console.log("Left swipe click");
    listView.notifySwipeToExecuteFinished();
}

export function onRightSwipeClick(args) {
    const listView = args.object;
    console.log("Right swipe click");
    const viewModel: ViewModel = <ViewModel>listView.bindingContext;
    viewModel.dataItems.splice(viewModel.dataItems.indexOf(args.object.bindingContext), 1);
}