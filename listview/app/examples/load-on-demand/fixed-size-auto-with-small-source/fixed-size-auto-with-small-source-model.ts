import { ObservableArray } from "tns-core-modules/data/observable-array";
import { ListViewEventData, RadListView, LoadOnDemandListViewEventData, ListViewLoadOnDemandMode } from "nativescript-ui-listview";
import { Observable } from "tns-core-modules/data/observable";
import { android as androidApplication } from "tns-core-modules/application";

const serverPeopleCollection = require("../people.json");

export class ViewModel extends Observable {
    private _dataItems: ObservableArray<DataItem>;
    private _sourceDataItems: ObservableArray<DataItem>;
    private _itemsLoading: boolean;
    private _allItems: Array<{name: string, title: string, text: string, image: string}>;

    constructor() {
        super();
        this._allItems = serverPeopleCollection.people.slice();
        this._sourceDataItems = new ObservableArray<DataItem>();
        this.initSourceDataItems(1);
        this._dataItems = new ObservableArray<DataItem>();
        this.addMoreItemsFromSource(1);
    }

    get dataItems(): ObservableArray<DataItem> {
        return this.get("_dataItems");
    }

    set dataItems(value: ObservableArray<DataItem>) {
        this.set("_dataItems", value);
    }

    public onLoadMoreDataRequested(args: LoadOnDemandListViewEventData) {
        const that = new WeakRef(this);
        const listView: RadListView = args.object;
        if (!this._itemsLoading) {
            if (this._sourceDataItems.length !== 0) {
                console.log("Load More Data Requested WILL LOAD");

                // Set flag to make sure that items are being loaded in the correct order.
                // This is necessary due to the asyc nature of getting and adding new items
                // to the 'items' property of the RadListView that may be caused by remote server API lag.
                this._itemsLoading = true;

                setTimeout(function () {
                    let thatInstance = that.get();
                    thatInstance.addMoreItemsFromSource(1);

                    // Reset the flag to allow next calls of 'loadMoreDataRequested' to load more items
                    thatInstance._itemsLoading = false;

                    listView.notifyLoadOnDemandFinished();
                }, 1000);
            } else {
                console.log("Load More Data Requested CANNOT LOAD");

                args.returnValue = false;
                listView.notifyLoadOnDemandFinished(true);
            }
        }
    }

    public onPullToRefreshInitiated(args: ListViewEventData) {
        console.log("Pull To Refresh Initiated");
        const listView = args.object;
        const that = new WeakRef(this);
        if (this._allItems.length !== 0) {

            // Add 1 more item to the '_sourceDataItems',
            // Simulating a scenario where the 'backend' has been updated with 1 more item that could be loaded by 'load on demand'
            this.addItemsToSourceDataItems(1);

            setTimeout(function () {
                let thisInstance = that.get();
                let numberOfItemsToAdd = 1;
                for (let i = 0; i < numberOfItemsToAdd; i++) {
                    if (thisInstance._allItems.length !== 0) {
                        thisInstance._dataItems.splice(0, 0, thisInstance.getNextItemFromServer());
                    }
                }
                listView.notifyPullToRefreshFinished(thisInstance.isLoadOnDemandModeNeeded());
            }, 1000);
        } else {
            args.returnValue = false;
            listView.notifyPullToRefreshFinished(this.isLoadOnDemandModeNeeded());
        }
    }

    private isLoadOnDemandModeNeeded(): boolean {
        if (this._allItems.length !== 0) {
            return true;
        }

        return false;
    }

    private initSourceDataItems(size: number) {
        this.addItemsToSourceDataItems(size);
    }

    private addItemsToSourceDataItems(size: number) {
        for (let i = 0; i < size; i++) {
            this._sourceDataItems.push(this.getNextItemFromServer());
        }
    }

    private addMoreItemsFromSource(chunkSize: number) {
        let newItems = this._sourceDataItems.splice(0, chunkSize);
        this.dataItems.push(newItems);
    }

    private getNextItemFromServer() {
        let item = this._allItems.splice(0, 1)[0];
        let imagePath: string;
        if (androidApplication) {
            imagePath = item.image.toLowerCase();
        }
        else {
            imagePath = item.image;
        }

        return new DataItem(this._sourceDataItems.length, item.name, "This is item description", item.title, item.text, imagePath);
    }
}

export class DataItem {
    constructor(public id?: number,
        public name?: string,
        public description?: string,
        public title?: string,
        public text?: string,
        public image?: string,
        public selected?: boolean,
        public type?: string,
        public category?: string,
        public size?: number,
        public color?: string) {
    }
}

