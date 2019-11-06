import { UserViewModel } from "./../../view-models/user-model";
import { Label } from "tns-core-modules/ui/label";
import { getViewById } from "tns-core-modules/ui/core/view";
import { RadDataForm } from "nativescript-ui-dataform";
import { isAndroid } from "tns-core-modules/platform";

let resultLabel: Label;
let dataForm: RadDataForm;

export function onPageNavigatingTo(args) {
    let viewModel = new UserViewModel();
    const page = args.object;
    page.bindingContext = viewModel;

    resultLabel = <Label>getViewById(page, "resultLabel");
    dataForm = <RadDataForm>getViewById(page, "myDataForm");
}

export function checkErrors() {
    const hasErrors = dataForm.hasValidationErrors();
    resultLabel.text = hasErrors.toString();
    if (isAndroid) {
        resultLabel.android.requestLayout();
    }
}