import {ObservableArray} from "data/observable-array";
import listViewModule = require("nativescript-telerik-ui/listview");
import timer = require("timer");

var json = require("./PhotosWithNames.json");

export class ViewModel {

    private _items: ObservableArray;

    constructor() {
        this.initDataItems();
    }

    get dataItems() {
        return this._items;
    }


    private initDataItems() {
        this._items = new ObservableArray();

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
