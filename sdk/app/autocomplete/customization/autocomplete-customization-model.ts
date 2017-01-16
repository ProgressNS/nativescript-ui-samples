import {ObservableArray} from "data/observable-array";
import autocompleteModule = require("nativescript-telerik-ui-pro/autocomplete");

var data = require("./countries.json")

export class ViewModel {

    private _items: ObservableArray<autocompleteModule.TokenModel>;

    constructor() {
    }

    get dataItems() {
        if (!this._items) {
            this._items = new ObservableArray<autocompleteModule.TokenModel>();
            for (var i = 0; i < data.items.length; i++) {
                var d = data.items[i].flag;
                var ds = "res://" + d;
                this._items.push(new autocompleteModule.TokenModel(data.items[i].country, ds));
            }
        }
        return this._items;
    }
}
