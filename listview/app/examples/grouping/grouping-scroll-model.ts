import { ObservableArray } from "tns-core-modules/data/observable-array";
import { Observable } from"tns-core-modules/data/observable";

export class ViewModel extends Observable {
    private _items: ObservableArray<DataItem>;

    constructor() {
        super();
        this.set("_isEnabled", true);
        let items = [];
        for (let i = 0; i < 50; i++) {
            items.push(new DataItem(i, "item " + i, "description " + i, i % 2 === 0 ? "Group 1" : "Group 2"));
        }
        this.set("_items", new ObservableArray<DataItem>(items));
    }

    get dataItems(): ObservableArray<DataItem> {
        return this.get("_items");
    }

    get isEnabled() {
        return this.get("_isEnabled");
    }

    set isEnabled(value: boolean) {
        this.set("_isEnabled", value);
    }

    get myGroupingFunc(): (item: any) => any {
        return (item: DataItem) => {
            return item.category;
        };
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