var viewModelModule = require("./getting-started-model");
function pageLoaded(args) {
    console.log("Page loaded");
    var page = args.object;
    page.bindingContext = new viewModelModule.GettingStartedViewModel();
}
exports.pageLoaded = pageLoaded;
