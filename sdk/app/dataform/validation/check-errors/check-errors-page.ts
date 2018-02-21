import viewModel = require("./../../view-models/user-model");
import { Label } from "tns-core-modules/ui/label";
import * as viewModule from "tns-core-modules/ui/core/view";
import { RadDataForm } from "nativescript-ui-dataform";
import { isAndroid } from "tns-core-modules/platform"

var resultLabel: Label;
var dataForm: RadDataForm;

export function onPageLoaded(args) {
    var page = args.object;
    page.bindingContext = new viewModel.UserViewModel();

    resultLabel = <Label>viewModule.getViewById(page, "resultLabel");
    dataForm = <RadDataForm>viewModule.getViewById(page, "myDataForm");
}

export function checkErrors() {
    var hasErrors = dataForm.hasValidationErrors();
    resultLabel.text = hasErrors.toString();
    if (isAndroid) {
        resultLabel.android.requestLayout();
    }
}