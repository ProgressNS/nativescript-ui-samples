// >> listview-header-footer-model
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { Observable } from "tns-core-modules/data/observable";

export class ViewModel extends Observable {
    constructor() {
        super();
        this.footerTitle = "This is list footer";
        this.headerTitle = "This is list header";
        this.dataItems = new ObservableArray<DataItem>();
        for (let i = 0; i < 5; i++) {
            this.dataItems.push(new DataItem(i, "Item " + i, "This is item description."));
        }
    }

    get dataItems(): ObservableArray<DataItem> {
        return this.get("_dataItems");
    }

    set dataItems(value: ObservableArray<DataItem>) {
        this.set("_dataItems", value);
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