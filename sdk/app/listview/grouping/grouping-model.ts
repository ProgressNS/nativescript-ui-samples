// >> listview-grouping-model
import { ObservableArray } from "tns-core-modules/data/observable-array";
import timer = require("tns-core-modules/timer");

export class ViewModel {

    private _items: ObservableArray<DataItem>;
    private _words = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];

    constructor() {
    }

    get dataItems() {
        if (!this._items) {
            this._items = new ObservableArray<DataItem>();

            for (var i = 0; i < 20; i++) {
                var cat = i % 3 == 0 ? "Category 1" : "Category 2";
                this._items.push(new DataItem(i, "Item " + i, "This is item description.", cat));
            }
        }
        return this._items;
    }

    get myGroupingFunc(): (item: any) => any {
        return (item: any) => {
            console.log(">>>> myGroupingFunc HIT " + item.category);
            return item.category;
        };
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

export class DataItem {
    public id: number;
    public itemName: string;
    public itemDescription: string;
    public category: string;

    constructor(id: number, name: string, description: string, category: string) {
        this.id = id;
        this.itemName = name;
        this.itemDescription = description;
        this.category = category;
    }
}
// << listview-grouping-model