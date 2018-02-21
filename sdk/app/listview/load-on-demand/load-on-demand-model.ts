import {ObservableArray} from "tns-core-modules/data/observable-array";
import { ListViewEventData, RadListView, ListViewLoadOnDemandMode } from "nativescript-ui-listview";
import { Observable } from "tns-core-modules/data/observable";
import timer = require("tns-core-modules/timer");

var posts = require("../posts.json")
import * as application from "tns-core-modules/application";

export class ViewModel extends Observable {
    private _numberOfAddedItems;

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

    // >> listview-load-on-demand-handler
    public onLoadMoreItemsRequested(args: ListViewEventData) {
        var that = new WeakRef(this);
        timer.setTimeout(function() {
            var listView: RadListView = args.object;
            var initialNumberOfItems = that.get()._numberOfAddedItems;
            for (var i = that.get()._numberOfAddedItems; i < initialNumberOfItems + 2; i++) {
                if (i > posts.names.length - 1) {
                    listView.loadOnDemandMode = ListViewLoadOnDemandMode[ListViewLoadOnDemandMode.None];
                    break;
                }
                var imageUri = application.android ? posts.images[i].toLowerCase() : posts.images[i];
                that.get().dataItems.push(new DataItem(posts.names[i], posts.titles[i], posts.text[i], "res://" + imageUri));
                that.get()._numberOfAddedItems++;
            }

            listView.notifyLoadOnDemandFinished();
        }, 1000);
        args.returnValue = true;
    }
    // << listview-load-on-demand-handler

    private initDataItems() {
        this.dataItems = new ObservableArray<DataItem>();
        this._numberOfAddedItems = 0;

        for (var i = 0; i < posts.names.length - 15; i++) {
            this._numberOfAddedItems++;
            if (application.android) {
                this.dataItems.push(new DataItem(posts.names[i], posts.titles[i], posts.text[i], "res://" + posts.images[i].toLowerCase()));
            }
            else {
                this.dataItems.push(new DataItem(posts.names[i], posts.titles[i], posts.text[i], "res://" + posts.images[i]));
            }
        }
    }
}

export class DataItem {
    public name;
    public title;
    public text;
    public image;

    constructor(name: string, title: string, text: string, image: string) {
        this.name = name;
        this.text = text;
        this.title = title;
        this.image = image;
    }
}

