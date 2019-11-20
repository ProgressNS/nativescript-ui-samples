import { UserViewModel } from "./../view-models/user-model";
import { alert } from "tns-core-modules/ui/dialogs";

let dataform;

export function onPageNavigatingTo(args) {
    let viewModel = new UserViewModel();
    const page = args.object;
    page.bindingContext = viewModel;
    dataform = page.getViewById("myDataForm");
}

export function onTap(args) {
    dataform.commitAll();

    alert(
        {
            title: "Registration Details",
            message: dataform.source.toString(),
            okButtonText: "OK"
        });
}