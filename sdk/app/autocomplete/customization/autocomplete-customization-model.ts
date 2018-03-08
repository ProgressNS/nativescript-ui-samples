import { ObservableArray } from "tns-core-modules/data/observable-array";
import { TokenModel } from "nativescript-ui-autocomplete";
import { Observable } from "tns-core-modules/data/observable";

var data = require("./countries.json")

export class ViewModel extends Observable {
    constructor() {
        super();
        if (!this.dataItems) {
            this.dataItems = new ObservableArray<TokenModel>();
            for (var i = 0; i < data.items.length; i++) {
                var d = data.items[i].flag;
                var ds = "res://" + d;
                this.dataItems.push(new TokenModel(data.items[i].country, ds));
            }
        }
    }

    get dataItems(): ObservableArray<TokenModel> {
        return this.get("_dataItems");
    }

    set dataItems(value: ObservableArray<TokenModel>) {
        this.set("_dataItems", value);
    }
}
