import { ViewModel } from "./item-animations-model";
import { Frame } from "tns-core-modules/ui/frame";
import { RadListView, ListViewLinearLayout, ListViewItemAnimation } from "nativescript-ui-listview";

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
    const listView = <RadListView>Frame.topmost().getViewById("ls");
    (<ListViewLinearLayout>listView.listViewLayout).itemInsertAnimation = ListViewItemAnimation.Default;
    (<ListViewLinearLayout>listView.listViewLayout).itemDeleteAnimation = ListViewItemAnimation.Default;
}

export function onSingleSetSelectionModeTap(args: any) {
    const listView = <RadListView>Frame.topmost().getViewById("ls");
    (<ListViewLinearLayout>listView.listViewLayout).itemInsertAnimation = ListViewItemAnimation.Fade;
    (<ListViewLinearLayout>listView.listViewLayout).itemDeleteAnimation = ListViewItemAnimation.Fade;
}

export function onMultipleSetSelectionModeTap(args: any) {
    const listView = <RadListView>Frame.topmost().getViewById("ls");
    (<ListViewLinearLayout>listView.listViewLayout).itemInsertAnimation = ListViewItemAnimation.Scale;
    (<ListViewLinearLayout>listView.listViewLayout).itemDeleteAnimation = ListViewItemAnimation.Scale;
}

export function onRangeSetSelectionModeTap(args: any) {
    const listView = <RadListView>Frame.topmost().getViewById("ls");
    (<ListViewLinearLayout>listView.listViewLayout).itemInsertAnimation = ListViewItemAnimation.Slide;
    (<ListViewLinearLayout>listView.listViewLayout).itemDeleteAnimation = ListViewItemAnimation.Slide;
}