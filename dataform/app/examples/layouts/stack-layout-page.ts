import { PersonExtendedViewModel } from "./../view-models/person-extended-model";

export function onPageNavigatingTo(args) {
    let viewModel = new PersonExtendedViewModel();
    const page = args.object;
    page.bindingContext = viewModel;
}