import viewModel = require("./../../view-models/user-model");
import segmentedBarModule = require("tns-core-modules/ui/segmented-bar");
import viewModule = require("tns-core-modules/ui/core/view");
import dataFormModule = require("nativescript-ui-dataform");
import dialogs = require("tns-core-modules/ui/dialogs");

var dataform;
var button;
var label;

export function onPageLoaded(args) {
    var page = args.object;
    page.bindingContext = new viewModel.UserViewModel();

    dataform = viewModule.getViewById(page, "myDataForm");
    button = viewModule.getViewById(page, "myButton");
    label = viewModule.getViewById(page, "myLabel");

    var segmentedBar = <segmentedBarModule.SegmentedBar>viewModule.getViewById(page, "mySegmentedBar");
    var items = [];
    var item1 = new segmentedBarModule.SegmentedBarItem();
    item1.title = "immediate";
    items.push(item1);
    var item2 = new segmentedBarModule.SegmentedBarItem();
    item2.title = "lost focus";
    items.push(item2);
    var item3 = new segmentedBarModule.SegmentedBarItem();
    item3.title = "manual";
    items.push(item3);
    segmentedBar.items = items;
    segmentedBar.on(segmentedBarModule.SegmentedBar.selectedIndexChangedEvent, function (eventData: segmentedBarModule.SelectedIndexChangedEventData) {
        switch (eventData.newIndex) {
            case 0:
                dataform.validationMode = dataFormModule.ValidationMode.Immediate;
                button.isEnabled = false;
                break;
            case 1:
                dataform.validationMode = dataFormModule.ValidationMode.OnLostFocus;
                button.isEnabled = false;
                break;
            case 2:
                dataform.validationMode = dataFormModule.ValidationMode.Manual;
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
    var validatedValue = "username: " + dataform.getPropertyByName("username").valueCandidate +
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
    var propertyName = args.propertyName;
    var validatedValue = args.entityProperty.valueCandidate;
    var validationResult = args.entityProperty.isValid;

    updateText(propertyName, validatedValue, validationResult);
}