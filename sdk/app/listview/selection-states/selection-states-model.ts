import {ObservableArray} from "data/observable-array";
import {Observable} from "data/observable";
import listViewModule = require("nativescript-telerik-ui-pro/listview");
import timer = require("timer");
// >> listview-howto-item-selection-page-model
export class ViewModel {

    private _items: ObservableArray<DataItem>;

    constructor() {
        this.initDataItems();
    }

    get dataItems() {
        return this._items;
    }
    
    // >> listview-howto-item-selection-events
    public itemSelected(args: listViewModule.ListViewEventData) {
        var item = this.dataItems.getItem(args.itemIndex);
        item.selected = true;
    }

    public itemDeselected(args: listViewModule.ListViewEventData) {
        var item = this.dataItems.getItem(args.itemIndex);
        item.selected = false;
    }
    // << listview-howto-item-selection-events

    private initDataItems() {
        this._items = new ObservableArray<DataItem>();

        for (var i = 0; i < 25; i++) {
            this._items.push(new DataItem(i, "Item " + i, "This is item description."));
        }
    }
}
// << listview-howto-item-selection-page-model

// >> listview-howto-item-selection-model
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
// << listview-howto-item-selection-model
