import viewModel = require("./../../view-models/read-only-model");

export function onPageNavigatingTo(args) {
    var page = args.object;
    page.bindingContext = new viewModel.ReadOnlyViewModel();
}