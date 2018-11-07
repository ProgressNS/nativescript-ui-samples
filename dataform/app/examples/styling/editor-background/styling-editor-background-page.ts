import { EmployeeViewModel } from "./../../view-models/employee-model";
import { RadDataForm, EntityProperty, DataFormEventData, EditorType } from "nativescript-ui-dataform";
import * as utilsModule from "tns-core-modules/utils/utils";
import { ios } from "tns-core-modules/application";
import { Color } from "tns-core-modules/color";

const editorPaddingHorizontal = 10;
const editorPaddingVertical = 5;
const coreEditorPaddingHorizontal = 7;
const coreEditorPaddingVertical = 3;
const strokeWidth = 1;
const cornerRadius = 4;
const strokeColor = new Color("DarkGray");
const fillColor = new Color("#00000000");

export function onPageLoaded(args) {
    const page = args.object;
    page.bindingContext = new EmployeeViewModel();
}

export function dfEditorUpdate(args: DataFormEventData) {
    const entityProperty = (<RadDataForm>args.object).getPropertyByName(args.propertyName);
    const editor = args.editor;
    const editorType = entityProperty.editor.type;

    if (!editorNeedsUpdate(editorType)) {
        return;
    }

    // >> dataform-background-update
    if (ios) {
        // Update editor padding
        const editorOffsets = new UIEdgeInsets({ top: editorPaddingVertical, left: editorPaddingHorizontal, bottom: editorPaddingVertical, right: editorPaddingHorizontal });
        editor.style.insets = editorOffsets;

        // Update core editor padding
        const textOffsets = new UIEdgeInsets({ top: coreEditorPaddingVertical, left: coreEditorPaddingHorizontal, bottom: coreEditorPaddingVertical, right: coreEditorPaddingHorizontal });
        if (editorHasValueLabel(editorType)) {
            editor.showAccessoryImage = false;
        }
        editor.editorCore.insets = textOffsets;

        // Update core editor background
        const layer = editor.editorCore.layer;
        layer.borderColor = strokeColor.ios.CGColor;
        layer.borderWidth = strokeWidth;
        layer.cornerRadius = cornerRadius;
    } else {
        // Update editor padding
        const editorOffsetH = utilsModule.layout.toDevicePixels(coreEditorPaddingHorizontal);
        const editorOffsetV = utilsModule.layout.toDevicePixels(coreEditorPaddingVertical);
        editor.rootLayout().setPadding(editorOffsetH, editorOffsetV, editorOffsetH, editorOffsetV);

        // Update core editor padding
        const coreEditorView = editor.getEditorView();
        const textOffsetH = utilsModule.layout.toDevicePixels(coreEditorPaddingHorizontal);
        const textOffsetV = utilsModule.layout.toDevicePixels(coreEditorPaddingVertical);
        coreEditorView.setPadding(textOffsetH, textOffsetV, textOffsetH, textOffsetV);

        // Update core editor background
        const drawable = new android.graphics.drawable.GradientDrawable();
        drawable.setCornerRadius(utilsModule.layout.toDevicePixels(cornerRadius));
        drawable.setStroke(utilsModule.layout.toDevicePixels(strokeWidth), strokeColor.android);
        drawable.setColor(fillColor.android);
        coreEditorView.setBackgroundDrawable(drawable);
    }
    // << dataform-background-update
}

export function editorNeedsUpdate(type) {
    return editorHasValueLabel(type) || editorIsTextField(type);
}

export function editorHasValueLabel(type) {
    return type === "DatePicker" ||
        type === "TimePicker" ||
        type === "Picker";
}

export function editorIsTextField(type) {
    return type === "Text" ||
        type === "Email" ||
        type === "Password" ||
        type === "Phone" ||
        type === "Number" ||
        type === "Decimal";
}