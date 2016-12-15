import viewModel = require("./../view-models/person-base-model");
import dataFormModule = require("nativescript-telerik-ui-pro/dataform");

export function onPageLoaded(args) {
    var page = args.object;
    page.bindingContext = new viewModel.PersonBaseViewModel();
}

// >> dataform-custom-editors-ios
var buttonEditorHelper;
export function createView(args: any) {
    buttonEditorHelper = new ButtonEditorHelper();
    buttonEditorHelper.editor = args.object;

    var editorView = UIButton.buttonWithType(UIButtonType.System);
    editorView.contentHorizontalAlignment = UIControlContentHorizontalAlignment.Left;
    editorView.addTargetActionForControlEvents(buttonEditorHelper, "handleTap:", UIControlEvents.TouchUpInside);
    args.view = editorView;
}

export function applyValueToEditor(args: any) {
    var editorView = args.view;
    var value = args.value;
    buttonEditorHelper.updateEditorValue(editorView, value);
}

export function getValueFromEditor(args: any) {
    args.value = buttonEditorHelper.getButtonValue();
}

export class ButtonEditorHelper extends NSObject 
{    
    private buttonValue: number;
    public editor: dataFormModule.CustomPropertyEditor;

    public updateEditorValue(editorView, newValue) {
        this.buttonValue = newValue;
        editorView.setTitleForState(this.buttonValue + " (tap to increase)", UIControlState.Normal);
    }

    public getButtonValue() : number {
        return this.buttonValue;
    }

    public "handleTap:"(sender) {
        var newValue = this.buttonValue + 1;
        this.updateEditorValue(sender, newValue);
        this.editor.notifyValueChanged();
    }

    // The handleTap method will be exposed so it can be called from native.
    public static ObjCExposedMethods = {
        "handleTap:": { returns: interop.types.void, params: [ UIView.class() ] }
    };
}
// << dataform-custom-editors-ios