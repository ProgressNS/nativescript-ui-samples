import {ObservableArray} from "data/observable-array";
import listViewModule = require("../../nativescript-telerik-ui/listview");
import timer = require("timer");

export class ViewModel {

    private _items: ObservableArray;

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
        for (var index = 0; index < this._items.length; index++){
            this._items.setItem(index, new DataItem(Math.round(Math.random() * 100), "This is an updated item", "This is the updated item's description."));
        }
    }

    public onRemoveItemClick(args: listViewModule.ListViewEventData) {
        this._items.splice(2, 1); //Remove the third item
    }

    private initDataItems() {
        this._items = new ObservableArray();
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
