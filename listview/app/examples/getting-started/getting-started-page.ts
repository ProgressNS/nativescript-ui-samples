// >> listview-first-look-context
import { ViewModel } from "./getting-started-model";
export function onPageLoaded(args) {
    const page = args.object;
    page.bindingContext = new ViewModel();
}
// << listview-first-look-context