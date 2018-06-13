// >> listview-multiple-templates-model
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { Observable } from "tns-core-modules/data/observable";

export class ViewModel extends Observable {

    constructor() {
        super();
        this.dataItems = new ObservableArray<DataItem>();
        this._templateSelector = this.templateSelectorFunction;
        let itemsCount = 50;
        for (let i = 0; i <= itemsCount; i++) {
            this.dataItems.push(new DataItem(i, "Item " + i, "This is item description", this.getType(i, itemsCount)));
        }
    }

    get dataItems(): ObservableArray<DataItem> {
        return this.get("_dataItems");
    }

    set dataItems(value: ObservableArray<DataItem>) {
        this.set("_dataItems", value);
    }

    get _templateSelector(): (item: DataItem, index: number, items: any) => string {
        return this.get("templateSelector");
    }

    set _templateSelector(value: (item: DataItem, index: number, items: any) => string) {
        this.set("templateSelector", value);
    }

    public templateSelectorFunction = (item: DataItem, index: number, items: any) => {
        return item.type;
    }

    private getType(index: number, end: number): string {
        let lastDigit = index % 10;
        let type = index === 0 ? "first" : index === end ? "last" : undefined;
        if (!type) {
            type = lastDigit === 0 ? "default" : lastDigit <= 3 ? "red" : lastDigit <= 6 ? "blue" : lastDigit <= 9 ? "green" : "default";
        }

        return type;
    }
}

export class DataItem {
    public id: number;
    public itemName;
    public itemDescription;

    constructor(id: number, name: string, description: string, public type: string) {
        this.id = id;
        this.itemName = name;
        this.itemDescription = description;
    }
}
// << listview-multiple-templates-model