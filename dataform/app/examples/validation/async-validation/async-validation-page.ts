import { UserViewModel } from "./../../view-models/user-model";
import { getViewById } from "tns-core-modules/ui/core/view";

let indicator;
let label;
let evenValidation;

export function onPageLoaded(args) {
    const page = args.object;
    page.bindingContext = new UserViewModel();

    indicator = getViewById(page, "myIndicator");
    label = getViewById(page, "myLabel");
    label.text = "Type a username and move to the next field.\n";
    evenValidation = true;
}

// >> dataform-property-validate-async
export function dfPropertyValidate(args) {
    if (args.propertyName === "username") {
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
        });
    }
}
// << dataform-property-validate-async

// >> dataform-property-validated
export function dfPropertyValidated(args) {
    if (args.propertyName === "username") {
        label.text = "Username: " + args.entityProperty.valueCandidate + " was validated.\nResult: " + args.entityProperty.isValid;
    }
}
// << dataform-property-validated