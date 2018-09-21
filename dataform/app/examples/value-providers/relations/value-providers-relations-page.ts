import { AddressViewModel } from "./../../view-models/address-model";

export function onPageLoaded(args) {
    const page = args.object;
    page.bindingContext = new AddressViewModel();
}