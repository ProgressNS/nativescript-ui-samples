
import viewModel = require("./item-animations-model");
import listViewModule = require("nativescript-telerik-ui/listview");
import frameModule = require("ui/frame");

var viewModelContext: viewModel.ViewModel;

export function onPageLoaded(args) {
    var page = args.object;
    if (viewModelContext === undefined) {
        viewModelContext = new viewModel.ViewModel();
    }
    page.bindingContext = viewModelContext;
}

export function onNavigatedTo(args) {
    viewModelContext.updateItemAnimation();
}

export function onNavigatedFrom(args) {
    if (args.isBackNavigation === true) {
        viewModelContext = undefined;
    }
}

export function onNoneSetSelectionModeTap(args: any) {
    var listView = <listViewModule.ListView>frameModule.topmost().getViewById("ls");
    listView.listViewLayout.itemInsertAnimation = "Default";
    listView.listViewLayout.itemDeleteAnimation = "Default";
}

export function onSingleSetSelectionModeTap(args: any) {
    var listView = <listViewModule.ListView>frameModule.topmost().getViewById("ls");
    listView.listViewLayout.itemInsertAnimation = "Fade";
    listView.listViewLayout.itemDeleteAnimation = "Fade";
}

export function onMultipleSetSelectionModeTap(args: any) {
    var listView = <listViewModule.ListView>frameModule.topmost().getViewById("ls");
    listView.listViewLayout.itemInsertAnimation = "Scale";
    listView.listViewLayout.itemDeleteAnimation = "Scale";
}

export function onRangeSetSelectionModeTap(args: any) {
    var listView = <listViewModule.ListView>frameModule.topmost().getViewById("ls");
    listView.listViewLayout.itemInsertAnimation = "Slide";
    listView.listViewLayout.itemDeleteAnimation = "Slide";
}