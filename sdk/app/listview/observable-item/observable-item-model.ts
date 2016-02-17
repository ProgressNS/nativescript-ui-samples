import {ObservableArray} from "data/observable-array";
import {Observable} from "data/observable";
import listViewModule = require("listview");
import timer = require("timer");

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
        debugger;
        for (var index = 0; index < this._items.length; index++){
            this._items.setItem(index, new DataItem(Math.round(Math.random() * 100), "This is an updated item", "This is the updated item's description."));
        }
    }

    public onRemoveItemClick(args: listViewModule.ListViewEventData) {
       this._items.splice(this._items.length-1, 1);
    }
    
    public onUpdatePropertyClick(args: any){
        this._items.getItem(2).itemName = "Updated item name";
        this._items.getItem(2).itemDescription = "Updated item description";
    }

    private initDataItems() {
        this._items = new ObservableArray<DataItem>();
    }
}

export class DataItem extends Observable {
    public id: number;

    constructor(id: number, name: string, description: string) {
        super(undefined);
        this.id = id;
        this.itemName = name;
        this.itemDescription = description;
    }
    
    get itemName(){
        return this.get("name");
    }
    
    set itemName(value: string){
        this.set("name", value);
    }
    
    get itemDescription(){
        return this.get("description");
    }
    
    set itemDescription(value: string){
        this.set("description", value);
    }
}
