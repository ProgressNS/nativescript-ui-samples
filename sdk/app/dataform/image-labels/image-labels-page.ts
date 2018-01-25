import viewModel = require("./../view-models/employee-model");
export function onPageLoaded(args) {
    var page = args.object;
    page.bindingContext = new viewModel.EmployeeViewModel();
}