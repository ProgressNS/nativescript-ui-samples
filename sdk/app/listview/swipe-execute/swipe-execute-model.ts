import { ObservableArray } from "tns-core-modules/data/observable-array";
import { Observable } from "tns-core-modules/data/observable";
var posts = require("./posts.json");

export class ViewModel extends Observable {
    constructor() {
        super();
        this.initDataItems();
    }

    get dataItems(): ObservableArray<DataItem> {
        return this.get("_dataItems");
    }

    set dataItems(value: ObservableArray<DataItem>) {
        this.set("_dataItems", value);
    }

    private initDataItems() {
        this.dataItems = new ObservableArray<DataItem>();

        for (var i = 0; i < posts.names.length; i++) {
            this.dataItems.push(new DataItem(posts.names[i], posts.titles[i], posts.text[i]));
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
