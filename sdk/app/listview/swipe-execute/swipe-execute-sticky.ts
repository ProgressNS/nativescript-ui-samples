
import viewModel = require("./swipe-execute-model");
import listViewModule = require("nativescript-telerik-ui-pro/listview");
import viewModule = require('tns-core-modules/ui/core/view');
import frameModule = require("tns-core-modules/ui/frame");
import utilsModule = require("tns-core-modules/utils/utils");

export function onPageLoaded(args) {
    var page = args.object;

    page.bindingContext = new viewModel.ViewModel();
}

// >> listview-swipe-handler-sticky
export function onSwipeCellStarted(args: listViewModule.SwipeActionsEventData) {
    var swipeLimits = args.data.swipeLimits;
    swipeLimits.threshold = 60 * utilsModule.layout.getDisplayDensity();
    swipeLimits.left = 80 * utilsModule.layout.getDisplayDensity();
    swipeLimits.right = 80 * utilsModule.layout.getDisplayDensity();
}
// << listview-swipe-handler-sticky

export function onItemClick(args: listViewModule.SwipeActionsEventData) {
    let listView: listViewModule.RadListView = args.object;
    listView.notifySwipeToExecuteFinished();
}

// >> listview-swipe-action-handler-sticky
export function onLeftSwipeClick(args) {
    var listView = <listViewModule.RadListView>frameModule.topmost().currentPage.getViewById("listView");
    listView.notifySwipeToExecuteFinished();
}

export function onRightSwipeClick(args) {
    var listView = <listViewModule.RadListView>frameModule.topmost().currentPage.getViewById("listView");
    listView.notifySwipeToExecuteFinished();
}
// << listview-swipe-action-handler-sticky