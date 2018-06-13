import { UserViewModel } from "./../../view-models/user-model";
import { getViewById } from "tns-core-modules/ui/core/view";
import { alert } from "tns-core-modules/ui/dialogs";
import { letterSpacingProperty } from "tns-core-modules/ui/text-base/text-base";

let dataform;
let label;

export function onPageLoaded(args) {
    const page = args.object;
    page.bindingContext = new UserViewModel();

    dataform = getViewById(page, "myDataForm");
    label = getViewById(page, "myLabel");
}

// >> dataform-custom-validation
export function onTap() {
    let isValid = true;

    const p1 = dataform.getPropertyByName("username");
    const p2 = dataform.getPropertyByName("password");

    if (p1.valueCandidate.toLowerCase() !== "admin1") {
        p1.errorMessage = "Use admin1 as username.";
        dataform.notifyValidated("username", false);
        isValid = false;
    } else {
        dataform.notifyValidated("username", true);
    }

    if (p2.valueCandidate.toLowerCase() !== "pass1") {
        p2.errorMessage = "Use pass1 as password.";
        dataform.notifyValidated("password", false);
        isValid = false;
    } else {
        dataform.notifyValidated("password", true);
    }

    if (!isValid) {
        label.text = "Username and Password are not recognized.";
    } else {
        label.text = "";
        dataform.commitAll();

        alert(
            {
                title: "Successful Login",
                message: "Welcome, " + dataform.source.username,
                okButtonText: "OK"
            });

    }
}
// << dataform-custom-validation