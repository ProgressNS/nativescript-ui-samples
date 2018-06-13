import { ObservableArray } from "tns-core-modules/data/observable-array";
import { ListViewEventData }from "nativescript-ui-listview";
import { setTimeout } from "tns-core-modules/timer";
import { Observable } from "tns-core-modules/data/observable";
import { android as androidApplication } from "tns-core-modules/application";

const posts = require("../posts.json");

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

    // >> listview-pull-to-refresh-handler
    public onPullToRefreshInitiated(args: ListViewEventData) {
        const that = new WeakRef(this);
        setTimeout(function () {
            const initialNumberOfItems = that.get()._numberOfAddedItems;
            for (let i = that.get()._numberOfAddedItems; i < initialNumberOfItems + 2; i++) {
                if (i > posts.names.length - 1) {
                    break;
                }
                const imageUri = androidApplication ? posts.images[i].toLowerCase() : posts.images[i];

                that.get().dataItems.splice(0, 0, new DataItem(posts.names[i], posts.titles[i], posts.text[i], "res://" + imageUri));
                that.get()._numberOfAddedItems++;
            }
            const listView = args.object;
            listView.notifyPullToRefreshFinished();
        }, 1000);
    }
    // << listview-pull-to-refresh-handler
    private initDataItems() {
        this.dataItems = new ObservableArray<DataItem>();
        this._numberOfAddedItems = 0;

        for (let i = 0; i < posts.names.length - 15; i++) {
            this._numberOfAddedItems++;
            if (androidApplication) {
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
