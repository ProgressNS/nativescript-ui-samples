import { ViewModel } from "./grouping-multiple-templates-model";

// >> listview-multiple-templates-context
export function onPageLoaded(args) {
    let page = args.object;
    page.bindingContext = new ViewModel();
}
// << listview-multiple-templates-context