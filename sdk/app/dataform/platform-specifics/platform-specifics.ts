import viewModel = require("./../view-models/person-base-model");
import {Color} from "color";
var application = require("application");
var imageSource = require("image-source");

export function onPageLoaded(args) {
    var page = args.object;
    page.bindingContext = new viewModel.PersonBaseViewModel();
}

export function onEditorUpdate(args) {
    if (args.propertyName == "age") {
        changeEditorSpacing(args.editor);
    }
    if (args.propertyName == "birthDate") {
        changeDateFormatting(args.editor);
    }
}

export function onGroupUpdate(args) {
    updateIndicatorArrow(args.group);
}

export function changeEditorSpacing(editor) {
    if (application.ios) {
        var labelDef = editor.gridLayout.definitionForView(editor.valueLabel);
        labelDef.contentOffset = {
            horizontal: -25,
            vertical: 0
        };
    } else {
        editor.getHeaderView().setPadding(12, 12, 12, 48);
    }
}

export function changeDateFormatting(editor) {
    if (application.ios) {
        var dateFormatter = NSDateFormatter.alloc().init();
        dateFormatter.dateFormat = "yyyy-MM-dd";
        editor.dateFormatter = dateFormatter;
    } else {
        var simpleDateFormat = new java.text.SimpleDateFormat("yyyy-MM-dd", java.util.Locale.US);
        editor.setDateFormat(simpleDateFormat);
    }
}

export function updateIndicatorArrow(group) {
    if (application.ios) {
        var redColor = (new Color("Green")).ios;
        var newFill = TKSolidFill.solidFillWithColor(redColor);
        group.titleView.indicatorView.fillColor = newFill;
    } else {
        var img = imageSource.fromResource("ic_custom_arrow").android;
        group.expandButton().setImageBitmap(img);
    }
}