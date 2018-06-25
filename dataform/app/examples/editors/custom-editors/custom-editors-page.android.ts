import { PersonBaseViewModel } from "./../../view-models/person-base-model";
export function onPageLoaded(args) {
    const page = args.object;
    page.bindingContext = new PersonBaseViewModel();
}

// >> dataform-custom-editors-android
let buttonValue;
export function editorNeedsView(args) {
    const editorView: android.widget.Button = new android.widget.Button(args.context);
    editorView.setOnClickListener(new android.view.View.OnClickListener({
        onClick(view: android.view.View) {
            handleTap(view, args.object);
        }
    }));
    args.view = editorView;
}

export function editorHasToApplyValue(args) {
    updateEditorValue(args.view, args.value);
}

export function editorNeedsValue(args) {
    args.value = buttonValue;
}

export function updateEditorValue(editorView, value) {
    buttonValue = value;
    editorView.setText(buttonValue + " (tap to increase)");
}

export function handleTap(editorView, editor) {
    const newValue = buttonValue + 1;
    updateEditorValue(editorView, newValue);
    editor.notifyValueChanged();
}
// << dataform-custom-editors-android