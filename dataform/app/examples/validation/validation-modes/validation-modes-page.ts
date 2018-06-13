import { UserViewModel } from "./../../view-models/user-model";
import { SegmentedBar, SegmentedBarItem, SelectedIndexChangedEventData } from "tns-core-modules/ui/segmented-bar";
import { getViewById } from "tns-core-modules/ui/core/view";
import { ValidationMode } from "nativescript-ui-dataform";

let dataform;
let button;
let label;

export function onPageLoaded(args) {
    const page = args.object;
    page.bindingContext = new UserViewModel();

    dataform = getViewById(page, "myDataForm");
    button = getViewById(page, "myButton");
    label = getViewById(page, "myLabel");

    const segmentedBar = <SegmentedBar>getViewById(page, "mySegmentedBar");
    const items = [];
    const item1 = new SegmentedBarItem();
    item1.title = "immediate";
    items.push(item1);
    const item2 = new SegmentedBarItem();
    item2.title = "lost focus";
    items.push(item2);
    const item3 = new SegmentedBarItem();
    item3.title = "manual";
    items.push(item3);
    segmentedBar.items = items;
    segmentedBar.on(SegmentedBar.selectedIndexChangedEvent, function (eventData: SelectedIndexChangedEventData) {
        switch (eventData.newIndex) {
            case 0:
                dataform.validationMode = ValidationMode.Immediate;
                button.isEnabled = false;
                break;
            case 1:
                dataform.validationMode = ValidationMode.OnLostFocus;
                button.isEnabled = false;
                break;
            case 2:
                dataform.validationMode = ValidationMode.Manual;
                button.isEnabled = true;
                break;
        }
    }, this);
}

export function onTap(args) {
// >> dataform-validate-all
    dataform.validateAll()
        .then(result => {
            updateTextWithResult(result);
        });
// << dataform-validate-all
}

export function updateTextWithResult(validationResult) {
    const validatedValue = "username: " + dataform.getPropertyByName("username").valueCandidate +
        " password: " + dataform.getPropertyByName("password").valueCandidate +
        " email: " + dataform.getPropertyByName("email").valueCandidate;

    label.text = "Validated!" + "\n" +
        "PropertyName: " + "ALL" + "\n" +
        "Value: " + validatedValue + "\n" +
        "Result: " + validationResult;
}


export function updateText(propertyName, validatedValue, validationResult) {
    label.text = "Validated!" + "\n" +
        "PropertyName: " + propertyName + "\n" +
        "Value: " + validatedValue + "\n" +
        "Result: " + validationResult;
}

export function dfPropertyValidated(args) {
    const propertyName = args.propertyName;
    const validatedValue = args.entityProperty.valueCandidate;
    const validationResult = args.entityProperty.isValid;

    updateText(propertyName, validatedValue, validationResult);
}