import { DatesModel } from "./../../view-models/dates-model";
import { Page } from "tns-core-modules/ui/page";

export function onPageLoaded(args) {
    const page = args.object as Page;
    page.bindingContext = new DatesModel();
}