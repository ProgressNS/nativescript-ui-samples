import observableModule = require("tns-core-modules/data/observable");
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { ListViewEventData } from "nativescript-ui-listview";
import timer = require("tns-core-modules/timer");
import frameModule = require("tns-core-modules/ui/frame");
import { Observable } from "tns-core-modules/data/observable";

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

    public onAddItemClick(args: ListViewEventData) {
        var id = Math.round(Math.random() * 100);
        this.dataItems.push(new DataItem(id, "This is a new item: " + id, "This is the new item's description."));
    }

    public onResetClick(args: ListViewEventData) {
        while (this.dataItems.length) {
            this.dataItems.pop();
        }
    }

    public onUpdateItemClick(args: ListViewEventData) {
        for (var index = 0; index < this.dataItems.length; index++) {
            this.dataItems.getItem(index).id = Math.random() * 100;
            this.dataItems.getItem(index).itemName = "This is an updated item";
            this.dataItems.getItem(index).itemDescription = "This is the updated item's description.";
        }
    }

    public onRemoveItemClick(args: ListViewEventData) {
        this.dataItems.splice(this.dataItems.length - 1, 1);
    }

    private initDataItems() {
        this.dataItems = new ObservableArray<DataItem>();
    }
}

export class DataItem extends observableModule.Observable {


    constructor(id: number, name: string, description: string) {
        super();
        this.id = id;
        this.itemName = name;
        this.itemDescription = description;
    }

    get id(): number {
        return this.get("_id");
    }

    set id(value: number) {
        this.set("_id", value);
    }

    get itemName(): string {
        return this.get("_itemName");
    }

    set itemName(value: string) {
        this.set("_itemName", value);
    }

    get itemDescription(): string {
        return this.get("_itemDescription");
    }

    set itemDescription(value: string) {
        this.set("_itemDescription", value);
    }
}
