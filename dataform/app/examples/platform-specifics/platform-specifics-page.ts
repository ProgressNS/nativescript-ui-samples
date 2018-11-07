import { PersonBaseViewModel } from "./../view-models/person-base-model";
import { Color } from "tns-core-modules/color";
import { ios } from "tns-core-modules/application";
import { fromResource } from "tns-core-modules/image-source";

export function onPageLoaded(args) {
    const page = args.object;
    page.bindingContext = new PersonBaseViewModel();
}

export function onEditorUpdate(args) {
    if (args.propertyName === "age") {
        changeEditorSpacing(args.editor);
    }
    if (args.propertyName === "birthDate") {
        changeDateFormatting(args.editor);
    }
}

export function onGroupUpdate(args) {
    updateIndicatorArrow(args.group);
}

export function changeEditorSpacing(editor) {
    if (ios) {
        const editorView = editor.editorCore;
        editorView.labelOffset = 12;
    } else {
        editor.getHeaderView().setPadding(12, 12, 12, 48);
    }
}

export function changeDateFormatting(editor) {
    if (ios) {
        const dateFormatter = NSDateFormatter.alloc().init();
        dateFormatter.dateFormat = "yyyy-MM-dd";
        editor.dateFormatter = dateFormatter;
    } else {
        const simpleDateFormat = new java.text.SimpleDateFormat("yyyy-MM-dd", java.util.Locale.US);
        editor.setDateFormat(simpleDateFormat);
    }
}

export function updateIndicatorArrow(group) {
    if (ios) {
        const redColor = (new Color("Green")).ios;
        const newFill = TKSolidFill.solidFillWithColor(redColor);
        group.titleView.indicatorView.fillColor = newFill;
    } else {
        const img = fromResource("ic_custom_arrow").android;
        group.expandButton().setImageBitmap(img);
    }
}