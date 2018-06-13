import { EmployeeViewModel } from "./../view-models/employee-model";
export function onPageLoaded(args) {
    const page = args.object;
    page.bindingContext = new EmployeeViewModel();
}