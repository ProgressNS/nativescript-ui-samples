import viewModel = require("./../view-models/person-model-2");
export function onPageLoaded(args) {
    var page = args.object;
    page.bindingContext = new viewModel.PersonModel2();
}