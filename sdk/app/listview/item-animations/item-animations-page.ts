
import viewModel = require("./item-animations-model");
import listViewModule = require("nativescript-ui-listview");
import frameModule = require("tns-core-modules/ui/frame");

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
    (<listViewModule.ListViewLinearLayout>listView.listViewLayout).itemInsertAnimation = "Default";
    (<listViewModule.ListViewLinearLayout>listView.listViewLayout).itemDeleteAnimation = "Default";
}

export function onSingleSetSelectionModeTap(args: any) {
    var listView = <listViewModule.RadListView>frameModule.topmost().getViewById("ls");
    (<listViewModule.ListViewLinearLayout>listView.listViewLayout).itemInsertAnimation = "Fade";
    (<listViewModule.ListViewLinearLayout>listView.listViewLayout).itemDeleteAnimation = "Fade";
}

export function onMultipleSetSelectionModeTap(args: any) {
    var listView = <listViewModule.RadListView>frameModule.topmost().getViewById("ls");
    (<listViewModule.ListViewLinearLayout>listView.listViewLayout).itemInsertAnimation = "Scale";
    (<listViewModule.ListViewLinearLayout>listView.listViewLayout).itemDeleteAnimation = "Scale";
}

export function onRangeSetSelectionModeTap(args: any) {
    var listView = <listViewModule.RadListView>frameModule.topmost().getViewById("ls");
    (<listViewModule.ListViewLinearLayout>listView.listViewLayout).itemInsertAnimation = "Slide";
    (<listViewModule.ListViewLinearLayout>listView.listViewLayout).itemDeleteAnimation = "Slide";
}