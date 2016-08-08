export class TicketViewModel {

    private _ticketOrder: TicketOrder;

    constructor() {
    }

    get ticketOrder() {
        if (!this._ticketOrder) {
            this._ticketOrder = new TicketOrder();
        }
        return this._ticketOrder;
    }
}

export class TicketOrder {
    public movie: string = "Zootopia";
    //public date: Date = new Date();
    //public time: Date = new Date();
    public type: string = "2D";
    public price: number = 9.50;
    public numberOfTickets: number = 2;
    public contactName: string = null;
    public contactPhone: string = null;
    public contactEmail: string = null;
    public agreeTerms: boolean = false;

    constructor() {
    }
}