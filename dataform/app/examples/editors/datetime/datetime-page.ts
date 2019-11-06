import { DatesModel } from "./../../view-models/dates-model";
import { Page } from "tns-core-modules/ui/page";

export function onPageNavigatingTo(args) {
    let viewModel = new DatesModel();
    const page = args.object;
    page.bindingContext = viewModel;
}