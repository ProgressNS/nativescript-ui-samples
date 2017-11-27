// >> listview-grouping-model
import { ObservableArray } from "tns-core-modules/data/observable-array";
import * as timer from "tns-core-modules/timer";
import { Observable } from"tns-core-modules/data/observable";

export class ViewModel extends Observable {

    private _items: ObservableArray<DataItem>;
    private _words = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];

    constructor() {
        super();
        this.set("_items", new ObservableArray<DataItem>(items));
        this.set("_isEnabled", true);
    }

    get isEnabled() {
        return this.get("_isEnabled");
    }

    set isEnabled(value: boolean) {
        this.set("_isEnabled", value);
    }

    get dataItems() {
        return this.get("_items");
    }

    get myFilteringFunc(): (item: any) => any {
        return (item: DataItem) => {
            return item.itemName.includes("Special Item");
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

var items: DataItem[] = [
    new DataItem(89, "Special Item 89", "This is item category is: Category 1", "Category 1"),
    new DataItem(23, "Item 23", "This is item category is: Category 2", "Category 2"),
    new DataItem(1, "Item 1", "This is item category is: Category 1", "Category 1"),
    new DataItem(665, "Special Item 665", "This is item category is: Category 2", "Category 2"),
    new DataItem(34, "Item 34", "This is item category is: Category 3", "Category 3"),
    new DataItem(55, "Special Item 55", "This is item category is: Category 3", "Category 3"),
    new DataItem(78, "Item 78", "This is item category is: Category 1", "Category 1"),
    new DataItem(5, "Item 5", "This is item category is: Category 1", "Category 1"),
    new DataItem(111, "Special Item 111", "This is item category is: Category 2", "Category 2"),
    new DataItem(1134, "Item 1134", "This is item category is: Category 1", "Category 1"),
    new DataItem(22, "Special Item 22", "This is item category is: Category 3", "Category 3"),
    new DataItem(345, "Item 345", "This is item category is: Category 1", "Category 1"),
    new DataItem(80, "Item 80", "This is item category is: Category 1", "Category 1"),
    new DataItem(54, "Item 54", "This is item category is: Category 3", "Category 3"),
];
// << listview-grouping-model