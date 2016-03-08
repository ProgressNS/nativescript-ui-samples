import observableModule = require("data/observable");
import {ObservableArray} from "data/observable-array";
import listViewModule = require("nativescript-telerik-ui-pro/listview");
import timer = require("timer");
import frameModule = require("ui/frame");

export class ViewModel {

    private _items: ObservableArray<DataItem>;

    constructor() {
        this.initDataItems();
    }

    get dataItems() {
        return this._items;
    }

    public onAddItemClick(args: listViewModule.ListViewEventData) {
        var id = Math.round(Math.random() * 100);
        this._items.push(new DataItem(id, "This is a new item: " + id, "This is the new item's description."));
    }

    public onResetClick(args: listViewModule.ListViewEventData) {
        while (this._items.length) {
            this._items.pop();
        }
    }

    public onUpdateItemClick(args: listViewModule.ListViewEventData) {
        for (var index = 0; index < this._items.length; index++) {
              this._items.getItem(index).id = Math.random() * 100;
            this._items.getItem(index).itemName = "This is an updated item";
            this._items.getItem(index).itemDescription = "This is the updated item's description.";
        }
    }

    public onRemoveItemClick(args: listViewModule.ListViewEventData) {
        this._items.splice(this._items.length - 1, 1);
    }

    private initDataItems() {
        this._items = new ObservableArray<DataItem>();
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
