
import viewModel = require("./swipe-actions-model");
import listViewModule = require("nativescript-telerik-ui-pro/listview");
import viewModule = require('ui/core/view');
import frameModule = require("ui/frame");
import utilsModule = require("utils/utils");

var animationApplied = false;

export function onPageLoaded(args) {
    var page = args.object;

    page.bindingContext = new viewModel.ViewModel();
}

// >> listview-swipe-action-release-notify
export function onCellSwiping(args: listViewModule.ListViewEventData) {
    var swipeLimits = args.data.swipeLimits;
    var swipeView = args['swipeView'];
    var mainView = args['mainView'];
    var leftItem = swipeView.getViewById('mark-view');
    var rightItem = swipeView.getViewById('delete-view');

    if (args.data.x > args.data.swipeLimits.threshold && !animationApplied) {
        console.log("Notify perform left action");
        leftItem.getViewById('mark-text').animate({
            rotate: 360,
            duration: 1000
        });
        animationApplied = true;
    } else if (args.data.x < -args.data.swipeLimits.threshold && !animationApplied) {
        rightItem.getViewById('delete-text').animate({
            rotate: -360,
            duration: 1000
        });
        animationApplied = true;
    }
    if (args.data.x > 0) {
        var leftDimensions = viewModule.View.measureChild(
            swipeView,
            leftItem,
            utilsModule.layout.makeMeasureSpec(Math.abs(args.data.x), utilsModule.layout.EXACTLY),
            utilsModule.layout.makeMeasureSpec(mainView.getMeasuredHeight(), utilsModule.layout.EXACTLY));
        viewModule.View.layoutChild(swipeView, leftItem, 0, 0, leftDimensions.measuredWidth, leftDimensions.measuredHeight);
       // leftItem.width = leftDimensions.measuredWidth;
    } else {
        var rightDimensions = viewModule.View.measureChild(
            swipeView,
            rightItem,
            utilsModule.layout.makeMeasureSpec(Math.abs(args.data.x), utilsModule.layout.EXACTLY),
            utilsModule.layout.makeMeasureSpec(mainView.getMeasuredHeight(), utilsModule.layout.EXACTLY));
        viewModule.View.layoutChild(swipeView, rightItem, 0, 0, rightDimensions.measuredWidth, rightDimensions.measuredHeight);
       // leftItem.width = rightDimensions.measuredWidth;
    }
}
// << listview-swipe-action-release-notify

// >> listview-swipe-action-release-limits
export function onSwipeCellStarted(args: listViewModule.ListViewEventData) {
    var swipeLimits = args.data.swipeLimits;
    var swipeView = args['object'];
    var leftItem = swipeView.getViewById('mark-view');
    var rightItem = swipeView.getViewById('delete-view');
  //  swipeLimits.left = swipeLimits.right = args.data.x > 0 ? leftItem.getMeasuredWidth() * 2 : rightItem.getMeasuredWidth() * 2;
}
// << listview-swipe-action-release-limits

// >> listview-swipe-action-release-execute
export function onSwipeCellFinished(args: listViewModule.ListViewEventData) {
    if (args.data.x > 200) {
        console.log("Perform left action");
    } else if (args.data.x < -200) {
        console.log("Perform right action");
    }
    animationApplied = false;
}
// << listview-swipe-action-release-execute

// >> listview-swipe-action-handlers
export function onLeftSwipeClick(args: listViewModule.ListViewEventData) {
    var listView = <listViewModule.RadListView>frameModule.topmost().currentPage.getViewById("listView");
    console.log("Left swipe click");
    listView.notifySwipeToExecuteFinished();
}

export function onRightSwipeClick(args) {
    var listView = <listViewModule.RadListView>frameModule.topmost().currentPage.getViewById("listView");
    console.log("Right swipe click");
    var viewModel: viewModel.ViewModel = <viewModel.ViewModel>listView.bindingContext;
    viewModel.dataItems.splice(viewModel.dataItems.indexOf(args.object.bindingContext), 1);
}
// << listview-swipe-action-handlers