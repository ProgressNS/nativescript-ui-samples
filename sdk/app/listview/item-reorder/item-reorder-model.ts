import {ObservableArray} from "data/observable-array";
import listViewModule = require("../../nativescript-telerik-ui/listview");
import timer = require("timer");

export class ViewModel {

    private _items: ObservableArray<DataItem>;

    constructor() {
        this.initDataItems();
    }

    get dataItems() {
        return this._items;
    }

    public onItemReordered(args: listViewModule.ListViewEventData){
        console.log("Item reordered. Old index: " + args.itemIndex + " " + "new index: " + args.data.targetIndex);
    }

    private initDataItems() {
        this._items = new ObservableArray<DataItem>();

        for (var i = 0; i < 10; i++) {
            this._items.push(new DataItem(i, "Item " + i, "This is item description."));
        }
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
