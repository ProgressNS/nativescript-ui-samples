var NegativeValuesDataModel = require("../../data-models/negative-values-data-model");
function onPageLoaded(args) {
    var page = args.object;
    page.bindingContext = new NegativeValuesDataModel.NegativeValuesDataModel();
}
exports.onPageLoaded = onPageLoaded;
