import { TicketViewModel } from "./../view-models/ticket-order-model";
export function onPageLoaded(args) {
    const page = args.object;
    page.bindingContext = new TicketViewModel();
}