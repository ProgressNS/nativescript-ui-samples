import {ObservableArray} from "data/observable-array";
import listViewModule = require("nativescript-telerik-ui/listview");
import observableModule = require("data/observable");
import timer = require("timer");
import frameModule = require("ui/frame");

export class ViewModel extends observableModule.Observable{
    private _items;
    private _animations;
    
    constructor(){
		super();
        this.initDataItems();
        this._animations = {
            options: ["Default", "Fade", "Scale", "Slide"],
            index: 0
        };
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
        
       var listView = <listViewModule.ListView>frameModule.topmost().getViewById("ls");
       if (listView._ios != undefined) {
           listView._ios.reloadData();
       }
    }

    public onRemoveItemClick(args: listViewModule.ListViewEventData) {
        this._items.splice(this._items.length-1, 1);
    }

    private initDataItems() {
        this._items = new ObservableArray<DataItem>();
    }

    public updateItemAnimation() {
        var index: number = this._animations.index;
        let b = this._animations.options[index];
         var listView = <listViewModule.ListView>frameModule.topmost().getViewById("ls");
         listView.listViewLayout.itemInsertAnimation = this._animations.options[index];
         listView.listViewLayout.itemDeleteAnimation = this._animations.options[index];
    }
    
    public onOptionsTapped() {
        var navigationEntry = {
            moduleName: "/calendar/options-menu/options",
            context: this._animations,
            animated: true
        };
        
        frameModule.topmost().navigate(navigationEntry);
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
