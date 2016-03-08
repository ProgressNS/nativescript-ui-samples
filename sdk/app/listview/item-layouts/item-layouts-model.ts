import {ObservableArray} from "data/observable-array";
import listViewModule = require("../../nativescript-telerik-ui-pro/listview");
import timer = require("timer");

var data = require("./ListItems.json")

export class ViewModel {

    private _items: ObservableArray<DataItem>;
    private _staggeredItems: ObservableArray;
    private _words = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];

    constructor() {
    }

    get dataItems() {
        if (!this._items) {
            this._items = new ObservableArray<DataItem>();
            
            for (var i = 0; i < data.items.length; i++) {
                this._items.push(new DataItem(i, data.items[i].title, data.items[i].author, "res://" + data.items[i].photo));
            }
        }
        return this._items;
    }

    get staggeredItems() {
        if (!this._staggeredItems) {
            this._staggeredItems = new ObservableArray();

            for (var i = 0; i < data.items.length; i++) {
                this._staggeredItems.push(new DataItem(i, data.items[i].title, data.items[i].author, "res://" + data.items[i].photo));
            }
        }
        return this._staggeredItems;
    }
}

export class DataItem {
    public id: number;
    public itemName;
    public itemDescription;
    public image;

    constructor(id: number, name: string, description: string, image:string) {
        this.id = id;
        this.itemName = name;
        this.itemDescription = description;
        this.image = image;
    }
}
