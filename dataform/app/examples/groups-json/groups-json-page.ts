import { PersonGroupsModel } from "./../view-models/person-groups-model";

export function onPageNavigatingTo(args) {
    let viewModel = new PersonGroupsModel();
    const page = args.object;
    page.bindingContext = viewModel;
}