import { PersonBaseViewModel} from "./../../view-models/person-base-model";
import { FontStyles, PropertyEditor } from "nativescript-ui-dataform";

let nameEditor: PropertyEditor;
let ageEditor: PropertyEditor;
let birthDateEditor: PropertyEditor;
let viewModel: PersonBaseViewModel;

export function onPageLoaded(args) {
    const page = args.object;
    page.bindingContext = new PersonBaseViewModel();
    const dataform = page.getViewById("myDataForm");
    nameEditor = dataform.getPropertyByName("name").editor as PropertyEditor;
    ageEditor = dataform.getPropertyByName("age").editor as PropertyEditor;
    birthDateEditor = dataform.getPropertyByName("birthDate").editor as PropertyEditor;
}

export function onSet(args) {
    nameEditor.propertyEditorStyle.labelFontStyle = FontStyles.BoldItalic;
    ageEditor.propertyEditorStyle.labelFontStyle = FontStyles.BoldItalic;
    birthDateEditor.propertyEditorStyle.labelFontStyle = FontStyles.BoldItalic;

    nameEditor.propertyEditorStyle.labelFontName = "Times New Roman";
    ageEditor.propertyEditorStyle.labelFontName = "Times New Roman";
    birthDateEditor.propertyEditorStyle.labelFontName = "Times New Roman";

    nameEditor.propertyEditorStyle.labelTextSize = 20;
    ageEditor.propertyEditorStyle.labelTextSize = 20;
    birthDateEditor.propertyEditorStyle.labelTextSize = 20;

    nameEditor.propertyEditorStyle.labelTextColor = "orange";
    ageEditor.propertyEditorStyle.labelTextColor = "purple";
    birthDateEditor.propertyEditorStyle.labelTextColor = "lime";
}