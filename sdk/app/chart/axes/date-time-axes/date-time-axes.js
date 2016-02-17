var dateTimeDataModelModule = require("../../data-models/date-time-model");
function onPageLoaded(args) {
    var page = args.object;
    page.bindingContext = new dateTimeDataModelModule.DateTimeDataModel();
}
exports.onPageLoaded = onPageLoaded;
