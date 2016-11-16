
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

// >> listview-swipe-action-multiple
export function onCellSwiping(args: listViewModule.ListViewEventData) {
    var swipeLimits = args.data.swipeLimits;
    var swipeView = args['swipeView'];
    var mainView = args['mainView'];
    var leftItem = swipeView.getViewById('left-stack');
    var rightItem = swipeView.getViewById('right-stack');

    if (args.data.x > 0) {
        var leftDimensions = viewModule.View.measureChild(
            leftItem.parent,
            leftItem,
            utilsModule.layout.makeMeasureSpec(Math.abs(args.data.x), utilsModule.layout.EXACTLY),
            utilsModule.layout.makeMeasureSpec(mainView.getMeasuredHeight(), utilsModule.layout.EXACTLY));
        viewModule.View.layoutChild(leftItem.parent, leftItem, 0, 0, leftDimensions.measuredWidth, leftDimensions.measuredHeight);
    } else {
        var rightDimensions = viewModule.View.measureChild(
            rightItem.parent,
            rightItem,
            utilsModule.layout.makeMeasureSpec(Math.abs(args.data.x), utilsModule.layout.EXACTLY),
            utilsModule.layout.makeMeasureSpec(mainView.getMeasuredHeight(), utilsModule.layout.EXACTLY));

        viewModule.View.layoutChild(rightItem.parent, rightItem, mainView.getMeasuredWidth() - rightDimensions.measuredWidth, 0, mainView.getMeasuredWidth(), rightDimensions.measuredHeight);
    }
}
// << listview-swipe-action-multiple

// >> listview-swipe-action-multiple-limits
export function onSwipeCellStarted(args: listViewModule.ListViewEventData) {
    var swipeLimits = args.data.swipeLimits;
    swipeLimits.threshold = args['mainView'].getMeasuredWidth() * 0.2; // 20% of whole width
    swipeLimits.left = swipeLimits.right = args['mainView'].getMeasuredWidth() * 0.7 //70% of whole width
}
// << listview-swipe-action-multiple-limits

export function onSwipeCellFinished(args: listViewModule.ListViewEventData) {
    if (args.data.x > 200) {
        console.log("Perform left action");
    } else if (args.data.x < -200) {
        console.log("Perform right action");
    }
    animationApplied = false;
}

export function onLeftSwipeClick(args: listViewModule.ListViewEventData) {
    var listView = <listViewModule.RadListView>frameModule.topmost().currentPage.getViewById("listView");
    console.log("Button clicked: " + args.object.id + " for item with index: " + listView.items.indexOf(args.object.bindingContext));
    listView.notifySwipeToExecuteFinished();
}

export function onRightSwipeClick(args) {
    var listView = <listViewModule.RadListView>frameModule.topmost().currentPage.getViewById("listView");
    console.log("Button clicked: " + args.object.id + " for item with index: " + listView.items.indexOf(args.object.bindingContext));
    listView.notifySwipeToExecuteFinished();
}