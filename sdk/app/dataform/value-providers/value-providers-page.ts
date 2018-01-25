import viewModel = require("./../view-models/city-model");

export function onPageLoaded(args) {
    var page = args.object;
    page.bindingContext = new viewModel.CityViewModel();
}