import { TicketViewModel } from "./../view-models/ticket-order-model";

export function onPageNavigatingTo(args) {
    let viewModel = new TicketViewModel();
    const page = args.object;
    page.bindingContext = viewModel;
}
