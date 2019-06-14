import { ObservableArray } from "tns-core-modules/data/observable-array";
import { Observable } from "tns-core-modules/data/observable";

export class ViewModel extends Observable {

    constructor() {
        super();
        this.dataItems = new ObservableArray<DataItem>();

        for (let i = 0; i < 100; i++) {
            this.dataItems.push(new DataItem(i, "Item " + i, "This is item description."));
        }
    }

    get firstVisibleIndex(): number {
        return this.get("_firstVisibleIndex");
    }

    set firstVisibleIndex(value: number) {
        this.set("_firstVisibleIndex", value);
    }

    get dataItems(): ObservableArray<DataItem> {
        return this.get("_dataItems");
    }

    set dataItems(value: ObservableArray<DataItem>) {
        this.set("_dataItems", value);
    }

    public updateFirstVisibleIndex(value) {
        this.firstVisibleIndex = value;
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