import { Observable } from "tns-core-modules/data/observable";

export class CityViewModel extends Observable {
    private _cities: CitiesList;
    private _cityProvider1: any;
    private _cityProvider2: any;
    private _cityProvider3: any;
    private _cityProvider4: any;
    private _cityProvider5: any;

    constructor() {
        super();
        this.set("sourceText", this.cities.toString());
    }

    get cityProvider1() {
        if (!this._cityProvider1) {
            // >> dataform-valueprovider-string
            this._cityProvider1 = "Shanghai, Lagos, Moscow, São Paulo, Sydney";
            // << dataform-valueprovider-string
        }
        return this._cityProvider1;
    }

    get cityProvider2() {
        if (!this._cityProvider2) {
            // >> dataform-valueprovider-array
            this._cityProvider2 = ["Shanghai", "Lagos", "Moscow", "São Paulo", "Sydney"];
            // << dataform-valueprovider-array
        }
        return this._cityProvider2;
    }


    get cityProvider3() {
        if (!this._cityProvider3) {
            // >> dataform-valueprovider-map
            this._cityProvider3 = new Map([
                [1121, "Shanghai"],
                [3651, "Lagos"],
                [5213, "Moscow"],
                [6214, "São Paulo"],
                [6985, "Sydney"]
            ]);
            // << dataform-valueprovider-map
        }
        return this._cityProvider3;
    }


    get cityProvider4() {
        if (!this._cityProvider4) {
            // >> dataform-valueprovider-pairsarray
            this._cityProvider4 = [
                { key: 1121, label: "Shanghai" },
                { key: 3651, label: "Lagos" },
                { key: 5213, label: "Moscow" },
                { key: 6214, label: "São Paulo" },
                { key: 6985, label: "Sydney" }
            ];
            // << dataform-valueprovider-pairsarray
        }
        return this._cityProvider4;
    }


    get cityProvider5() {
        if (!this._cityProvider5) {
            // >> dataform-valueprovider-customarray
            this._cityProvider5 = {
                key: "id",
                label: "name",
                items: [
                    { id: 1121, name: "Shanghai" },
                    { id: 3651, name: "Lagos" },
                    { id: 5213, name: "Moscow" },
                    { id: 6214, name: "São Paulo" },
                    { id: 6985, name: "Sydney" }
                ]
            };
            // << dataform-valueprovider-customarray
        }
        return this._cityProvider5;
    }

    get cities() {
        if (!this._cities) {
            this._cities = new CitiesList();
        }
        return this._cities;
    }

    onPropertyCommitted(args) {
        this.set("sourceText", args.object.source.toString());
    }
}

export class CitiesList {
    public city1: string = "Sydney";
    public city2: string = "Sydney";
    public city3: number = 6985;
    public city4: number = 6985;
    public city5: number = 6985;

    toString(): String {
        return "city1: " + this.city1 + "\n" +
            "city2: " + this.city2 + "\n" +
            "city3: " + this.city3 + "\n" +
            "city4: " + this.city4 + "\n" +
            "city5: " + this.city5;
    }
}