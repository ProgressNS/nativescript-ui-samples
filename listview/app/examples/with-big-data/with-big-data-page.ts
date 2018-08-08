import { ViewModel } from "~/examples/with-big-data/with-big-data-model";

export function onPageLoaded(args) {
    const page = args.object;
    page.bindingContext = new ViewModel();
}