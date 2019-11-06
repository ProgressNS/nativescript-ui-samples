import { EmployeeViewModel } from "./../view-models/employee-model";

export function onPageNavigatingTo(args) {
    let viewModel = new EmployeeViewModel();
    const page = args.object;
    page.bindingContext = viewModel;
}