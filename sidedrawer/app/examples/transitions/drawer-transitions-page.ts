import { DrawerTransitionsModel } from "./drawer-transitions-model";
import { Frame } from "tns-core-modules/ui/frame";

export function pageLoaded(args) {
    let page = args.object;
    page.bindingContext = new DrawerTransitionsModel();

    if (Frame.topmost().ios) {
        Frame.topmost().ios.controller.interactivePopGestureRecognizer.enabled = false;
    }
}
