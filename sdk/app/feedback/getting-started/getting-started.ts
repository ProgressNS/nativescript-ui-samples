import feedbackModule = require("nativescript-telerik-ui-pro/feedback");
import {FeedbackViewModel} from "./view-model";

export function onPageLoaded(args) {
    var page = args.object;
    page.bindingContext = new FeedbackViewModel();
    feedbackModule.RadFeedback.init("1234", "1234", "1234");
}

export function btnShowFeedbackTap(args) {
    feedbackModule.RadFeedback.show();
}