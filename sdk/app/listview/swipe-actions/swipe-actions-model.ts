import {ObservableArray} from "data/observable-array";
var posts = require("./posts.json");

export class ViewModel {

    private _items: ObservableArray<DataItem>;

    constructor() {
        this.initDataItems();
    }

    get dataItems() {
        return this._items;
    }

    private initDataItems() {
        this._items = new ObservableArray<DataItem>();

        for (var i = 0; i < posts.names.length; i++) {
            this._items.push(new DataItem(posts.names[i], posts.titles[i], posts.text[i]));
        }
    }
}

export class DataItem {
    public name;
    public title;
    public text;

    constructor(name: string, title: string, text: string) {
        this.name = name;
        this.text = text;
        this.title = title;
    }
}
