
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { TokenModel } from "nativescript-ui-autocomplete";
import { Observable } from "tns-core-modules/data/observable";
import * as  http from "tns-core-modules/http";

// >> autocomplete-async-model
export class ViewModel extends Observable {
    private autocomplete;
    private jsonUrl = "https://raw.githubusercontent.com/telerik/nativescript-ui-samples/master/examples-data/airports.json";

    constructor(args) {
        super();
        const page = args.object;
        this.autocomplete = page.getViewById("autocomplete");
        let that = this;
        this.autocomplete.loadSuggestionsAsync = function (text) {
            const promise = new Promise((resolve, reject)   => {
                http.getJSON(that.jsonUrl).then((res: AirportJSON) => {
                    const airportsCollection = res.airports;
                    const items: Array<TokenModel> = new Array();
                    for (let i = 0; i < airportsCollection.length; i++) {
                        items.push(new TokenModel(airportsCollection[i].FIELD2, null));
                    }
                    resolve(items);
                }).catch((err) => {
                    const message = 'Error fetching remote data from ' + that.jsonUrl + ': ' + err.message;
                    console.log(message);
                    alert(message);
                    reject();
                });
            });

            return promise;
        };
    }

    get dataItems(): ObservableArray<TokenModel> {
        return this.get("_dataItems");
    }

    set dataItems(value: ObservableArray<TokenModel>) {
        this.set("_dataItems", value);
    }
}

// << autocomplete-async-model

export interface AirportJSON {
    airports: Airport[];
}

export interface Airport {
    FIELD1:  number;
    FIELD2:  string;
    FIELD3:  null | string;
    FIELD4:  string;
    FIELD5:  string;
    FIELD6:  null | string;
    FIELD7:  number;
    FIELD8:  number;
    FIELD9:  number;
    FIELD10: number;
    FIELD11: Field11;
    FIELD12: null | string;
}

export enum Field11 {
    A = "A",
    E = "E",
    N = "N",
    O = "O",
    S = "S",
    U = "U",
    Z = "Z",
}
