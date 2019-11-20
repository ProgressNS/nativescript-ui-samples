import { CityViewModel } from "./../../view-models/city-model";

export function onPageNavigatingTo(args) {
    let viewModel = new CityViewModel();
    const page = args.object;
    page.bindingContext = viewModel;
}