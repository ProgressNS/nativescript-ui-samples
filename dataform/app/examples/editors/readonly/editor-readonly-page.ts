import { ReadOnlyViewModel } from "./../../view-models/read-only-model";

export function onPageNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new ReadOnlyViewModel();
}