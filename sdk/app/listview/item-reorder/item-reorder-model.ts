import {ObservableArray} from "data/observable-array";
import listViewModule = require("nativescript-telerik-ui-pro/listview");
import timer = require("timer");
var names = require("../listview-selection/PhotosWithNames.json")

export class ViewModel {

    private _items: ObservableArray<DataItem>;

    constructor() {
        this.initDataItems();
    }

    get dataItems() {
        return this._items;
    }
    
    // >> listview-item-reorder-handler
    public onItemReordered(args: listViewModule.ListViewEventData){
        console.log("Item reordered. Old index: " + args.itemIndex + " " + "new index: " + args.data.targetIndex);
    }
    // << listview-item-reorder-handler

    private initDataItems() {
        this._items = new ObservableArray<DataItem>();

        for (var i = 0; i < names.names.length; i++) {
            this._items.push(new DataItem(names.names[i]));
        }
    }
}

export class DataItem {
    public itemName;

    constructor(name: string) {
        this.itemName = name;
    }
}
