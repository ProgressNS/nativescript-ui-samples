import { PersonModel2 } from "./../view-models/person-model-2";
export function onPageLoaded(args) {
    const page = args.object;
    page.bindingContext = new PersonModel2();
}