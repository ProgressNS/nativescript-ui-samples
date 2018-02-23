import { ObservableArray } from "tns-core-modules/data/observable-array";
import { Observable } from "tns-core-modules/data/observable";
import listViewModule = require("nativescript-ui-listview");
import timer = require("tns-core-modules/timer");

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

        for (var i = 0; i < 25; i++) {
            this.dataItems.push(new DataItem(i, "Item " + i, "This is item description."));
        }
    }
}

export class DataItem extends Observable {

    public get selected() {
        return this.get('_selected');
    }

    public set selected(value: boolean) {
        this.set('_selected', value);
    }

    public get name() {
        return this.get('_itemName');
    }

    public set name(value: string) {
        this.set('_itemName', value);
    }

    public get description() {
        return this.get('_itemDescription');
    }

    public set description(value: string) {
        this.set('_itemDescription', value);
    }

    public get id() {
        return this.get('_id');
    }

    public set id(value: number) {
        this.set('_id', value);
    }

    constructor(id: number, name: string, description: string) {
        super();
        this.id = id;
        this.name = name;
        this.description = description;
        this.selected = false;
    }
}
