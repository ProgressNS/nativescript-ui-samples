var financialDataModelModule = require("../../data-models/financial-data-model");
function onPageLoaded(args) {
    var page = args.object;
    page.bindingContext = new financialDataModelModule.FinancialDataModel();
}
exports.onPageLoaded = onPageLoaded;
