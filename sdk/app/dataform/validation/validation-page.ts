import viewModel = require("./../view-models/user-model");
export function onPageLoaded(args) {
    var page = args.object;
    page.bindingContext = new viewModel.UserViewModel();
}