import { PersonExtendedViewModel } from "./../view-models/person-extended-model";
export function onPageLoaded(args) {
    const page = args.object;
    page.bindingContext = new PersonExtendedViewModel();
}