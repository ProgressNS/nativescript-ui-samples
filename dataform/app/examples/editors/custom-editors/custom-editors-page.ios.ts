import { PersonBaseViewModel } from "./../../view-models/person-base-model";
import { CustomPropertyEditor } from "nativescript-ui-dataform";

export function onPageLoaded(args) {
    const page = args.object;
    page.bindingContext = new PersonBaseViewModel();
}

// >> dataform-custom-editors-ios
let buttonEditorHelper;
export function editorNeedsView(args) {
    buttonEditorHelper = new ButtonEditorHelper();
    buttonEditorHelper.editor = args.object;
    const editorView = UIButton.buttonWithType(UIButtonType.System);
    editorView.contentHorizontalAlignment = UIControlContentHorizontalAlignment.Left;
    editorView.addTargetActionForControlEvents(buttonEditorHelper, "handleTap:", UIControlEvents.TouchUpInside);
    args.view = editorView;
}

export function editorHasToApplyValue(args) {
    buttonEditorHelper.updateEditorValue(args.view, args.value);
}

export function editorNeedsValue(args) {
    args.value = buttonEditorHelper.buttonValue;
}

export class ButtonEditorHelper extends NSObject {
    public buttonValue: number;
    public editor: CustomPropertyEditor;

    public updateEditorValue(editorView, newValue) {
        this.buttonValue = newValue;
        editorView.setTitleForState(this.buttonValue + " (tap to increase)", UIControlState.Normal);
    }

    public "handleTap:"(sender) {
        const newValue = this.buttonValue + 1;
        this.updateEditorValue(sender, newValue);
        this.editor.notifyValueChanged();
    }

    public static ObjCExposedMethods = {
        "handleTap:": { returns: interop.types.void, params: [UIView.class()] }
    };
}
// << dataform-custom-editors-ios