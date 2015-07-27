import categoricalModelModule = require("../../data-models/categorical-data-model");

export function onPageLoaded(args){
    var page = args.object;
    page.bindingContext = new categoricalModelModule.CategoricalDataModel();
}
