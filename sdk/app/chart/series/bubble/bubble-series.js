var categoricalModelModule = require("../../data-models/categorical-data-model");
function onPageLoaded(args) {
    var page = args.object;
    page.bindingContext = new categoricalModelModule.CategoricalDataModel();
}
exports.onPageLoaded = onPageLoaded;
