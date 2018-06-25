// >> listview-multiple-templates-context
import { ViewModel } from "./multiple-templates-model";
export function onPageLoaded(args) {
    const page = args.object;
    page.bindingContext = new ViewModel();
}
// << listview-multiple-templates-context