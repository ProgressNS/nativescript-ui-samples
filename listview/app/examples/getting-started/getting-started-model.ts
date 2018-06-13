// >> listview-first-look-model
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { Observable } from "tns-core-modules/data/observable";

export class ViewModel extends Observable {
    private _words = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];

    constructor() {
        super();
        this.dataItems = new ObservableArray<DataItem>();

        for (let i = 0; i < 10; i++) {
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
        const sentenceLength = Math.round((Math.random() * 15));
        let result = this._words[0];
        for (let i = 0; i < sentenceLength; i++) {
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