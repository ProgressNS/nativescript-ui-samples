
import viewModel = require("./item-animations-model");
import listViewModule = require("nativescript-telerik-ui/listview");

var viewModelContext : viewModel.ViewModel;

export function onPageLoaded(args){
    var page = args.object;
     if(viewModelContext === undefined) {
        viewModelContext = new viewModel.ViewModel();
    }

    page.bindingContext = new viewModel.ViewModel();
    viewModelContext.updateItemAnimation();
}

export function onNavigatedFrom(args) {
    if(args.isBackNavigation === true) {
        viewModelContext = undefined;
    }
}

export function onNoneSetSelectionModeTap(args){
    debugger;
}