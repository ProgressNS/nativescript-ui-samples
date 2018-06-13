import { PersonViewModel } from "./../view-models/person-model";
import { getViewById } from "tns-core-modules/ui/core/view";

let label;

export function onPageLoaded(args) {
    const page = args.object;
    page.bindingContext = new PersonViewModel();

    label = getViewById(page, "myLabel");
    label.text = "LastEvent: NONE";
}

// >> dataform-commit-cancel
export function dfPropertyCommit(args) {
    if (args.propertyName === "name") {
        label.text = "LastEvent: name property commit cancelled";
        args.returnValue = false;
    }
}
// << dataform-commit-cancel

export function dfPropertyCommitted(args) {
    label.text = "LastEvent: " + args.propertyName + " property committed";
}

export function dfGroupExpanded(args) {
    label.text = "LastEvent: " + args.groupName + " group expanded";
}

export function dfGroupCollapsed(args) {
    label.text = "LastEvent: " + args.groupName + " group collapsed";
}