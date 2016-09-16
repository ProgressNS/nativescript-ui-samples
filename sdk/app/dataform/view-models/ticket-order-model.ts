export class TicketViewModel {

    private _ticketOrder: TicketOrder;
    private _items: Array<String>;

    constructor() {
    }

    get ticketOrder() {
        if (!this._ticketOrder) {
            this._ticketOrder = new TicketOrder();
        }
        return this._ticketOrder;
    }

    get movies() {
        if (!this._items) {
            this._items = new Array<String>();
            this._items.push("Zootopia");
            this._items.push("Captain America");
            this._items.push("The Jungle Book");
        }
        return this._items;
    }
}

export class TicketOrder {
    public movie: string = "Zootopia";
    public date: string = "2016-04-06";
    public time: string = "20:00";
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