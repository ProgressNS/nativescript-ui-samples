import { ViewModel } from "./horizontal-with-variable-item-width-model";
export function onPageLoaded(args) {
    const page = args.object;
    page.bindingContext = new ViewModel();
}