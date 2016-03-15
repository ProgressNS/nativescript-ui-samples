// >> binding-context-bubble-series
import bubbleModelModule = require("../../data-models/bubble-data-model");

export function onPageLoaded(args){
    var page = args.object;
    page.bindingContext = new bubbleModelModule.BubbleDataModel();
}
// << binding-context-bubble-series