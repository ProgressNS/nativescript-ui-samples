import { ViewModel } from "./swipe-actions-model";
import { RadListView, SwipeActionsEventData, ListViewEventData } from "nativescript-ui-listview";
import { View } from 'tns-core-modules/ui/core/view';
import { Frame } from "tns-core-modules/ui/frame";
import { layout } from "tns-core-modules/utils/utils";

let animationApplied = false;
let leftItem: View;
let rightItem: View;
let mainView: View;

export function onPageLoaded(args) {
    const page = args.object;

    page.bindingContext = new ViewModel();
}

// >> listview-swipe-action-multiple
export function onCellSwiping(args: SwipeActionsEventData) {
    const swipeLimits = args.data.swipeLimits;
    const swipeView = args.swipeView;
    mainView = args.mainView;
    leftItem = swipeView.getViewById<View>('left-stack');
    rightItem = swipeView.getViewById<View>('right-stack');

    if (args.data.x > 0) {
        const leftDimensions = View.measureChild(
            <View>leftItem.parent,
            leftItem,
            layout.makeMeasureSpec(Math.abs(args.data.x), layout.EXACTLY),
            layout.makeMeasureSpec(mainView.getMeasuredHeight(), layout.EXACTLY));

        View.layoutChild(<View>leftItem.parent,
            leftItem,
            0, 0,
            leftDimensions.measuredWidth, leftDimensions.measuredHeight);
        hideOtherSwipeTemplateView("left");
    } else {
        const rightDimensions = View.measureChild(
            <View>rightItem.parent,
            rightItem,
            layout.makeMeasureSpec(Math.abs(args.data.x), layout.EXACTLY),
            layout.makeMeasureSpec(mainView.getMeasuredHeight(), layout.EXACTLY));

        View.layoutChild(<View>rightItem.parent,
            rightItem,
            mainView.getMeasuredWidth() - rightDimensions.measuredWidth, 0,
            mainView.getMeasuredWidth(), rightDimensions.measuredHeight);
        hideOtherSwipeTemplateView("right");
    }
}

function hideOtherSwipeTemplateView(currentSwipeView: string) {
    switch (currentSwipeView) {
        case "left":
            if (rightItem.getActualSize().width !== 0) {
                View.layoutChild(<View>rightItem.parent, rightItem, mainView.getMeasuredWidth(), 0, mainView.getMeasuredWidth(), 0);
            }
            break;
        case "right":
            if (leftItem.getActualSize().width !== 0) {
                View.layoutChild(<View>leftItem.parent, leftItem, 0, 0, 0, 0);
            }
            break;
        default:
            break;
    }
}
// << listview-swipe-action-multiple

// >> listview-swipe-action-multiple-limits
export function onSwipeCellStarted(args: SwipeActionsEventData) {
    const swipeLimits = args.data.swipeLimits;
    swipeLimits.threshold = args.mainView.getMeasuredWidth() * 0.2; // 20% of whole width
    swipeLimits.left = swipeLimits.right = args.mainView.getMeasuredWidth() * 0.65; // 65% of whole width
}
// << listview-swipe-action-multiple-limits

export function onSwipeCellFinished(args: SwipeActionsEventData) {
    if (args.data.x > 200) {
        console.log("Perform left action");
    } else if (args.data.x < -200) {
        console.log("Perform right action");
    }
    animationApplied = false;
}

export function onLeftSwipeClick(args: ListViewEventData) {
    const listView = <RadListView>Frame.topmost().currentPage.getViewById("listView");
    console.log("Button clicked: " + args.object.id + " for item with index: " + listView.items.indexOf(args.object.bindingContext));
    listView.notifySwipeToExecuteFinished();
}

export function onRightSwipeClick(args) {
    const listView = <RadListView>Frame.topmost().currentPage.getViewById("listView");
    console.log("Button clicked: " + args.object.id + " for item with index: " + listView.items.indexOf(args.object.bindingContext));
    listView.notifySwipeToExecuteFinished();
}