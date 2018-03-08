import viewModel = require("./../load-on-demand-model");
import listViewModule = require("nativescript-ui-listview");
import frameModule = require("tns-core-modules/ui/frame");

var viewModelContext: viewModel.ViewModel;

export function onPageLoaded(args) {
    var page = args.object;
    page.bindingContext = new viewModel.ViewModel();
}