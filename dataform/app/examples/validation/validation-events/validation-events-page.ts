import { UserViewModel } from "./../../view-models/user-model";
import { getViewById } from "tns-core-modules/ui/core/view";

let label;

export function onPageLoaded(args) {
    const page = args.object;
    page.bindingContext = new UserViewModel();

    label = getViewById(page, "myLabel");
}

// >> dataform-property-validate-event
export function dfPropertyValidate(args) {
    let validationResult = true;

    if (args.propertyName === "password2") {
        const dataForm = args.object;
        const password1 = dataForm.getPropertyByName("password");
        const password2 = args.entityProperty;
        if (password1.valueCandidate !== password2.valueCandidate) {
            password2.errorMessage = "Passwords do not match.";
            validationResult = false;
        }
    }

    args.returnValue = validationResult;
}
// << dataform-property-validate-event

export function dfPropertyValidated(args) {
    const propertyName = args.propertyName;
    const validatedValue = args.entityProperty.valueCandidate;
    const validationResult = args.entityProperty.isValid;

    label.text = "Validated!" + "\n" +
        "PropertyName: " + propertyName + "\n" +
        "Value: " + validatedValue + "\n" +
        "Result: " + validationResult;

    if (args.propertyName === "password") {
        const dataForm = args.object;
        const password2 = dataForm.getPropertyByName("password2");
        const password1 = args.entityProperty;
        if (password2.valueCandidate !== "") {
            if (password1.valueCandidate !== password2.valueCandidate) {
                dataForm.notifyValidated("password2", false);
            } else {
                dataForm.notifyValidated("password2", true);
            }
        }
    }
}