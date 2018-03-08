import viewModel = require("./item-loading-model");
import { Color } from "tns-core-modules/color";
import { Label } from "tns-core-modules/ui/label";
import { ListViewEventData } from 'nativescript-ui-listview';

var listView;
var lblSelection;
export function onPageLoaded(args) {
    var page = args.object;
    listView = page.getViewById("listView");
    page.bindingContext = new viewModel.ViewModel();
}

// >> listview-item-loading-model
export function onItemLoading(args: ListViewEventData) {
    if (args.index % 2 == 0) {
        args.view.backgroundColor = new Color("#b3ecff");
        args.view.getViewById<Label>("nameLabel").fontSize = 24;
        args.view.getViewById<Label>("descLabel").fontSize = 18;
    }
    else {
        args.view.backgroundColor = new Color("#ccf2ff");
        args.view.getViewById<Label>("nameLabel").fontSize = 20;
        args.view.getViewById<Label>("descLabel").fontSize = 14;
    }
}
// << listview-item-loading-model