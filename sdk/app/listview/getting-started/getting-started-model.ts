// >> listview-first-look-model
import {ObservableArray} from "data/observable-array";
import timer = require("timer");

export class ViewModel {

    private _items: ObservableArray<DataItem>;
    private _words = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];

    constructor() {
    }

    get dataItems() {
        if (!this._items) {
            this._items = new ObservableArray<DataItem>();

            for (var i = 0; i < 10; i++) {
                this._items.push(new DataItem(i, "Item " + i, "This is item description."));
            }
        }
        return this._items;
    }

    private getRandomLengthString(){
        var sentenceLength = Math.round((Math.random() * 15));
        var result = this._words[0];
        for (var i = 0; i < sentenceLength; i++){
            result += (this._words[i % this._words.length] + " ");
        }
        return result;
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
// << listview-first-look-model