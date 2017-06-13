import { ObservableArray } from "tns-core-modules/data/observable-array";
import { Observable } from "tns-core-modules/data/observable";
var data = require("./airports.json")

export class ReadOnlyViewModel extends Observable {

    private _booking: TicketOrder;
    private _fromProviders: Array<String> = new Array<String>();
    private _movies: Array<Movie>;
    private _movieNames: Array<String>;

    constructor() {
        super();
        this._booking = new TicketOrder();

        for (var i = 0; i < data.airports.length; i++) {
            this._fromProviders.push(data.airports[i].FIELD2 + ", " + data.airports[i].FIELD5);
        }
        this._isReadOnly = true;
    }

    get booking() {
        return this._booking;
    }

    get _isReadOnly(): boolean {
        return this.get("isReadOnly");
    }

    set _isReadOnly(value: boolean) {
        this.set("isReadOnly", value);
        this.updateStatusText();
    }

    get _currentStatus(): string {
        return this.get("currentStatus");
    }

    set _currentStatus(value: string) {
        this.set("currentStatus", value);
    }

    get fromProviders(): Array<String> {
        return this._fromProviders;
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

    private updateStatusText() {
        this._currentStatus = this._isReadOnly ? "Enable" : "Disable";
    }

    public onEnableDisable(args) {
        this._isReadOnly = !this._isReadOnly;
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
    public date: string = "2016-04-06";
    public time: string = "20:00";
    public type: string = "2D";
    public price: number = 9.50;
    public numberOfTickets: number = 2;
    public contactName: string = null;
    public contactPhone: string = null;
    public contactEmail: string = null;
    public agreeTerms: boolean = false;
    public to: string = "New York";
    public from: Array<String> = new Array("Belfast City, BHD", "City of Derry, LDY");

    constructor() {
    }
}