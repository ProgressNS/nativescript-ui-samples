import viewModel = require("./../view-models/user-model");
import segmentedBarModule = require("tns-core-modules/ui/segmented-bar");
import viewModule = require("tns-core-modules/ui/core/view");
import dataFormModule = require("nativescript-ui-dataform");

var dataform;
var label;
var button;

export function onPageLoaded(args) {
    var page = args.object;
    page.bindingContext = new viewModel.UserViewModel();

    dataform = viewModule.getViewById(page, "myDataForm");
    label = viewModule.getViewById(page, "myLabel");
    button = viewModule.getViewById(page, "myButton");

    updateLabel();

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
                dataform.commitMode = dataFormModule.CommitMode.Immediate;
                button.isEnabled = false;
                break;
            case 1:
                dataform.commitMode = dataFormModule.CommitMode.OnLostFocus;
                button.isEnabled = false;
                break;
            case 2:
                dataform.commitMode = dataFormModule.CommitMode.Manual;
                button.isEnabled = true;
                break;
        }
    }, this);
}

export function onTap(args) {
    dataform.commitAll();
}

export function formatString(originalString: String) {
    var formattedString: String = originalString.substring(1, originalString.length - 1);
    formattedString = formattedString.replace(/,/g, '\n');
    return formattedString;
}

export function updateLabel() {
    label.text = null;
    label.text = formatString(dataform.editedObject);
}

export function onPropertyCommitted() {
    updateLabel();
}