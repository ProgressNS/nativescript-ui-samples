import { ObservableArray } from "tns-core-modules/data/observable-array";
import { Observable } from "tns-core-modules/data/observable";
var posts = require("./posts.json");
const enabled = "_enabled";

export class ViewModel extends Observable {

    private _items: ObservableArray<DataItem>;

    constructor() {
        super();
        this.initDataItems();
        this.enabled = true;
    }

    get dataItems() {
        return this._items;
    }

    get enabled(): boolean {
        return this.get(enabled);
    }

    set enabled(value: boolean) {
        this.set(enabled, value);
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
