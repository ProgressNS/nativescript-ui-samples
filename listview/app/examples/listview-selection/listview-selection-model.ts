import { ObservableArray } from "tns-core-modules/data/observable-array";
import { Observable } from "tns-core-modules/data/observable";

const json = require("./PhotosWithNames.json");

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

        for (let i = 0; i < json.names.length; i++) {
            this.dataItems.push(new DataItem(json.names[i], json.emails[i]));
        }
    }
}

export class DataItem {
    public itemName;
    public itemEmail;

    constructor(name: string, email: string) {
        this.itemName = name;
        this.itemEmail = email;
    }
}
