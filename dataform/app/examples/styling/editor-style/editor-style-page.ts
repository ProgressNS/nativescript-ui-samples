import { PersonBaseViewModel} from "./../../view-models/person-base-model";
import { DataFormFontStyle, PropertyEditor, RadDataForm } from "nativescript-ui-dataform";
import { Color } from "tns-core-modules/color";

let nameEditor: PropertyEditor;
let ageEditor: PropertyEditor;
let birthDateEditor: PropertyEditor;
let viewModel: PersonBaseViewModel;

export function onPageLoaded(args) {
    const page = args.object;
    page.bindingContext = new PersonBaseViewModel();
    const dataform = <RadDataForm>page.getViewById("myDataForm");
    nameEditor = dataform.getPropertyByName("name").editor;
    ageEditor = dataform.getPropertyByName("age").editor;
    birthDateEditor = dataform.getPropertyByName("birthDate").editor;
}

export function onSet(args) {
    nameEditor.propertyEditorStyle.labelFontStyle = DataFormFontStyle.BoldItalic;
    ageEditor.propertyEditorStyle.labelFontStyle = DataFormFontStyle.BoldItalic;
    birthDateEditor.propertyEditorStyle.labelFontStyle = DataFormFontStyle.BoldItalic;

    nameEditor.propertyEditorStyle.labelFontName = "Times New Roman";
    ageEditor.propertyEditorStyle.labelFontName = "Times New Roman";
    birthDateEditor.propertyEditorStyle.labelFontName = "Times New Roman";

    nameEditor.propertyEditorStyle.labelTextSize = 20;
    ageEditor.propertyEditorStyle.labelTextSize = 20;
    birthDateEditor.propertyEditorStyle.labelTextSize = 20;

    nameEditor.propertyEditorStyle.labelTextColor = new Color("orange");
    ageEditor.propertyEditorStyle.labelTextColor = new Color("purple");
    birthDateEditor.propertyEditorStyle.labelTextColor = new Color("lime");
}