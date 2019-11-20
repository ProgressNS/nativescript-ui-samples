import { PersonViewModel } from "./../view-models/person-model";
import { PropertyEditor, DataFormEditorType, EntityProperty, RadDataForm, PropertyGroup } from "nativescript-ui-dataform";
import { Color } from "tns-core-modules/color";
import { Button } from "tns-core-modules/ui/button";

let dataform: RadDataForm;
let button: Button;
let counter: number;

export function onPageNavigatingTo(args) {
    let viewModel = new PersonViewModel();
    const page = args.object;
    page.bindingContext = viewModel;
    dataform = <RadDataForm>page.getViewById("myDataForm");
    button = <Button>page.getViewById("myButton");
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
    const property = <EntityProperty>dataform.getPropertyByName("name");
    property.displayName = value;
}

export function changeHidden(value) {
    const property = <EntityProperty>dataform.getPropertyByName("name");
    property.hidden = value;
}

// >> dataform-editors-code
export function changeEditor() {
    const property = <EntityProperty>dataform.getPropertyByName("age");
    const propertyEditor = new PropertyEditor();
    propertyEditor.type = DataFormEditorType.Slider;
    property.editor = propertyEditor;
}
// << dataform-editors-code

// >> dataform-getting-started-runtime-change
export function changeEditorFill() {
    const property = <EntityProperty>dataform.getPropertyByName("name");
    property.editor.propertyEditorStyle.fillColor = new Color("LightBlue");
}
// << dataform-getting-started-runtime-change

export function changeEditorStroke() {
    const property = <EntityProperty>dataform.getPropertyByName("name");
    property.editor.propertyEditorStyle.strokeWidth = 4;
    property.editor.propertyEditorStyle.strokeColor = new Color("Yellow");
}

export function changeGroupCollapsible(value) {
    const group = <PropertyGroup>dataform.getGroupByName("Main Info");
    group.collapsible = value;
}

export function changeGroupLabelTextSize() {
    const group = <PropertyGroup>dataform.getGroupByName("Main Info");
    group.titleStyle.labelTextSize = 20;
}

// >> dataform-groups-code
export function changeGroupLabelTextColor() {
    const group = <PropertyGroup>dataform.getGroupByName("Main Info");
    group.titleStyle.labelTextColor = new Color("Blue");
}
// << dataform-groups-code

export function changeGroupName() {
    const group = <PropertyGroup>dataform.getGroupByName("Main Info");
    group.name = "General";
}