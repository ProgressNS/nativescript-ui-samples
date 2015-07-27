var scatterModelModule = require("../../data-models/scatter-data-model");
function onPageLoaded(args) {
    var page = args.object;
    page.bindingContext = new scatterModelModule.ScatterDataModel();
}
exports.onPageLoaded = onPageLoaded;
