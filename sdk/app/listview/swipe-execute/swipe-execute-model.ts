import {ObservableArray} from "data/observable-array";
import listViewModule = require("../../nativescript-telerik-ui/listview");
var posts = require("./posts.json");

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
       // args.data.x = 0;
       debugger;
        console.log("Item click: " + args.itemIndex);
    }

    public onSwipeCellFinished(args: listViewModule.ListViewEventData) {
        var swipeLimits = args.data.swipeLimits;
        console.log("Started swipe cell: " + args.object);
        swipeLimits.threshold = 100;
        swipeLimits.left = 150;
        swipeLimits.right = 180;

    }

    private initDataItems() {
        this._items = new ObservableArray();

        for (var i = 0; i < posts.names.length; i++) {
            this._items.push(new DataItem(posts.names[i], posts.titles[i], posts.text[i]));
        }
    }
}

export class DataItem {
    public name;
    public title;
    public text;

    constructor(name: string, title: string, text:string) {
        this.name = name;
        this.text = text;
        this.title = title;
    }
}
