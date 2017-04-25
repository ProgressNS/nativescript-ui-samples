// >> sidedrawer-getting-started-binding-context
import { GettingStartedViewModel } from "./getting-started-model";
import { Page } from "tns-core-modules/ui/page";

export function pageLoaded(args) {
    var page = args.object as Page;
    page.bindingContext = new GettingStartedViewModel();
}
// << sidedrawer-getting-started-binding-context
