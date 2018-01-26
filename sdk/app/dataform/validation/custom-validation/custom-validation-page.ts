import viewModel = require("./../../view-models/user-model");
import viewModule = require("tns-core-modules/ui/core/view");
import dialogs = require("tns-core-modules/ui/dialogs");

var dataform;
var label;

export function onPageLoaded(args) {
    var page = args.object;
    page.bindingContext = new viewModel.UserViewModel();

    dataform = viewModule.getViewById(page, "myDataForm");
    label = viewModule.getViewById(page, "myLabel");
}

// >> dataform-custom-validation
export function onTap() {
    var isValid = true;

    var p1 = dataform.getPropertyByName("username");
    var p2 = dataform.getPropertyByName("password");

    if (p1.valueCandidate.toLowerCase() != "admin1") {
        p1.errorMessage = "Use admin1 as username.";
        dataform.notifyValidated("username", false);
        isValid = false;
    } else {
        dataform.notifyValidated("username", true);
    }

    if (p2.valueCandidate.toLowerCase() != "pass1") {
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

        dialogs.alert(
            {
                title: "Successful Login",
                message: "Welcome, " + dataform.source.username,
                okButtonText: "OK"
            });

    }
}
// << dataform-custom-validation