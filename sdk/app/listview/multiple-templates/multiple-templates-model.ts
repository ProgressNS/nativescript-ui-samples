import { ObservableArray } from "tns-core-modules/data/observable-array";
import { Observable } from "tns-core-modules/data/observable";
var data = require("./items.json")

export class ViewModel extends Observable {

    constructor() {
        super();
        this.dataItems = new ObservableArray<DataItem>();
        this._templateSelector = this.templateSelectorFunction;
        for (var i = 0; i < data.items.length; i++) {
            this.dataItems.push(new DataItem(i, data.items[i].name, data.items[i].description, data.items[i].type));
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