import { ObservableArray } from "tns-core-modules/data/observable-array";
import { TokenModel } from "nativescript-ui-autocomplete";
import { Observable } from "tns-core-modules/data/observable";

export class ViewModel extends Observable {
    private autocmp;
    private countries = ["Australia", "Albania", "Austria", "Argentina", "Maldives", "Bulgaria", "Belgium", "Cyprus", "Italy", "Japan",
        "Denmark", "Finland", "France", "Germany", "Greece", "Hungary", "Ireland",
        "Latvia", "Luxembourg", "Macedonia", "Moldova", "Monaco", "Netherlands", "Norway",
        "Poland", "Romania", "Russia", "Sweden", "Slovenia", "Slovakia", "Turkey", "Ukraine",
        "Vatican City", "Chad", "China", "Chile"];

    constructor(args) {
        super();
        var page = args.object;
        this.autocmp = page.getViewById("autocmp");
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

    public onSuggestSelected(args) {
        this.autocmp.suggestMode = "Suggest";
        this.autocmp.resetAutocomplete();
    }

    public onAppendSelected(args) {
        this.autocmp.suggestMode = "Append";
        this.autocmp.completionMode = "StartsWith";
        this.autocmp.resetAutocomplete();
    }

    public onSuggestAppendSelected(args) {
        this.autocmp.suggestMode = "SuggestAppend";
        this.autocmp.completionMode = "StartsWith";
        this.autocmp.resetAutocomplete();
    }

    public onStartsWithSelected(args) {
        this.autocmp.completionMode = "StartsWith";
        this.autocmp.resetAutocomplete();
    }

    public onContainsSelected(args) {
        this.autocmp.completionMode = "Contains";
        this.autocmp.suggestMode = "Suggest";
        this.autocmp.resetAutocomplete();
    }

    public onPlainSelected(args) {
        this.autocmp.displayMode = "Plain";
        this.autocmp.resetAutocomplete();
    }

    public onTokensSelected(args) {
        this.autocmp.displayMode = "Tokens";
        this.autocmp.resetAutocomplete();
    }
}
