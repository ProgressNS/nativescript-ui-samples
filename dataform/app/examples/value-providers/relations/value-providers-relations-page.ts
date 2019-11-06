import { AddressViewModel } from "./../../view-models/address-model";

export function onPageNavigatingTo(args) {
    let viewModel = new AddressViewModel();
    const page = args.object;
    page.bindingContext = viewModel;
}