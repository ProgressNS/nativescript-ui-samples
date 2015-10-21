var pieModelModule = require("../../data-models/pie-data-model");
function onPageLoaded(args) {
    var page = args.object;
    page.bindingContext = new pieModelModule.PieDataModel();
}
exports.onPageLoaded = onPageLoaded;
