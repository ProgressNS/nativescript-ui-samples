import {ObservableArray} from "data/observable-array";
import timer = require("timer");
// >> listview-header-footer-model
export class ViewModel {

    private _items: ObservableArray<DataItem>;
    private _words = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];
    private _footerTitle;
    private _headerTitle;

    constructor() {
        this._footerTitle = "This is list footer";
        this._headerTitle = "This is list header";
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
    
    get headerTitle(){
        return this._headerTitle;
    }
    
    get footerTitle(){
        return this._footerTitle;
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
// << listview-header-footer-model