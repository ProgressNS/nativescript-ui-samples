
import { ViewModel } from "./item-reorder-model";

export function onPageLoaded(args) {
    const page = args.object;

    page.bindingContext = new ViewModel();
}
