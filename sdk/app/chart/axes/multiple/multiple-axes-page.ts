import multipleAxesDataModelModule = require("../../data-models/multiple-axes-model");

export function onPageLoaded(args){
    var page = args.object;
    page.bindingContext = new multipleAxesDataModelModule.MultipleAxesDataModel();
}
