import {ObservableArray} from "data/observable-array";

var json = require("./PhotosWithNames.json");

export class ViewModel {

    private _items: ObservableArray<DataItem>;

    constructor() {
        this.initDataItems();
    }

    get dataItems() {
        return this._items;
    }


    private initDataItems() {
        this._items = new ObservableArray<DataItem>();

        for (var i = 0; i < json.names.length; i++) {
           this._items.push(new DataItem(json.names[i], json.emails[i]));
        }
    }
}

export class DataItem {
    public itemName;
    public itemEmail;

    constructor(name: string, email: string) {
        this.itemName = name;
        this.itemEmail = email;
    }
}
