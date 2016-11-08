import viewModel = require("./../view-models/settings-model");
import application = require("application");
import { Color } from "color";
import viewModule = require("ui/core/view");

var colorLight = new Color("#CDDC39");
var colorDark = new Color("#4CAF50");
var colorGray = new Color("#F9F9F9");
declare module com {
    module telerik {
        module android {
            module common {
                class Procedure<T>{
                    constructor(imp);
                }
            }
        }
        module widget {
            class RadioGroup {
                setPadding(l, t, r, b);
            }

            module numberpicker {
                class RadNumberPicker {
                    labelView();
                    decreaseView();
                    increaseView();
                    rootView;
                }
            }
        }
    }
}

declare module android {
    module graphics {
        module PorterDuff {
            class Mode {
                static SRC_IN;
            }

        }
        class PorterDuffColorFilter {
            constructor(arg1, arg2);

        }
        module drawable {
            class GradientDrawable {
                setStroke(width, stroke);
            }
        }
    }
    module widget {

        class LinearLayout {
            labelView();
            decreaseView();
            increaseView();
            static SHOW_DIVIDER_MIDDLE;
        }
        class RadioGroup {
            setBackgroundColor(arg);
            setPadding(l, t, r, b);
            setShowDividers(arg);
            setDividerDrawable(arg);
        }

        class RadioButton {

        }
    }
}

declare class UIStepper {
    subviews: any;
    tintColor;
}

declare class UISwitch {
    subviews: any;
    onTintColor;
    thumbTintColor
    tintColor;
}

declare class UIButton {

}

declare class UISlider {
    tintColor;
    thumbTintColor;
}

declare class UISegmentedControl {
    tintColor;
}

export function onPageLoaded(args) {
    var page = args.object;
    page.bindingContext = new viewModel.SettingsViewModel();
}

export function dfEditorUpdate(data) {
    if (application.android) {
        switch (data.propertyName) {
            case "onlyOnWiFi": editorSetupSwitchAndroid(data.editor); break;
            case "networkLimit": editorSetupStepperAndroid(data.editor); break;
            case "networkPreference": editorSetupSegmentedEditorAndroid(data.editor); break;
            case "appVolume": editorSetupSliderAndroid(data.editor); break;
        }
    } else if (application.ios) {
        switch (data.propertyName) {
            case "onlyOnWiFi": editorSetupSwitchIOS(data.editor); break;
            case "networkLimit": editorSetupStepperIOS(data.editor); break;
            case "networkPreference": editorSetupSegmentedEditorIOS(data.editor); break;
            case "appVolume": editorSetupSliderIOS(data.editor); break;
        }
    }
}

export function editorSetupSwitchAndroid(editor) {
    var androidContext = editor.getEditorView().getContext();
    var customLayoutResourceId = androidContext.getResources().getIdentifier("custom_switch_editor_layout", "layout", androidContext.getPackageName());

    editor.setEditorLayout(customLayoutResourceId);
}

export function editorSetupStepperAndroid(editor) {
    var numberPicker: com.telerik.widget.numberpicker.RadNumberPicker = <com.telerik.widget.numberpicker.RadNumberPicker>editor.getEditorView();

    numberPicker.labelView().setTextColor(colorDark.android);
    numberPicker.decreaseView().setTextColor(colorDark.android);
    numberPicker.increaseView().setTextColor(colorDark.android);

    var background1 = new android.graphics.drawable.GradientDrawable();
    background1.setStroke(2, colorLight.android);
    numberPicker.rootView().setBackground(background1);

    var background2 = new android.graphics.drawable.GradientDrawable();
    background2.setStroke(2, colorLight.android);
    numberPicker.decreaseView().setBackground(background2);

    var background3 = new android.graphics.drawable.GradientDrawable();
    background3.setStroke(2, colorLight.android);
    numberPicker.increaseView().setBackground(background3);
}

export function editorSetupSegmentedEditorAndroid(editor) {
    var radioGroup: android.widget.RadioGroup = <android.widget.RadioGroup>editor.getEditorView();
    radioGroup.setBackgroundColor(colorGray.android);
    radioGroup.setPadding(8, 8, 8, 8);

    var androidContext = editor.getEditorView().getContext();

    var segmentDividerResourceId = androidContext.getResources().getIdentifier("df_segment_divider", "drawable", androidContext.getPackageName());
    var segmentDivider = androidContext.getResources().getDrawable(segmentDividerResourceId);
    radioGroup.setShowDividers(android.widget.LinearLayout.SHOW_DIVIDER_MIDDLE);
    radioGroup.setDividerDrawable(segmentDivider);

    var segmentItemResourceId = androidContext.getResources().getIdentifier("df_segment_item", "drawable", androidContext.getPackageName());
    var segmentTextColorResourceId = androidContext.getResources().getIdentifier("df_segment_text_color", "color", androidContext.getPackageName());

    editor.setCustomizeButtons(new com.telerik.android.common.Procedure<android.widget.RadioButton>({
        apply(argument) {
            var segmentItemDrawable = androidContext.getResources().getDrawable(segmentItemResourceId);
            var segmentTextColor = androidContext.getResources().getColorStateList(segmentTextColorResourceId);
            argument.setBackgroundDrawable(segmentItemDrawable);
            argument.setTextColor(segmentTextColor);
            argument.getLayoutParams().setMargins(0, 0, 0, 0);
        }
    }));
}

export function editorSetupSliderAndroid(editor) {
    editor.getEditorView().getThumb().setColorFilter(new android.graphics.PorterDuffColorFilter(colorDark.android, android.graphics.PorterDuff.Mode.SRC_IN));
    editor.getEditorView().getProgressDrawable().setColorFilter(new android.graphics.PorterDuffColorFilter(colorLight.android, android.graphics.PorterDuff.Mode.SRC_IN));
}

export function editorSetupSwitchIOS(editor) {
    var coreEditor = <UISwitch>editor.editor;
    coreEditor.tintColor = colorLight.ios;
    coreEditor.onTintColor = colorLight.ios;
    coreEditor.thumbTintColor = colorDark.ios;
}

export function editorSetupStepperIOS(editor) {
    editor.valueLabel.textColor = colorDark.ios;

    var coreEditor = <UIStepper>editor.editor;
    coreEditor.tintColor = colorLight.ios;

    for (var i = 0; i < coreEditor.subviews.count; i++) {
        if (coreEditor.subviews[i] instanceof UIButton) {
            coreEditor.subviews[i].imageView.tintColor = colorDark.ios;
        }
    }

    var labelDef = editor.gridLayout.definitionForView(editor.valueLabel);
    labelDef.contentOffset = {
        horizontal: -64,
        vertical: 0
    };
}

export function editorSetupSegmentedEditorIOS(editor) {
    var coreEditor = <UISegmentedControl>editor.editor;
    coreEditor.tintColor = colorDark.ios;
}

export function editorSetupSliderIOS(editor) {
    var coreEditor = <UISlider>editor.editor;
    coreEditor.tintColor = colorLight.ios;
    coreEditor.thumbTintColor = colorDark.ios;
}