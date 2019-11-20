import { PersonNestedModel } from "./../view-models/person-nested-model";

export function onPageNavigatingTo(args) {
    let viewModel = new PersonNestedModel();
    const page = args.object;
    page.bindingContext = viewModel;
}