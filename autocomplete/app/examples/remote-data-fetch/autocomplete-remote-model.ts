
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { TokenModel } from "nativescript-ui-autocomplete";
import { Observable } from "tns-core-modules/data/observable";
import * as  http from "tns-core-modules/http";

// >> autocomplete-async-model
export class ViewModel extends Observable {
    private autocomplete;
    private countries = ["Australia", "Albania", "Austria", "Argentina", "Maldives", "Bulgaria", "Belgium", "Cyprus", "Italy", "Japan",
        "Denmark", "Finland", "France", "Germany", "Greece", "Hungary", "Ireland",
        "Latvia", "Luxembourg", "Macedonia", "Moldova", "Monaco", "Netherlands", "Norway",
        "Poland", "Romania", "Russia", "Sweden", "Slovenia", "Slovakia", "Turkey", "Ukraine",
        "Vatican City", "Chad", "China", "Chile"];

    constructor(args) {
        super();
        const page = args.object;
        this.autocomplete = page.getViewById("autocomplete");
        this.autocomplete.loadSuggestionsAsync = function (text) {
            const promise = new Promise(function (resolve, reject) {
                http.getJSON("http://www.telerik.com/docs/default-source/ui-for-ios/airports.json?sfvrsn=2").then(function (r: any) {
                    const airportsCollection = r.airports;
                    const items: Array<TokenModel> = new Array();
                    for (let i = 0; i < airportsCollection.length; i++) {
                        items.push(new TokenModel(airportsCollection[i].FIELD2, null));
                    }
                    resolve(items);
                }, function (e) {
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