var categoricalDataModelModule = require("../../data-models/categorical-data-model");
function onPageLoaded(args) {
    var page = args.object;
    page.bindingContext = new categoricalDataModelModule.CategoricalDataModel();
}
exports.onPageLoaded = onPageLoaded;
