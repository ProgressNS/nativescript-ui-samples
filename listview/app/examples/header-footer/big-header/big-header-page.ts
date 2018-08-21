import { ViewModel } from "./big-header-model";
export function onPageLoaded(args) {
    const page = args.object;
    page.bindingContext = new ViewModel();
}