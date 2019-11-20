// >> dataform-getting-started-context
import { PersonViewModel } from "./../view-models/person-model";

export function onPageNavigatingTo(args) {
    let viewModel = new PersonViewModel();
    const page = args.object;
    page.bindingContext = viewModel;
}
// << dataform-getting-started-context