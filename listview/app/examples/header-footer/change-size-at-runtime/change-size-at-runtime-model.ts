import { ObservableArray } from "tns-core-modules/data/observable-array";
import { Observable } from "tns-core-modules/data/observable";
import { RadListView } from "nativescript-ui-listview";

export class ViewModel extends Observable {
    constructor(public listView: RadListView) {
        super();
        this.headerTitle = "This is list header";
        this.footerTitle = "This is list footer";
        this.dataItems = new ObservableArray<DataItem>();
        for (let i = 0; i < 30; i++) {
            this.dataItems.push(new DataItem(i, "Item " + i, "This is item description."));
        }

        setTimeout(() => {
            this.isSecondVisible = true;
            if (listView.page.isLoaded) {
                listView.updateHeaderFooter();
            }
        }, 2000);
    }

    get dataItems(): ObservableArray<DataItem> {
        return this.get("_dataItems");
    }

    set dataItems(value: ObservableArray<DataItem>) {
        this.set("_dataItems", value);
    }

    get isSecondVisible(): boolean {
        return this.get("_isSecondVisible");
    }

    set isSecondVisible(value: boolean) {
        this.set("_isSecondVisible", value);
    }

    get isThirdVisible(): boolean {
        return this.get("_isThirdVisible");
    }

    set isThirdVisible(value: boolean) {
        this.set("_isThirdVisible", value);
    }

    get headerTitle(): string {
        return this.get("_headerTitle");
    }

    set headerTitle(value: string) {
        this.set("_headerTitle", value);
    }

    get footerTitle(): string {
        return this.get("_footerTitle");
    }

    set footerTitle(value: string) {
        this.set("_footerTitle", value);
    }
}

export class DataItem extends Observable {
    public id: number;
    public itemName;
    public itemDescription;

    constructor(id: number, name: string, description: string) {
        super();
        this.id = id;
        this.itemName = name;
        this.itemDescription = description;
    }
}