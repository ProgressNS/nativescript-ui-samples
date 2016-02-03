var dataModelModule = require("../data-models/scatter-data-model");
function onPageLoaded(args) {
    var page = args.object;
    page.bindingContext = new dataModelModule.ScatterDataModel();
}
exports.onPageLoaded = onPageLoaded;
