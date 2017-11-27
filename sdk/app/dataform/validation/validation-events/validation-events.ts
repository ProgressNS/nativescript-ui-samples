import viewModel = require("./../../view-models/user-model");
import viewModule = require("tns-core-modules/ui/core/view");

var label;

export function onPageLoaded(args) {
    var page = args.object;
    page.bindingContext = new viewModel.UserViewModel();

    label = viewModule.getViewById(page, "myLabel");
}

// >> dataform-property-validate-event
export function dfPropertyValidate(args) {
    var validationResult = true;

    if (args.propertyName == "password2") {
        var dataForm = args.object;
        var password1 = dataForm.getPropertyByName("password");
        var password2 = args.entityProperty;
        if (password1.valueCandidate != password2.valueCandidate) {
            password2.errorMessage = "Passwords do not match.";
            validationResult = false;
        }
    }

    args.returnValue = validationResult;
}
// << dataform-property-validate-event

export function dfPropertyValidated(args) {
    var propertyName = args.propertyName;
    var validatedValue = args.entityProperty.valueCandidate;
    var validationResult = args.entityProperty.isValid;

    label.text = "Validated!" + "\n" +
        "PropertyName: " + propertyName + "\n" +
        "Value: " + validatedValue + "\n" +
        "Result: " + validationResult;

    if (args.propertyName == "password") {
        var dataForm = args.object;
        var password2 = dataForm.getPropertyByName("password2");
        var password1 = args.entityProperty;
        if (password2.valueCandidate != "") {
            if (password1.valueCandidate != password2.valueCandidate) {
                dataForm.notifyValidated("password2", false);
            } else {
                dataForm.notifyValidated("password2", true);
            }
        }
    }
}