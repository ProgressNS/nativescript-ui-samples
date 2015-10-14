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

    public onShouldRefreshOnPull(args: listViewModule.ListViewEventData) {
        var that = new WeakRef(this);
        timer.setTimeout(function() {
            for (var i = 0; i < 25; i++) {
                that.get()._items.splice(0, 0, new DataItem(that.get()._items.length, "Item " + that.get()._items.length, "This is item description."));

            }
            var listView = args.object;
            listView.didRefreshOnPull();
        }, 1000);

    }

    private initDataItems() {
        this._items = new ObservableArray();

        for (var i = 0; i < 25; i++) {
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
