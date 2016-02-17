var bubbleModelModule = require("../../data-models/bubble-data-model");
function onPageLoaded(args) {
    var page = args.object;
    page.bindingContext = new bubbleModelModule.BubbleDataModel();
}
exports.onPageLoaded = onPageLoaded;
