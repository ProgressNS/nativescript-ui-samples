import dateTimeDataModelModule = require("../../data-models/date-time-model");

export function onPageLoaded(args){
    var page = args.object;
    page.bindingContext = new dateTimeDataModelModule.DateTimeDataModel();
}