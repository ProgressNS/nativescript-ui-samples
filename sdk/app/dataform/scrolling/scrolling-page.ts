import viewModel = require("./../view-models/user-model");
import dataFormModule = require("nativescript-ui-dataform");
import dialogs = require("ui/dialogs");

var dataform;

export function onPageLoaded(args) {
    var page = args.object;
    page.bindingContext = new viewModel.UserViewModel();
    dataform = page.getViewById("myDataForm");
}

export function onTap(args) {
    dataform.commitAll();

    dialogs.alert(
        {
            title: "Registration Details",
            message: dataform.source.toString(),
            okButtonText: "OK"
        });
}