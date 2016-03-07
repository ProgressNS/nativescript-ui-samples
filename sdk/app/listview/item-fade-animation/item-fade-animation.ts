
import viewModel = require("./item-fade-animation-model");
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

export function onNavigatedFrom(args) {
    if (args.isBackNavigation === true) {
        viewModelContext = undefined;
    }
}
