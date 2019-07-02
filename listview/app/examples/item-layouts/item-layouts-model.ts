import { ObservableArray } from "tns-core-modules/data/observable-array";
import { Observable } from "tns-core-modules/data/observable";

const data = require("./ListItems.json");

export class ViewModel extends Observable {
    private _words = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];

    constructor() {
        super();
        this.dataItems = new ObservableArray<DataItem>();
        for (let i = 0; i < data.items.length; i++) {
            this.dataItems.push(new DataItemWithImage(i, data.items[i].title, data.items[i].author, "res://" + data.items[i].photo));
        }

        this.staggeredItems = new ObservableArray<DataItem>();
        for (let i = 0; i < 50; i++) {
            this.staggeredItems.push(new DataItem(i, "Item " + i, this.getRandomLengthString()));
        }

        this.similarItems = new ObservableArray<DataItem>();
        for (let i = 0; i < 100; i++) {
            this.similarItems.push(new DataItem(i, "Item " + i, "This is item description"));
        }
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

    get similarItems(): ObservableArray<DataItem> {
        return this.get("_similarItems");
    }

    set similarItems(value: ObservableArray<DataItem>) {
        this.set("_similarItems", value);
    }

    private getRandomLengthString() {
        const sentenceLength = Math.round((Math.random() * 15));
        let result = this._words[0];
        for (let i = 0; i < sentenceLength; i++) {
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
