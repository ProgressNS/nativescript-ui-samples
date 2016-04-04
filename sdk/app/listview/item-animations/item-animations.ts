
import viewModel = require("./item-animations-model");
import listViewModule = require("nativescript-telerik-ui-pro/listview");
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
    var listView = <listViewModule.RadListView>frameModule.topmost().getViewById("ls");
    var layout = <listViewModule.ListViewLinearLayout>listView.listViewLayout;
    layout.itemInsertAnimation = "Default";
    layout.itemDeleteAnimation = "Default";
}

export function onSingleSetSelectionModeTap(args: any) {
    var listView = <listViewModule.RadListView>frameModule.topmost().getViewById("ls");
    var layout = <listViewModule.ListViewLinearLayout>listView.listViewLayout;
    layout.itemInsertAnimation = "Fade";
    layout.itemDeleteAnimation = "Fade";
}

export function onMultipleSetSelectionModeTap(args: any) {
    var listView = <listViewModule.RadListView>frameModule.topmost().getViewById("ls");
    var layout = <listViewModule.ListViewLinearLayout>listView.listViewLayout;
    layout.itemInsertAnimation = "Scale";
    layout.itemDeleteAnimation = "Scale";
}

export function onRangeSetSelectionModeTap(args: any) {
    var listView = <listViewModule.RadListView>frameModule.topmost().getViewById("ls");
    var layout = <listViewModule.ListViewLinearLayout>listView.listViewLayout;
    layout.itemInsertAnimation = "Slide";
    layout.itemDeleteAnimation = "Slide";
}