import { DrawerTransitionsModel } from "./drawer-transitions-model";
import { topmost } from "tns-core-modules/ui/frame";

export function pageLoaded(args) {
    let page = args.object;
    page.bindingContext = new DrawerTransitionsModel();

    if (topmost().ios) {
        topmost().ios.controller.interactivePopGestureRecognizer.enabled = false;
    }
}
