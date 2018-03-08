
import viewModel = require("./swipe-actions-model");
import listViewModule = require("nativescript-ui-listview");
import viewModule = require('tns-core-modules/ui/core/view');
import frameModule = require("tns-core-modules/ui/frame");
import utilsModule = require("tns-core-modules/utils/utils");

var leftThresholdPassed = false;
var rightThresholdPassed = false;

export function onPageLoaded(args) {
    var page = args.object;

    page.bindingContext = new viewModel.ViewModel();
}

// >> listview-swipe-action-thresholds
export function onCellSwiping(args: listViewModule.SwipeActionsEventData) {
    var swipeLimits = args.data.swipeLimits;
    var swipeView = args.swipeView;
    var mainView = args.mainView;
    var leftItem = swipeView.getViewById<viewModule.View>('mark-view');
    var rightItem = swipeView.getViewById<viewModule.View>('delete-view');

    if (args.data.x > swipeView.getMeasuredWidth() / 4 && !leftThresholdPassed) {
        console.log("Notify perform left action");
        var markLabel = leftItem.getViewById<viewModule.View>('mark-text');
        leftThresholdPassed = true;
    } else if (args.data.x < -swipeView.getMeasuredWidth() / 4 && !rightThresholdPassed) {
        var deleteLabel = rightItem.getViewById<viewModule.View>('delete-text');
        console.log("Notify perform right action");
        rightThresholdPassed = true;
    }
    if (args.data.x > 0) {
        var leftDimensions = viewModule.View.measureChild(
            <viewModule.View>leftItem.parent,
            leftItem,
            utilsModule.layout.makeMeasureSpec(Math.abs(args.data.x), utilsModule.layout.EXACTLY),
            utilsModule.layout.makeMeasureSpec(mainView.getMeasuredHeight(), utilsModule.layout.EXACTLY));
        viewModule.View.layoutChild(<viewModule.View>leftItem.parent, leftItem, 0, 0, leftDimensions.measuredWidth, leftDimensions.measuredHeight);
    } else {
        var rightDimensions = viewModule.View.measureChild(
            <viewModule.View>rightItem.parent,
            rightItem,
            utilsModule.layout.makeMeasureSpec(Math.abs(args.data.x), utilsModule.layout.EXACTLY),
            utilsModule.layout.makeMeasureSpec(mainView.getMeasuredHeight(), utilsModule.layout.EXACTLY));

        viewModule.View.layoutChild(<viewModule.View>rightItem.parent, rightItem, mainView.getMeasuredWidth() - rightDimensions.measuredWidth, 0, mainView.getMeasuredWidth(), rightDimensions.measuredHeight);
    }
}
// << listview-swipe-action-thresholds

// >> listview-swipe-action-thresholds-limits
export function onSwipeCellStarted(args: listViewModule.SwipeActionsEventData) {
    var swipeLimits = args.data.swipeLimits;
    var swipeView = args.swipeView;
    var leftItem = swipeView.getViewById('mark-view');
    var rightItem = swipeView.getViewById('delete-view');
    swipeLimits.left = swipeLimits.right = args.data.x > 0 ? swipeView.getMeasuredWidth() / 2 : swipeView.getMeasuredWidth() / 2;
    swipeLimits.threshold = swipeView.getMeasuredWidth();
}
// << listview-swipe-action-thresholds-limits

// >> listview-swipe-actions-execute
export function onSwipeCellFinished(args: listViewModule.SwipeActionsEventData) {
    var swipeView = args.swipeView;
    var leftItem = swipeView.getViewById('mark-view');
    var rightItem = swipeView.getViewById('delete-view');
    if (leftThresholdPassed) {
        console.log("Perform left action");
    } else if (rightThresholdPassed) {
        console.log("Perform right action");
    }
    leftThresholdPassed = false;
    rightThresholdPassed = false;
}
// << listview-swipe-actions-execute

export function onLeftSwipeClick(args: listViewModule.ListViewEventData) {
    var listView = args.object;
    console.log("Left swipe click");
    listView.notifySwipeToExecuteFinished();
}

export function onRightSwipeClick(args) {
    var listView = args.object;
    console.log("Right swipe click");
    var viewModel: viewModel.ViewModel = <viewModel.ViewModel>listView.bindingContext;
    viewModel.dataItems.splice(viewModel.dataItems.indexOf(args.object.bindingContext), 1);
}