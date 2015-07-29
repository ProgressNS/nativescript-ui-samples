import viewModel = require("./drawer-transitions-model");
import frame = require("ui/frame");

export function onPageLoaded(args){
    var page = args.object;
    page.bindingContext = new viewModel.DrawerTransitionsModel();

    if (frame.topmost().ios){
        frame.topmost().ios.controller.interactivePopGestureRecognizer.enabled = false;
    }
}
