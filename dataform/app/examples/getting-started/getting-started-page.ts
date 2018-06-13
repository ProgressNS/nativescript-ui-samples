// >> dataform-getting-started-context
import { PersonViewModel } from "./../view-models/person-model";
export function onPageLoaded(args) {
    const page = args.object;
    page.bindingContext = new PersonViewModel();
}
// << dataform-getting-started-context