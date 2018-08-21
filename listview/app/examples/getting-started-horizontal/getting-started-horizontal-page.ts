import { ViewModel } from "~/examples/getting-started-horizontal/getting-started-horizontal-model";
export function onPageLoaded(args) {
    const page = args.object;
    page.bindingContext = new ViewModel();
}