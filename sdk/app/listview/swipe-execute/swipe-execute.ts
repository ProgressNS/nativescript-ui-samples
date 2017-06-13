
import viewModel = require("./swipe-execute-model");
import listViewModule = require("nativescript-telerik-ui-pro/listview");
import viewModule = require('tns-core-modules/ui/core/view');
import frameModule = require("tns-core-modules/ui/frame");
import utilsModule = require("tns-core-modules/utils/utils");

export function onPageLoaded(args) {
    var page = args.object;

    page.bindingContext = new viewModel.ViewModel();
}

// >> listview-swipe-action-release-notify
export function onCellSwiping(args: listViewModule.SwipeActionsEventData) {
    var swipeLimits = args.data.swipeLimits;
    var currentItemView = args.swipeView;
    var currentView;

    if (args.data.x > 200) {
        console.log("Notify perform left action");
    } else if (args.data.x < -200) {
        console.log("Notify perform right action");
    }
}
// << listview-swipe-action-release-notify

// >> listview-swipe-action-release-limits
export function onSwipeCellStarted(args: listViewModule.SwipeActionsEventData) {
    var swipeLimits = args.data.swipeLimits;
    var listView = args.object;
    swipeLimits.threshold = listView.getMeasuredWidth();
    swipeLimits.left = listView.getMeasuredWidth();
    swipeLimits.right = listView.getMeasuredWidth();
}
// << listview-swipe-action-release-limits

// >> listview-swipe-action-release-execute
export function onSwipeCellFinished(args: listViewModule.SwipeActionsEventData) {
    if (args.data.x > 200) {
        console.log("Perform left action");
    } else if (args.data.x < -200) {
        console.log("Perform right action");
    }
}
// << listview-swipe-action-release-execute

export function onItemClick(args: listViewModule.ListViewEventData) {
    var listView = args.object;
    listView.notifySwipeToExecuteFinished();
    console.log("Item click: " + args.index);
}

export function onLeftSwipeClick(args) {
    console.log("Left swipe click");
}

export function onRightSwipeClick(args) {
    console.log("Right swipe click");
}