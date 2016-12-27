import viewModel = require("./../../view-models/booking-model");
export function onPageLoaded(args) {
    var page = args.object;
    page.bindingContext = new viewModel.BookingViewModel();
}