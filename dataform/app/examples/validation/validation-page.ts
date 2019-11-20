import { UserViewModel } from "./../view-models/user-model";

export function onPageNavigatingTo(args) {
    let viewModel = new UserViewModel();
    const page = args.object;
    page.bindingContext = viewModel;
}