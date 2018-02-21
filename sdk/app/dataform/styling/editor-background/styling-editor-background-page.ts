import { EmployeeViewModel } from "./../../view-models/employee-model";
import { RadDataForm, EntityProperty, DataFormEventData, EditorType } from "nativescript-ui-dataform";
import * as utilsModule from "tns-core-modules/utils/utils";
import { ios } from "tns-core-modules/application";
import { Color } from "tns-core-modules/color";

var editorPaddingHorizontal = 10;
var editorPaddingVertical = 5;
var coreEditorPaddingHorizontal = 7;
var coreEditorPaddingVertical = 3;
var strokeWidth = 1;
var cornerRadius = 4;
var strokeColor = new Color("DarkGray");
var fillColor = new Color("#00000000");

export function onPageLoaded(args) {
    var page = args.object;
    page.bindingContext = new EmployeeViewModel();
}

export function dfEditorUpdate(args: DataFormEventData) {
    var entityProperty = (<RadDataForm>args.object).getPropertyByName(args.propertyName);
    var editor = args.editor;
    var editorType = entityProperty.editor.type;

    if (!editorNeedsUpdate(editorType)) {
        return;
    }

    // >> dataform-background-update
    if (ios) {
        // Update editor padding
        var editorOffsets = new UIEdgeInsets({ top: editorPaddingVertical, left: editorPaddingHorizontal, bottom: editorPaddingVertical, right: editorPaddingHorizontal });
        editor.style.insets = editorOffsets;

        // Update core editor padding
        var textOffsets = new UIEdgeInsets({ top: coreEditorPaddingVertical, left: coreEditorPaddingHorizontal, bottom: coreEditorPaddingVertical, right: coreEditorPaddingHorizontal });
        if (editorHasValueLabel(editorType)) {
            editor.showAccessoryImage = false;
            editor.editorValueLabel.textInsets = textOffsets;
        } else if (editorIsTextField(editorType)) {
            editor.editor.textInsets = textOffsets;
        }

        // Update core editor background
        var layer = editorHasValueLabel(editorType) ? editor.editorValueLabel.layer : editor.editor.layer;
        layer.borderColor = strokeColor.ios.CGColor;
        layer.borderWidth = strokeWidth;
        layer.cornerRadius = cornerRadius;
    } else {
        // Update editor padding
        var editorOffsetH = utilsModule.layout.toDevicePixels(coreEditorPaddingHorizontal);
        var editorOffsetV = utilsModule.layout.toDevicePixels(coreEditorPaddingVertical);
        editor.rootLayout().setPadding(editorOffsetH, editorOffsetV, editorOffsetH, editorOffsetV);

        // Update core editor padding
        var coreEditorView = editor.getEditorView();
        var textOffsetH = utilsModule.layout.toDevicePixels(coreEditorPaddingHorizontal);
        var textOffsetV = utilsModule.layout.toDevicePixels(coreEditorPaddingVertical);
        coreEditorView.setPadding(textOffsetH, textOffsetV, textOffsetH, textOffsetV);

        // Update core editor background
        var drawable = new android.graphics.drawable.GradientDrawable();
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
    return type == "DatePicker" ||
        type == "TimePicker" ||
        type == "Picker";
}

export function editorIsTextField(type) {
    return type == "Text" ||
        type == "Email" ||
        type == "Password" ||
        type == "Phone" ||
        type == "Number" ||
        type == "Decimal";
}