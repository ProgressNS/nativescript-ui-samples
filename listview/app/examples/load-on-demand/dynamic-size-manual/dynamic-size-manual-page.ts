import { ViewModel } from "./../load-on-demand-model";

export function onPageLoaded(args) {
    const page = args.object;
    page.bindingContext = new ViewModel();
}