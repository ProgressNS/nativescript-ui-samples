var pieDataModelModule = require("../data-models/pie-data-model");
function onPageLoaded(args) {
    var page = args.object;
    page.bindingContext = new pieDataModelModule.PieDataModel();
}
exports.onPageLoaded = onPageLoaded;
