// >> listview-collapsible-grouping-context
import { ViewModel } from "./grouping-model";
export function onPageLoaded(args) {
    const page = args.object;
    page.bindingContext = new ViewModel();
}
// << listview-collapsible-grouping-context