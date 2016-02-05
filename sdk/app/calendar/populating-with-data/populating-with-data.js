var viewModel = require("./populating-with-data-model");
var viewModelContext;
function onPageLoaded(args) {
    var page = args.object;
    viewModelContext = new viewModel.ViewModel();
    page.bindingContext = viewModelContext;
}
exports.onPageLoaded = onPageLoaded;
function onDateSelected(args) {
    viewModelContext.onDateSelected(args);
}
exports.onDateSelected = onDateSelected;
