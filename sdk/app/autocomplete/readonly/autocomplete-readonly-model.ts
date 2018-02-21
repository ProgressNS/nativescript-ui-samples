import { ObservableArray } from "tns-core-modules/data/observable-array";
import { TokenModel, RadAutoCompleteTextView } from "nativescript-ui-autocomplete";
import { Observable } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";

export class ViewModel extends Observable {
    private autoToken: RadAutoCompleteTextView;
    private autoPlain: RadAutoCompleteTextView;
    private countries = ["Australia", "Albania", "Austria", "Argentina", "Maldives", "Bulgaria", "Belgium", "Cyprus", "Italy", "Japan",
        "Denmark", "Finland", "France", "Germany", "Greece", "Hungary", "Ireland",
        "Latvia", "Luxembourg", "Macedonia", "Moldova", "Monaco", "Netherlands", "Norway",
        "Poland", "Romania", "Russia", "Sweden", "Slovenia", "Slovakia", "Turkey", "Ukraine",
        "Vatican City", "Chad", "China", "Chile"];

    constructor(args) {
        super();
        var page = args.object as Page;
        this.autoToken = page.getViewById<RadAutoCompleteTextView>("autoToken");
        this.autoPlain = page.getViewById<RadAutoCompleteTextView>("autoPlain");
        this.initDataItems();
    }

    get dataItems(): ObservableArray<TokenModel> {
        return this.get("_dataItems");
    }

    set dataItems(value: ObservableArray<TokenModel>) {
        this.set("_dataItems", value);
    }

    private initDataItems() {
        this.dataItems = new ObservableArray<TokenModel>();

        for (var i = 0; i < this.countries.length; i++) {
            this.dataItems.push(new TokenModel(this.countries[i], undefined));
        }
    }

    public onSetTrue(args) {
        this.autoToken.readOnly = true;
        this.autoPlain.readOnly = true;
    }

    public onSetFalse(args) {
        this.autoToken.readOnly = false;
        this.autoPlain.readOnly = false;
    }
}
