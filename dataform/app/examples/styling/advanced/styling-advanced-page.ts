import { SettingsViewModel } from "./../../view-models/settings-model";
import { android as androidApplication } from "tns-core-modules/application";
import { Color } from "tns-core-modules/color";
import { RadDataForm, EntityProperty, DataFormEventData } from "nativescript-ui-dataform";

let colorLight = new Color("#CDDC39");
let colorDark = new Color("#4CAF50");
let colorGray = new Color("#F9F9F9");

export function onPageLoaded(args) {
    let page = args.object;
    page.bindingContext = new SettingsViewModel();
}

export function dfEditorUpdate(args: DataFormEventData) {
    if (androidApplication) {
        // >> dataform-styling-propertyname
        switch (args.propertyName) {
            case "appVolume": editorSetupSliderAndroid(args.editor); break;
            // << dataform-styling-propertyname
            case "onlyOnWiFi": editorSetupSwitchAndroid(args.editor); break;
            case "networkLimit": editorSetupStepperAndroid(args.editor); break;
            case "networkPreference": editorSetupSegmentedEditorAndroid(args.editor); break;
        }
    } else {
        // >> dataform-styling-editortype
        let entityProperty: EntityProperty =
            (<RadDataForm>args.object).getPropertyByName(args.propertyName);
        switch (entityProperty.editor.type) {
            case "Slider": editorSetupSliderIOS(args.editor); break;
            // << dataform-styling-editortype
            case "Switch": editorSetupSwitchIOS(args.editor); break;
            case "Stepper": editorSetupStepperIOS(args.editor); break;
            case "SegmentedEditor": editorSetupSegmentedEditorIOS(args.editor); break;
        }
    }
}

export function editorSetupSwitchAndroid(editor) {
    let androidContext = editor.getEditorView().getContext();
    let customLayoutResourceId = androidContext.getResources().getIdentifier("custom_switch_editor_layout", "layout", androidContext.getPackageName());

    editor.setEditorLayout(customLayoutResourceId);
}

export function editorSetupSwitchIOS(editor) {
    let coreEditor = <UISwitch>editor.editor;
    if (coreEditor.tintColor === colorLight.ios) {
        return;
    }
    coreEditor.tintColor = colorLight.ios;
    coreEditor.onTintColor = colorLight.ios;
    coreEditor.thumbTintColor = colorDark.ios;
}

export function editorSetupStepperAndroid(editor) {
    let numberPicker = editor.getEditorView();

    numberPicker.labelView().setTextColor(colorDark.android);
    numberPicker.decreaseView().setTextColor(colorDark.android);
    numberPicker.increaseView().setTextColor(colorDark.android);

    let background1 = new android.graphics.drawable.GradientDrawable();
    background1.setStroke(2, colorLight.android);
    numberPicker.rootView().setBackground(background1);

    let background2 = new android.graphics.drawable.GradientDrawable();
    background2.setStroke(2, colorLight.android);
    numberPicker.decreaseView().setBackground(background2);

    let background3 = new android.graphics.drawable.GradientDrawable();
    background3.setStroke(2, colorLight.android);
    numberPicker.increaseView().setBackground(background3);
}

export function editorSetupStepperIOS(editor) {
    editor.valueLabel.textColor = colorDark.ios;

    let coreEditor = <UIStepper>editor.editor;
    coreEditor.tintColor = colorLight.ios;

    for (let i = 0; i < coreEditor.subviews.count; i++) {
        if (coreEditor.subviews[i] instanceof UIButton) {
            (<UIButton>coreEditor.subviews[i]).imageView.tintColor = colorDark.ios;
        }
    }

    const editorView = editor.editorCore;
    editorView.labelAlignment = TKGridLayoutAlignment.Left;
}

export function editorSetupSegmentedEditorAndroid(editor) {
    let radioGroup: android.widget.RadioGroup = <android.widget.RadioGroup>editor.getEditorView();
    radioGroup.setBackgroundColor(colorGray.android);
    radioGroup.setPadding(8, 8, 8, 8);

    let androidContext = editor.getEditorView().getContext();

    let segmentDividerResourceId = androidContext.getResources().getIdentifier("df_segment_divider", "drawable", androidContext.getPackageName());
    let segmentDivider = androidContext.getResources().getDrawable(segmentDividerResourceId);
    radioGroup.setShowDividers(android.widget.LinearLayout.SHOW_DIVIDER_MIDDLE);
    radioGroup.setDividerDrawable(segmentDivider);

    let segmentItemResourceId = androidContext.getResources().getIdentifier("df_segment_item", "drawable", androidContext.getPackageName());
    let segmentTextColorResourceId = androidContext.getResources().getIdentifier("df_segment_text_color", "color", androidContext.getPackageName());
    editor.setCustomizeButtons(new com.telerik.android.common.Procedure({
        apply(argument: android.widget.RadioButton) {
            let segmentItemDrawable = androidContext.getResources().getDrawable(segmentItemResourceId);
            let segmentTextColor = androidContext.getResources().getColorStateList(segmentTextColorResourceId);
            argument.setBackgroundDrawable(segmentItemDrawable);
            argument.setTextColor(segmentTextColor);
        }
    }));
}

export function editorSetupSegmentedEditorIOS(editor) {
    let coreEditor = <UISegmentedControl>editor.editor;
    coreEditor.tintColor = colorDark.ios;
}

// >> dataform-styling-advanced
export function editorSetupSliderAndroid(editor) {
    let coreEditor = <android.widget.SeekBar>editor.getEditorView();
    coreEditor.getThumb().setColorFilter(new android.graphics.PorterDuffColorFilter(colorDark.android, android.graphics.PorterDuff.Mode.SRC_IN));
    coreEditor.getProgressDrawable().setColorFilter(new android.graphics.PorterDuffColorFilter(colorLight.android, android.graphics.PorterDuff.Mode.SRC_IN));
}

export function editorSetupSliderIOS(editor) {
    let coreEditor = <UISlider>editor.editor;
    coreEditor.tintColor = colorLight.ios;
    coreEditor.thumbTintColor = colorDark.ios;
}
// << dataform-styling-advanced