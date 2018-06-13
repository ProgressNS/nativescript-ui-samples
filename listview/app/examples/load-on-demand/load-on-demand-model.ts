import { ObservableArray } from "tns-core-modules/data/observable-array";
import { ListViewEventData, RadListView, ListViewLoadOnDemandMode } from "nativescript-ui-listview";
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

    // >> listview-load-on-demand-handler
    public onLoadMoreItemsRequested(args: ListViewEventData) {
        const that = new WeakRef(this);
        setTimeout(function () {
            const listView: RadListView = args.object;
            const initialNumberOfItems = that.get()._numberOfAddedItems;
            for (let i = that.get()._numberOfAddedItems; i < initialNumberOfItems + 2; i++) {
                if (i > posts.names.length - 1) {
                    listView.loadOnDemandMode = ListViewLoadOnDemandMode[ListViewLoadOnDemandMode.None];
                    break;
                }
                const imageUri = androidApplication ? posts.images[i].toLowerCase() : posts.images[i];
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

