import { ViewModel } from "./auto-size-model";
export function onPageLoaded(args) {
    const page = args.object;
    page.bindingContext = new ViewModel();
}