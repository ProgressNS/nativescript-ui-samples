var viewModel = require("./drawer-transitions-model");
var frame = require("ui/frame");
function onPageLoaded(args) {
    var page = args.object;
    page.bindingContext = new viewModel.DrawerTransitionsModel();
    if (frame.topmost().ios) {
        frame.topmost().ios.controller.interactivePopGestureRecognizer.enabled = false;
    }
}
exports.onPageLoaded = onPageLoaded;
