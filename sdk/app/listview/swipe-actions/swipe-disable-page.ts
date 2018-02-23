import viewModel = require("./swipe-actions-model");
import listViewModule = require("nativescript-ui-listview");
import viewModule = require('tns-core-modules/ui/core/view');
import frameModule = require("tns-core-modules/ui/frame");
import utilsModule = require("tns-core-modules/utils/utils");
var bindingContext: viewModel.ViewModel;

export function onPageLoaded(args) {
    var page = args.object;
    bindingContext = new viewModel.ViewModel();
    page.bindingContext = bindingContext;
}

export function onCellSwiping(args: listViewModule.ListViewEventData) {
    var swipeLimits = args.data.swipeLimits;
    var currentItemView = args.object;
    var currentView;

    if (args.data.x > 200) {
        console.log("Notify perform left action");
    } else if (args.data.x < -200) {
        console.log("Notify perform right action");
    }
}

export function onSwipeCellStarted(args: listViewModule.ListViewEventData) {
    var swipeLimits = args.data.swipeLimits;
    var swipeView = args['object'];
    var leftItem = swipeView.getViewById<viewModule.View>('mark-view');
    var rightItem = swipeView.getViewById<viewModule.View>('delete-view');
    swipeLimits.left = leftItem.getMeasuredWidth();
    swipeLimits.right = rightItem.getMeasuredWidth();
    swipeLimits.threshold = leftItem.getMeasuredWidth() / 2;
}

export function onSwipeCellFinished(args: listViewModule.ListViewEventData) {
}

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

export function onDisableEnableTap() {
    bindingContext.enabled = !bindingContext.enabled;
}

export function onItemSwiping(args) {
    args.returnValue = bindingContext.enabled;
}