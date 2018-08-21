import { ObservableArray } from "tns-core-modules/data/observable-array";
import { TokenModel, RadAutoCompleteTextView } from "nativescript-ui-autocomplete";
import { Observable } from "tns-core-modules/data/observable";

export class ViewModel extends Observable {
    private autoComplete: RadAutoCompleteTextView;
    private countries = ["Australia", "Albania", "Austria", "Argentina", "Maldives", "Bulgaria", "Belgium", "Cyprus", "Italy", "Japan",
        "Denmark", "Finland", "France", "Germany", "Greece", "Hungary", "Ireland",
        "Latvia", "Luxembourg", "Macedonia", "Moldova", "Monaco", "Netherlands", "Norway",
        "Poland", "Romania", "Russia", "Sweden", "Slovenia", "Slovakia", "Turkey", "Ukraine",
        "Vatican City", "Chad", "China", "Chile"];
    private lastIndex: number;

    constructor(args) {
        super();
        const page = args.object;
        this.autoComplete = page.getViewById("autocomplete");
        this.initDataItems();

        this.autoComplete.addToken(this.dataItems.getItem(0));
        this.autoComplete.addToken(this.dataItems.getItem(1));
        this.autoComplete.addToken(this.dataItems.getItem(2));
        this.lastIndex = 3;
    }

    get dataItems(): ObservableArray<TokenModel> {
        return this.get("_dataItems");
    }

    set dataItems(value: ObservableArray<TokenModel>) {
        this.set("_dataItems", value);
    }

    private initDataItems() {
        this.dataItems = new ObservableArray<TokenModel>();

        for (let i = 0; i < this.countries.length; i++) {
            this.dataItems.push(new TokenModel(this.countries[i], undefined));
        }
    }

    public onAddToken(args) {
        if (this.dataItems.length <= this.lastIndex) {
            this.lastIndex = 0;
        }

        this.autoComplete.addToken(this.dataItems.getItem(this.lastIndex));
        this.lastIndex++;
    }
}
