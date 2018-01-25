// >> spline-series-binding-context
import dataModelModule = require("../../data-models/categorical-data-model");

export function onPageLoaded(args){
    var page = args.object;
    page.bindingContext = new dataModelModule.CategoricalDataModel();
}
// << spline-series-binding-context