import { ObservableArray } from "tns-core-modules/data/observable-array";
import { TokenModel } from "nativescript-ui-autocomplete";
import { Observable } from "tns-core-modules/data/observable";

export class ViewModel extends Observable {
    private autocomplete;
    private countries = ["Australia", "Albania", "Austria", "Argentina", "Maldives", "Bulgaria", "Belgium", "Cyprus", "Italy", "Japan",
        "Denmark", "Finland", "France", "Germany", "Greece", "Hungary", "Ireland",
        "Latvia", "Luxembourg", "Macedonia", "Moldova", "Monaco", "Netherlands", "Norway",
        "Poland", "Romania", "Russia", "Sweden", "Slovenia", "Slovakia", "Turkey", "Ukraine",
        "Vatican City", "Chad", "China", "Chile"];

    constructor(args) {
        super();
        const page = args.object;
        this.autocomplete = page.getViewById("autocomplete");
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

        for (let i = 0; i < this.countries.length; i++) {
            this.dataItems.push(new TokenModel(this.countries[i], undefined));
        }
    }

    public onSuggestSelected(args) {
        this.autocomplete.suggestMode = "Suggest";
        this.autocomplete.resetAutocomplete();
    }

    public onAppendSelected(args) {
        this.autocomplete.suggestMode = "Append";
        this.autocomplete.completionMode = "StartsWith";
        this.autocomplete.resetAutocomplete();
    }

    public onSuggestAppendSelected(args) {
        this.autocomplete.suggestMode = "SuggestAppend";
        this.autocomplete.completionMode = "StartsWith";
        this.autocomplete.resetAutocomplete();
    }

    public onStartsWithSelected(args) {
        this.autocomplete.completionMode = "StartsWith";
        this.autocomplete.resetAutocomplete();
    }

    public onContainsSelected(args) {
        this.autocomplete.completionMode = "Contains";
        this.autocomplete.suggestMode = "Suggest";
        this.autocomplete.resetAutocomplete();
    }

    public onPlainSelected(args) {
        this.autocomplete.displayMode = "Plain";
        this.autocomplete.resetAutocomplete();
    }

    public onTokensSelected(args) {
        this.autocomplete.displayMode = "Tokens";
        this.autocomplete.resetAutocomplete();
    }
}
