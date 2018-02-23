import dataFormModule = require("nativescript-ui-dataform");

// >> dataform-converters-code
export class TicketViewModel implements dataFormModule.PropertyConverter {
    // ...
    // >> (hide)
    private _ticketOrder: TicketOrder;
    private _movies: Array<Movie>;
    private _movieNames: Array<String>;

    constructor() {
    }

    get ticketOrder() {
        if (!this._ticketOrder) {
            this._ticketOrder = new TicketOrder();
        }
        return this._ticketOrder;
    }

    get movies() {
        if (!this._movies) {
            this._movies = new Array<Movie>();
            this._movies.push(new Movie(123, "Zootopia"));
            this._movies.push(new Movie(217, "Captain America"));
            this._movies.push(new Movie(324, "The Jungle Book"));
        }
        return this._movies;
    }

    get movieNames() {
        if (!this._movieNames) {
            this._movieNames = this.movies.map((value: Movie) => value.name);
        }
        return this._movieNames;
    }
    // << (hide)
    convertFrom(id: number) {
        return this.movies.filter((movie: Movie) => movie.id == id)[0].name;
    }

    convertTo(name: string) {
        return this.movies.filter((movie: Movie) => movie.name == name)[0].id;
    }
}

export class Movie {
    public id: number;
    public name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

export class TicketOrder {
    public movie: number = 123;
    // ...
    // >> (hide)
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
    // << (hide)
}
// << dataform-converters-code