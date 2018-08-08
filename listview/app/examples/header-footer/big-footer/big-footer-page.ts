import { ViewModel } from "./big-footer-model";
export function onPageLoaded(args) {
    const page = args.object;
    page.bindingContext = new ViewModel();
}