import viewModel = require("./../view-models/person-model");
import viewModule = require("ui/core/view");
import dialogs = require("ui/dialogs");

var label;

export function onPageLoaded(args) {
    var page = args.object;
    page.bindingContext = new viewModel.PersonViewModel();

    label = viewModule.getViewById(page, "myLabel");
    label.text = "LastEvent: NONE";
}

// >> dataform-commit-cancel
export function dfPropertyCommit(args) {
    if (args.propertyName == "name") {
        label.text = "LastEvent: name property commit cancelled";
        args.returnValue = false;
    }
}
// << dataform-commit-cancel

export function dfPropertyCommitted(args) {
    label.text = "LastEvent: " + args.propertyName + " property committed";
}

export function dfGroupExpanded(args) {
    label.text = "LastEvent: " + args.groupName + " group expanded";
}

export function dfGroupCollapsed(args) {
    label.text = "LastEvent: " + args.groupName + " group collapsed";
}