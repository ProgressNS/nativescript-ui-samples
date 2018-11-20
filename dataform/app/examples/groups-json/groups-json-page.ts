import { PersonGroupsModel } from "./../view-models/person-groups-model";

export function onPageLoaded(args) {
    const page = args.object;
    page.bindingContext = new PersonGroupsModel();
}