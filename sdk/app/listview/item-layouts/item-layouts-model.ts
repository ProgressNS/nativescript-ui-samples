import { ObservableArray } from "tns-core-modules/data/observable-array";
import timer = require("tns-core-modules/timer");
import { Observable } from "tns-core-modules/data/observable";

var data = require("./ListItems.json")

export class ViewModel extends Observable {
    private _words = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];

    constructor() {
        super();
        this.dataItems = new ObservableArray<DataItem>();
        for (var i = 0; i < data.items.length; i++) {
            this.dataItems.push(new DataItemWithImage(i, data.items[i].title, data.items[i].author, "res://" + data.items[i].photo));
        }

        this.staggeredItems = new ObservableArray<DataItem>();
        for (var i = 0; i < 50; i++) {
            this.staggeredItems.push(new DataItem(i, "Item " + i, this.getRandomLengthString()));
        }
        // for (var i = 0; i < data.items.length; i++) {
        //     this.staggeredItems.push(new DataItem(i, data.items[i].title, data.items[i].author, "res://" + data.items[i].photo));
        // }
    }

    get dataItems(): ObservableArray<DataItem> {
        return this.get("_dataItems");
    }

    set dataItems(value: ObservableArray<DataItem>) {
        this.set("_dataItems", value);
    }

    get staggeredItems(): ObservableArray<DataItem> {
        return this.get("_staggeredItems");
    }

    set staggeredItems(value: ObservableArray<DataItem>) {
        this.set("_staggeredItems", value);
    }

    private getRandomLengthString() {
        var sentenceLength = Math.round((Math.random() * 15));
        var result = this._words[0];
        for (var i = 0; i < sentenceLength; i++) {
            result += (this._words[i % this._words.length] + " ");
        }
        return result;
    }
}

export class DataItemWithImage {
    public id: number;
    public itemName;
    public itemDescription;
    public image;

    constructor(id: number, name: string, description: string, image: string) {
        this.id = id;
        this.itemName = name;
        this.itemDescription = description;
        this.image = image;
    }
}

export class DataItem {
    public id: number;
    public itemName;
    public itemDescription;

    constructor(id: number, name: string, description: string) {
        this.id = id;
        this.itemName = name;
        this.itemDescription = description;
    }
}
