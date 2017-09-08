import { ObservableArray } from "tns-core-modules/data/observable-array";
import { Observable } from "tns-core-modules/data/observable";
import frameModule = require("tns-core-modules/ui/frame");
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

        for (var i = 0; i < 100; i++) {
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
        var index: number = this._selectionInfo.index;
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
        if (frameModule.topmost().ios) {
            var navigationEntry = {
                moduleName: "./navigation/options-menu/options",
                context: this._selectionInfo,
                animated: true
            };

            frameModule.topmost().navigate(navigationEntry);
        } else {
            this.set('myScrollPosition', args.object.text);
        }
    }
}