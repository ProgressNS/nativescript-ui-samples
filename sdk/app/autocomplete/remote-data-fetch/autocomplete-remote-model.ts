
import {ObservableArray} from "data/observable-array";
import autocompleteModule = require("nativescript-telerik-ui-pro/autocomplete");
import observableModule = require("ui/core/dependency-observable");
import http = require("http");

// >> autocomplete-async-model
export class ViewModel extends observableModule.DependencyObservable {

    private _items: ObservableArray<autocompleteModule.TokenModel>;
    private autocmp;
    private countries = ["Australia", "Albania","Austria", "Argentina", "Maldives","Bulgaria","Belgium","Cyprus","Italy","Japan",
                                        "Denmark","Finland","France","Germany","Greece","Hungary","Ireland",
                                        "Latvia","Luxembourg","Macedonia","Moldova","Monaco","Netherlands","Norway",
                                        "Poland","Romania","Russia","Sweden","Slovenia","Slovakia","Turkey","Ukraine",
                                        "Vatican City", "Chad", "China", "Chile"];

    constructor(args) {
        super();
        var page = args.object;
        this.autocmp = page.getViewById("autocmp");
        this.autocmp.loadSuggestionsAsync = function(text) {
            var promise = new Promise( function(resolve, reject) {
                http.getJSON("http://www.telerik.com/docs/default-source/ui-for-ios/airports.json?sfvrsn=2").then(function(r:any){
                var airportsCollection = r.airports;
                var items:Array<autocompleteModule.TokenModel> = new Array();
                for (var i = 0; i < airportsCollection.length; i++) {
                    items.push(new autocompleteModule.TokenModel(airportsCollection[i].FIELD2, null));
                }
                resolve(items);
                }, function (e) {
                    reject();
                });
            });

            return promise;
        }
    }

    get dataItems() {
        return this._items;
    }
}

// << autocomplete-async-model