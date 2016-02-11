import NegativeValuesDataModel = require("../../data-models/negative-values-data-model");

export function onPageLoaded(args){
    var page = args.object;
    page.bindingContext = new NegativeValuesDataModel.NegativeValuesDataModel();
}
