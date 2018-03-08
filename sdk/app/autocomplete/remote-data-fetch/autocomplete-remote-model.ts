
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { TokenModel } from "nativescript-ui-autocomplete";
import { Observable } from "tns-core-modules/data/observable";
import * as  http from "tns-core-modules/http";

// >> autocomplete-async-model
export class ViewModel extends Observable {
    private autocmp;
    private countries = ["Australia", "Albania", "Austria", "Argentina", "Maldives", "Bulgaria", "Belgium", "Cyprus", "Italy", "Japan",
        "Denmark", "Finland", "France", "Germany", "Greece", "Hungary", "Ireland",
        "Latvia", "Luxembourg", "Macedonia", "Moldova", "Monaco", "Netherlands", "Norway",
        "Poland", "Romania", "Russia", "Sweden", "Slovenia", "Slovakia", "Turkey", "Ukraine",
        "Vatican City", "Chad", "China", "Chile"];

    constructor(args) {
        super();
        var page = args.object;
        this.autocmp = page.getViewById("autocmp");
        this.autocmp.loadSuggestionsAsync = function (text) {
            var promise = new Promise(function (resolve, reject) {
                http.getJSON("http://www.telerik.com/docs/default-source/ui-for-ios/airports.json?sfvrsn=2").then(function (r: any) {
                    var airportsCollection = r.airports;
                    var items: Array<TokenModel> = new Array();
                    for (var i = 0; i < airportsCollection.length; i++) {
                        items.push(new TokenModel(airportsCollection[i].FIELD2, null));
                    }
                    resolve(items);
                }, function (e) {
                    reject();
                });
            });

            return promise;
        }
    }

    get dataItems(): ObservableArray<TokenModel> {
        return this.get("_dataItems");
    }

    set dataItems(value: ObservableArray<TokenModel>) {
        this.set("_dataItems", value);
    }
}

// << autocomplete-async-model