// >> listview-header-footer-model
import { ObservableArray } from "tns-core-modules/data/observable-array";
import timer = require("tns-core-modules/timer");
import { Observable } from "tns-core-modules/data/observable";

export class ViewModel extends Observable {
    private _words = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];

    constructor() {
        super();
        this.footerTitle = "This is list footer";
        this.headerTitle = "This is list header";
        this.dataItems = new ObservableArray<DataItem>();
        for (var i = 0; i < 10; i++) {
            this.dataItems.push(new DataItem(i, "Item " + i, "This is item description."));
        }
    }

    get dataItems(): ObservableArray<DataItem> {
        return this.get("_dataItems");
    }

    set dataItems(value: ObservableArray<DataItem>) {
        this.set("_dataItems", value);
    }

    private getRandomLengthString() {
        var sentenceLength = Math.round((Math.random() * 15));
        var result = this._words[0];
        for (var i = 0; i < sentenceLength; i++) {
            result += (this._words[i % this._words.length] + " ");
        }
        return result;
    }

    get headerTitle(): string {
        return this.get("_headerTitle");
    }

    set headerTitle(value: string) {
        this.set("_headerTitle", value);
    }

    get footerTitle(): string {
        return this.get("_footerTitle");
    }

    set footerTitle(value: string) {
        this.set("_footerTitle", value);
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