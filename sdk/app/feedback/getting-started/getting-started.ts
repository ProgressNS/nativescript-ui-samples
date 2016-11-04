// >> feedback-import-module
import {RadFeedback} from "nativescript-telerik-ui-pro/feedback";
// << feedback-import-module
import {FeedbackViewModel} from "./view-model";

export function onPageLoaded(args) {
    var page = args.object;
    page.bindingContext = new FeedbackViewModel();
    // >> feedback-init
    RadFeedback.init("1234", "1234", "1234");
    // << feedback-init
}

export function btnShowFeedbackTap(args) {
    // >> feedback-show
    RadFeedback.show();
    // << feedback-show
}