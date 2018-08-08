import { ObservableArray } from "tns-core-modules/data/observable-array";
import { Observable } from "tns-core-modules/data/observable";

export class ViewModel extends Observable {

    constructor() {
        super();
        this.dataItems = new ObservableArray<DataItem>();

        for (let i = 0; i < 10; i++) {
            if (i % 2 === 0) {
                this.dataItems.push(new DataItem(i, "Item " + i, "This is item description.", 200, "green"));
            } else {
                this.dataItems.push(new DataItem(i, "Item " + i, "This is item description.", 100, "red"));
            }
        }
    }

    get dataItems(): ObservableArray<DataItem> {
        return this.get("_dataItems");
    }

    set dataItems(value: ObservableArray<DataItem>) {
        this.set("_dataItems", value);
    }
}

export class DataItem {
    public id: number;
    public itemName;
    public itemDescription;
    public size: number;

    constructor(id: number, name: string, description: string, size: number, public color: string) {
        this.id = id;
        this.itemName = name;
        this.itemDescription = description;
        this.size = size;
    }
}