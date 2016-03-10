// >> line-series-binding-context-ts 
import dataModelModule = require("../../data-models/categorical-data-model");

export function onPageLoaded(args){
    var page = args.object;
    page.bindingContext = new dataModelModule.CategoricalDataModel();
}
// << line-series-binding-context-ts