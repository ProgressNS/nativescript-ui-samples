import { ViewModel } from "./item-animations-model";
import { topmost } from "tns-core-modules/ui/frame";
import { RadListView, ListViewLinearLayout } from "nativescript-ui-listview";

let viewModelContext: ViewModel;

export function onPageLoaded(args) {
    const page = args.object;
    if (viewModelContext === undefined) {
        viewModelContext = new ViewModel();
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
    const listView = <RadListView>topmost().getViewById("ls");
    (<ListViewLinearLayout>listView.listViewLayout).itemInsertAnimation = "Default";
    (<ListViewLinearLayout>listView.listViewLayout).itemDeleteAnimation = "Default";
}

export function onSingleSetSelectionModeTap(args: any) {
    const listView = <RadListView>topmost().getViewById("ls");
    (<ListViewLinearLayout>listView.listViewLayout).itemInsertAnimation = "Fade";
    (<ListViewLinearLayout>listView.listViewLayout).itemDeleteAnimation = "Fade";
}

export function onMultipleSetSelectionModeTap(args: any) {
    const listView = <RadListView>topmost().getViewById("ls");
    (<ListViewLinearLayout>listView.listViewLayout).itemInsertAnimation = "Scale";
    (<ListViewLinearLayout>listView.listViewLayout).itemDeleteAnimation = "Scale";
}

export function onRangeSetSelectionModeTap(args: any) {
    const listView = <RadListView>topmost().getViewById("ls");
    (<ListViewLinearLayout>listView.listViewLayout).itemInsertAnimation = "Slide";
    (<ListViewLinearLayout>listView.listViewLayout).itemDeleteAnimation = "Slide";
}