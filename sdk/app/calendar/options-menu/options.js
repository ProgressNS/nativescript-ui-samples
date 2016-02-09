var viewModel = require("./options-model");
var viewModelContext;
function onPageLoaded(args) {
    var page = args.object;
    viewModelContext = new viewModel.ViewModel(args.object.navigationContext);
    page.bindingContext = viewModelContext;
    viewModelContext.selectRow(args.object.navigationContext.index);
}
exports.onPageLoaded = onPageLoaded;
