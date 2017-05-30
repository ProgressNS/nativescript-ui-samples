import dataModelModule = require("../data-models/scatter-data-model");
import viewModule = require("tns-core-modules/ui/core/view");
import pageModule = require("tns-core-modules/ui/page");

export function onPageLoaded(args){
    var page = args.object;
    page.bindingContext = new dataModelModule.ScatterDataModel();
}