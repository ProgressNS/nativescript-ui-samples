import { ViewModel } from "./item-layouts-model";

export function onPageLoaded(args) {
    const page = args.object;

    page.bindingContext = new ViewModel();
}
