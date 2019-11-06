import { UserViewModel } from "./../view-models/user-model";
import { SegmentedBar, SegmentedBarItem, SelectedIndexChangedEventData } from "tns-core-modules/ui/segmented-bar";
import { getViewById } from "tns-core-modules/ui/core/view";
import { DataFormCommitMode } from "nativescript-ui-dataform";

let dataform;
let label;
let button;

export function onPageNavigatedTo(args) {
    updateLabel();
}

export function onPageNavigatingTo(args) {
    let viewModel = new UserViewModel();
    const page = args.object;
    page.bindingContext = viewModel;

    dataform = getViewById(page, "myDataForm");
    label = getViewById(page, "myLabel");
    button = getViewById(page, "myButton");


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
                dataform.commitMode = DataFormCommitMode.Immediate;
                button.isEnabled = false;
                break;
            case 1:
                dataform.commitMode = DataFormCommitMode.OnLostFocus;
                button.isEnabled = false;
                break;
            case 2:
                dataform.commitMode = DataFormCommitMode.Manual;
                button.isEnabled = true;
                break;
        }
    }, this);
}

export function onTap(args) {
    dataform.commitAll();
}

export function formatString(originalString: String) {
    let formattedString: String = originalString.substring(1, originalString.length - 1);
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