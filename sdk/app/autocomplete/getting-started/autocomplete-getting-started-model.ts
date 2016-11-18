import {ObservableArray} from "data/observable-array";
import autocompleteModule = require("nativescript-telerik-ui-pro/autocomplete");

export class ViewModel {

    private _items: ObservableArray<autocompleteModule.TokenModel>;
    private autocmp;
    private countries = ["Australia", "Albania","Austria", "Argentina", "Maldives","Bulgaria","Belgium","Cyprus","Italy","Japan",
                                        "Denmark","Finland","France","Germany","Greece","Hungary","Ireland",
                                        "Latvia","Luxembourg","Macedonia","Moldova","Monaco","Netherlands","Norway",
                                        "Poland","Romania","Russia","Sweden","Slovenia","Slovakia","Turkey","Ukraine",
                                        "Vatican City", "Chad", "China", "Chile"];

    constructor(args) {
        var page = args.object;
        this.autocmp = page.getViewById("autocmp");
        this.initDataItems();
    }

    get dataItems() {
        return this._items;
    }

    private initDataItems() {
        this._items = new ObservableArray<autocompleteModule.TokenModel>();

        for (var i = 0; i < this.countries.length; i++) {
            this._items.push(new autocompleteModule.TokenModel(this.countries[i],undefined));
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
