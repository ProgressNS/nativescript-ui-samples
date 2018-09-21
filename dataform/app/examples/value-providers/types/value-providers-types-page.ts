import { CityViewModel } from "./../../view-models/city-model";

export function onPageLoaded(args) {
    const page = args.object;
    page.bindingContext = new CityViewModel();
}