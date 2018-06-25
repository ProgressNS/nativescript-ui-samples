import { PersonViewModel } from "./../view-models/person-model";
import { PropertyEditor } from "nativescript-ui-dataform";

let dataform;
let button;
let counter;

export function onPageLoaded(args) {
    const page = args.object;
    page.bindingContext = new PersonViewModel();
    dataform = page.getViewById("myDataForm");
    button = page.getViewById("myButton");
    counter = 0;
}

export function onTap(args) {
    let newText;
    switch (counter) {
        case 0:
            changeDisplayName("Full Name");
            button.text = "name: hidden true";
            break;
        case 1:
            changeHidden(true);
            button.text = "name: hidden false";
            break;
        case 2:
            changeHidden(false);
            button.text = "age: editor";
            break;
        case 3:
            changeEditor();
            button.text = "name: fill color";
            break;
        case 4:
            changeEditorFill();
            button.text = "name: stroke";
            break;
        case 5:
            changeEditorStroke();
            button.text = "Main Info: collapsible false";
            break;
        case 6:
            changeGroupCollapsible(false);
            button.text = "Main Info: collapsible true";
            break;
        case 7:
            changeGroupCollapsible(true);
            button.text = "Main Info: text size";
            break;
        case 8:
            changeGroupLabelTextSize();
            button.text = "Main Info: text color";
            break;
        case 9:
            changeGroupLabelTextColor();
            button.text = "Main Info: name";
            break;
        case 10:
            changeGroupName();
            button.text = "name: display name";
            break;
        default:
            changeDisplayName("Name " + counter);
            button.text = "name: display name";
            break;
    }
    counter++;
}

export function changeDisplayName(value) {
    const property = dataform.getPropertyByName("name");
    property.displayName = value;
}

export function changeHidden(value) {
    const property = dataform.getPropertyByName("name");
    property.hidden = value;
}

// >> dataform-editors-code
export function changeEditor() {
    const property = dataform.getPropertyByName("age");
    const propertyEditor = new PropertyEditor();
    propertyEditor.type = "Slider";
    property.editor = propertyEditor;
}
// << dataform-editors-code

// >> dataform-getting-started-runtime-change
export function changeEditorFill() {
    const property = dataform.getPropertyByName("name");
    property.editor.propertyEditorStyle.fillColor = "LightBlue";
}
// << dataform-getting-started-runtime-change

export function changeEditorStroke() {
    const property = dataform.getPropertyByName("name");
    property.editor.propertyEditorStyle.strokeWidth = 4;
    property.editor.propertyEditorStyle.strokeColor = "Yellow";
}

export function changeGroupCollapsible(value) {
    const group = dataform.getGroupByName("Main Info");
    group.collapsible = value;
}

export function changeGroupLabelTextSize() {
    const group = dataform.getGroupByName("Main Info");
    group.titleStyle.labelTextSize = 20;
}

// >> dataform-groups-code
export function changeGroupLabelTextColor() {
    const group = dataform.getGroupByName("Main Info");
    group.titleStyle.labelTextColor = "Blue";
}
// << dataform-groups-code

export function changeGroupName() {
    const group = dataform.getGroupByName("Main Info");
    group.name = "General";
}