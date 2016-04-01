
import viewModel = require("./swipe-execute-model");
import listViewModule = require("nativescript-telerik-ui-pro/listview");
import viewModule = require('ui/core/view');
import frameModule = require("ui/frame");
import utilsModule = require("utils/utils");

export function onPageLoaded(args) {
    var page = args.object;

    page.bindingContext = new viewModel.ViewModel();
}

export function onSwipeCellStarted(args: listViewModule.ListViewEventData) {
    var swipeLimits = args.data.swipeLimits;
    var listView = frameModule.topmost().currentPage.getViewById("listView");
    swipeLimits.threshold = listView.getMeasuredWidth();
    swipeLimits.left = listView.getMeasuredWidth();
    swipeLimits.right = listView.getMeasuredWidth();
}

// >> listview-swipe-stretch-view
export function onCellSwiping(args: listViewModule.ListViewEventData) {
    var swipeLimits = args.data.swipeLimits;
    var currentItemView = args.object;
    var currentView;
    if (args.data.x >= 0) {
        currentView = currentItemView.getViewById("mark-view");
        var dimensions = viewModule.View.measureChild(
            currentView.parent,
            currentView, 
            utilsModule.layout.makeMeasureSpec(args.data.x, utilsModule.layout.EXACTLY),
            utilsModule.layout.makeMeasureSpec(currentView.getMeasuredHeight(), utilsModule.layout.EXACTLY));
        viewModule.View.layoutChild(currentView.parent, currentView, 0, 0, dimensions.measuredWidth, dimensions.measuredHeight);
    } else {
        currentView = currentItemView.getViewById("delete-view");
        var dimensions = viewModule.View.measureChild(
            currentView.parent,
            currentView,
            utilsModule.layout.makeMeasureSpec(Math.abs(args.data.x), utilsModule.layout.EXACTLY),
            utilsModule.layout.makeMeasureSpec(currentView.getMeasuredHeight(), utilsModule.layout.EXACTLY));
        viewModule.View.layoutChild(currentView.parent, currentView, currentItemView.getMeasuredWidth() - dimensions.measuredWidth, 0, currentItemView.getMeasuredWidth(), dimensions.measuredHeight);
    }

    if (args.data.x > 200) {
        console.log("Notify perform left action");
    } else if (args.data.x < -200) {
        console.log("Notify perform right action");
    }
}
// << listview-swipe-stretch-view

export function onSwipeCellFinished(args: listViewModule.ListViewEventData) {
    if (args.data.x < 0) {
        var currentItemView = args.object;
        var deleteView = currentItemView.getViewById("delete-view");
        var dimensions = viewModule.View.measureChild(
            deleteView.parent,
            deleteView,
            utilsModule.layout.makeMeasureSpec(Math.abs(args.data.x), utilsModule.layout.EXACTLY),
            utilsModule.layout.makeMeasureSpec(deleteView.getMeasuredHeight(), utilsModule.layout.EXACTLY));
        viewModule.View.layoutChild(deleteView.parent, deleteView, currentItemView.getMeasuredWidth(), 0, currentItemView.getMeasuredWidth(), dimensions.measuredHeight);
    }
    
    if (args.data.x > 200) {
        console.log("Perform left action");
    } else if (args.data.x < -200) {
        console.log("Perform right action");
    }
}