import { ObservableArray } from "tns-core-modules/data/observable-array";
const data = require("./airports.json");

export class BookingViewModel {

    private _booking: Booking;
    private _fromProviders: Array<String> = new Array<String>();

    constructor() {
        this._booking = new Booking();

        for (let i = 0; i < data.airports.length; i++) {
            this._fromProviders.push(data.airports[i].FIELD2 + ", " + data.airports[i].FIELD5);
        }
    }

    get booking() {
        return this._booking;
    }

    get fromProviders(): Array<String> {
        return this._fromProviders;
    }
}

export class Booking {
    public to: string = "New York";
    public from: Array<String> = new Array("Belfast City, BHD", "City of Derry, LDY");

    constructor() {
    }
}