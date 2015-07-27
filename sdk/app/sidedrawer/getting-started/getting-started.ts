import viewModelModule = require("./getting-started-model");

export function pageLoaded(args) {
    console.log("Page loaded");
    var page = args.object;
    page.bindingContext = new viewModelModule.GettingStartedViewModel();
}
