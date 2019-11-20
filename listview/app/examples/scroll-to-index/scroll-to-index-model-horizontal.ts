import { ObservableArray } from "tns-core-modules/data/observable-array";
import { Observable } from "tns-core-modules/data/observable";
import { Frame } from "tns-core-modules/ui/frame";
import { DataItem } from "./data-item";

export class ViewModel extends Observable {
    private _options: Array<string> = ["Auto", "Start", "Center", "End"];
    private _selectionInfo;

    constructor() {
        super();
        let selectedIndex = 2;
        this._selectionInfo = {
            options: this._options,
            index: selectedIndex
        };
        this.set("myScrollPosition", this._options[selectedIndex]);
        this.dataItems = new ObservableArray<DataItem>();

        for (let i = 0; i < 100; i++) {
            this.dataItems.push(new DataItem(i, "Item " + i));
        }
    }

    get dataItems(): ObservableArray<DataItem> {
        return this.get("_dataItems");
    }

    set dataItems(value: ObservableArray<DataItem>) {
        this.set("_dataItems", value);
    }

    public updateViewModel() {
        const index: number = this._selectionInfo.index;
        switch (index) {
            case 0:
                this.set("myScrollPosition", this._options[0]);
                break;
            case 1:
                this.set("myScrollPosition", this._options[1]);
                break;
            case 2:
                this.set("myScrollPosition", this._options[2]);
                break;
            case 3:
                this.set("myScrollPosition", this._options[3]);
                break;
            default:
                break;
        }
    }


    public onOptionsTapped(args: any) {
        if (Frame.topmost().ios) {
            const navigationEntry = {
                moduleName: "navigation/options-menu/options-page",
                context: this._selectionInfo,
                animated: true
            };

            Frame.topmost().navigate(navigationEntry);
        } else {
            this.set('myScrollPosition', args.object.text);
        }
    }
}