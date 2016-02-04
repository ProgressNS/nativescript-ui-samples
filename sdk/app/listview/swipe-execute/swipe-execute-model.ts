import {ObservableArray} from "data/observable-array";
import listViewModule = require("../../nativescript-telerik-ui/listview");

export class ViewModel {

    private _items: ObservableArray;

    constructor() {
        this.initDataItems();
    }

    get dataItems() {
        return this._items;
    }

    public onCellSwiping(args: listViewModule.ListViewEventData) {
        var swipeLimits = args.data.swipeLimits;
        if (args.data.x > 100){
            console.log("Threshold achieved: " + args.data.x);
        }else if(args.data.x < -100){
            console.log("Threshold achieved: " + args.data.x );
        }
    }

    public onSwipeCellStarted(args: listViewModule.ListViewEventData) {
        var swipeLimits = args.data.swipeLimits;
        console.log("Started swipe cell: " + args.object);
        swipeLimits.threshold = 100;
    }

    public onItemClick(args: listViewModule.ListViewEventData){
        console.log("Item click: " + args.itemIndex);
    }

    public onSwipeCellFinished(args: listViewModule.ListViewEventData) {
        var swipeLimits = args.data.swipeLimits;
        console.log("Started swipe cell: " + args.object);
        swipeLimits.threshold = 100;
        swipeLimits.left = 150;
        swipeLimits.right = 150;

    }

    private initDataItems() {
        this._items = new ObservableArray();

        for (var i = 0; i < 50; i++) {
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
