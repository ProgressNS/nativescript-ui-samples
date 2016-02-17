var multipleAxesDataModelModule = require("../../data-models/multiple-axes-model");
function onPageLoaded(args) {
    var page = args.object;
    page.bindingContext = new multipleAxesDataModelModule.MultipleAxesDataModel();
}
exports.onPageLoaded = onPageLoaded;
