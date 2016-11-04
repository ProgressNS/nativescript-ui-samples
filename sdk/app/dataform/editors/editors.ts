import viewModel = require("./../view-models/ticket-order-model");
export function onPageLoaded(args) {
    var page = args.object;
    page.bindingContext = new viewModel.TicketViewModel();
}