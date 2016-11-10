import viewModel = require("./../view-models/person-extended-model");
export function onPageLoaded(args) {
    var page = args.object;
    page.bindingContext = new viewModel.PersonExtendedViewModel();
}