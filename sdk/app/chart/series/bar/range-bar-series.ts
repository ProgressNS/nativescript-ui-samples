// >> binding-context-range-bar
import categoricalDataModelModule = require("../../data-models/categorical-data-model");

export function onPageLoaded(args){
    var page = args.object;
    page.bindingContext = new categoricalDataModelModule.CategoricalDataModel();
}
// << binding-context-range-bar