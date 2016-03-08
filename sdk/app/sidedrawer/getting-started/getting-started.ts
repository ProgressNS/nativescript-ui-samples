import viewModelModule = require("./getting-started-model");
import frame = require("ui/frame");
import drawerModule = require("nativescript-telerik-ui-pro/sidedrawer");

export function pageLoaded(args) {
    console.log("Page loaded");
    var page = args.object;
    page.bindingContext = new viewModelModule.GettingStartedViewModel();
}
