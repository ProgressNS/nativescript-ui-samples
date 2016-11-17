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

    public onHorizontalSelected(args) {
        this.autocmp.layoutMode = "Horizontal";
        this.autocmp.resetAutocomplete();
    }

    public onWrapSelected(args) {
        this.autocmp.layoutMode = "Wrap";
        this.autocmp.resetAutocomplete();
    }
}