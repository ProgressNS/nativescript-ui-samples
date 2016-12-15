import viewModel = require("./../view-models/person-base-model");
export function onPageLoaded(args) {
    var page = args.object;
    page.bindingContext = new viewModel.PersonBaseViewModel();
}

var buttonValue;

export function createView(args: any) {
    var editorView: android.widget.Button = new android.widget.Button(args.context);
    editorView.setOnClickListener(new android.view.View.OnClickListener({
        onClick(view: android.view.View) {
            handleTap(view, args.object);
        }
    }));
    args.view = editorView;
}

export function applyValueToEditor(args: any) {
    var editorView = args.view;
    var value = args.value;
    updateEditorValue(editorView, value);
}

export function getValueFromEditor(args: any) {
    args.value = buttonValue;
}

export function updateEditorValue(editorView, value) {
    buttonValue = value;
    editorView.setText(buttonValue + " (tap to increase)");
}

export function handleTap(editorView, editor) {
    var newValue = buttonValue + 1;
    updateEditorValue(editorView, newValue);
    editor.notifyValueChanged();
}