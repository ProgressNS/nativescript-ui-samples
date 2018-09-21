import { PersonNestedModel } from "./../view-models/person-nested-model";
export function onPageLoaded(args) {
    const page = args.object;
    page.bindingContext = new PersonNestedModel();
}