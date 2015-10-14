var dataModelModule = require("../data-models/categorical-data-model");
function onPageLoaded(args) {
    var page = args.object;
    page.bindingContext = new dataModelModule.CategoricalDataModel();
}
exports.onPageLoaded = onPageLoaded;
