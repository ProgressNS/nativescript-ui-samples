import financialDataModelModule = require("../data-models/financial-data-model");

export function onPageLoaded(args){
    var page = args.object;
    page.bindingContext = new financialDataModelModule.FinancialDataModel();
}