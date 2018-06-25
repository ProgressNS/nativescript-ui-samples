import { ObservableArray } from "tns-core-modules/data/observable-array";
import { Observable } from "tns-core-modules/data/observable";

const posts = require("./posts.json");

export class ViewModel extends Observable {
    constructor() {
        super();
        this.initDataItems();
        this.enabled = true;
    }

    get dataItems(): ObservableArray<DataItem> {
        return this.get("_dataItems");
    }

    set dataItems(value: ObservableArray<DataItem>) {
        this.set("_dataItems", value);
    }

    get enabled(): boolean {
        return this.get("_enabled");
    }

    set enabled(value: boolean) {
        this.set("_enabled", value);
        this.updateStatusText();
    }

    get _currentStatus(): string {
        return this.get("currentStatus");
    }

    set _currentStatus(value: string) {
        this.set("currentStatus", value);
    }

    private initDataItems() {
        this.dataItems = new ObservableArray<DataItem>();

        for (let i = 0; i < posts.names.length; i++) {
            this.dataItems.push(new DataItem(posts.names[i], posts.titles[i], posts.text[i]));
        }
    }

    private updateStatusText() {
        this._currentStatus = !this.enabled ? "Enable" : "Disable";
    }
}

export class DataItem {
    public name;
    public title;
    public text;

    constructor(name: string, title: string, text: string) {
        this.name = name;
        this.text = text;
        this.title = title;
    }
}
