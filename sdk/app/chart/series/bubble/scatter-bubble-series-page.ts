// >> binding-context-scatter-bubble
import scatterModelModule = require("../../data-models/scatter-data-model");

export function onPageLoaded(args){
    var page = args.object;
    page.bindingContext = new scatterModelModule.ScatterDataModel();
}
// << binding-context-scatter-bubble