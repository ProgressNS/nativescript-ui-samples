import {StylingViewModel} from "./cell-styles-model";
import * as calendarModule from "nativescript-telerik-ui-pro/calendar";

export function onPageLoaded(args){
    var page = args.object;
    
    page.bindingContext = new StylingViewModel();
}

// export function onDateSelected(args) {
//     viewModelContext.onDateSelected(args);
// }
