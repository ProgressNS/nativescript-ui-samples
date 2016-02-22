var viewModel = require("./options-model");
var viewModelContext;
function onLoaded(args) {
    var page = args.object;
    viewModelContext = new viewModel.ViewModel(args.object.navigationContext);
    page.bindingContext = viewModelContext;
}
exports.onLoaded = onLoaded;
function onNavigatedTo(args) {
    viewModelContext.selectRow(args.object.navigationContext.index);
}
exports.onNavigatedTo = onNavigatedTo;
