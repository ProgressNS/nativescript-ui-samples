import viewModel = require("./../../view-models/user-model");
import viewModule = require("tns-core-modules/ui/core/view");

var indicator;
var label;
var evenValidation;

export function onPageLoaded(args) {
    var page = args.object;
    page.bindingContext = new viewModel.UserViewModel();

    indicator = viewModule.getViewById(page, "myIndicator");
    label = viewModule.getViewById(page, "myLabel");
    label.text = "Type a username and move to the next field.\n";
    evenValidation = true;
}

// >> dataform-property-validate-async
export function dfPropertyValidate(args) {
    if (args.propertyName == "username") {
        label.text = "Validating the username: " + args.entityProperty.valueCandidate + "\n";
        indicator.busy = true;
        args.returnValue = new Promise<Boolean>(resolve => {
            setTimeout(() => {
                if (evenValidation) {
                    args.entityProperty.errorMessage = "This username is already used.";
                    resolve(false);
                } else {
                    resolve(true);
                }
                indicator.busy = false;
                evenValidation = !evenValidation;
            }, 1500);
        })
    }
}
// << dataform-property-validate-async

// >> dataform-property-validated
export function dfPropertyValidated(args) {
    if (args.propertyName == "username") {
        label.text = "Username: " + args.entityProperty.valueCandidate + " was validated.\nResult: " + args.entityProperty.isValid;
    }
}
// << dataform-property-validated