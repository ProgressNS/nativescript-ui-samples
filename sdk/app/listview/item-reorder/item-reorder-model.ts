import {ObservableArray} from "tns-core-modules/data/observable-array";
import { ListViewEventData } from "nativescript-ui-listview";
import timer = require("tns-core-modules/timer");
import { Observable } from "tns-core-modules/data/observable";

var names = require("../listview-selection/PhotosWithNames.json");

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
    
    // >> listview-item-reorder-handler
    public onItemReordered(args: ListViewEventData){
        console.log("Item reordered. Old index: " + args.index + " " + "new index: " + args.data.targetIndex);
    }
    // << listview-item-reorder-handler

    private initDataItems() {
        this.dataItems = new ObservableArray<DataItem>();

        for (var i = 0; i < names.names.length; i++) {
            this.dataItems.push(new DataItem(names.names[i]));
        }
    }
}

export class DataItem {
    public itemName;

    constructor(name: string) {
        this.itemName = name;
    }
}
