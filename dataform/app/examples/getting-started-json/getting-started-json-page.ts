import { PersonModel2 } from "./../view-models/person-model-2";

export function onPageNavigatingTo(args) {
    let viewModel = new PersonModel2();
    const page = args.object;
    page.bindingContext = viewModel;
}
