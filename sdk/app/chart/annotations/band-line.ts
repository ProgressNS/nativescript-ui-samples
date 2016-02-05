import dataModelModule = require("../data-models/scatter-data-model");
import viewModule = require("ui/core/view");
import pageModule = require("ui/page");

export function onPageLoaded(args){
    var page = args.object;
    page.bindingContext = new dataModelModule.ScatterDataModel();
}