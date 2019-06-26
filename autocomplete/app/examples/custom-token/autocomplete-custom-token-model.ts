import { ObservableArray } from "tns-core-modules/data/observable-array";
import { TokenModel, AutoCompleteEventData } from "nativescript-ui-autocomplete";
import { Observable } from "tns-core-modules/data/observable";
import { default as data } from "./cities";

export class ViewModel extends Observable {
    constructor() {
        super();
        this.initDataItems();
    }

    get dataItems(): ObservableArray<TokenModel> {
        return this.get("_dataItems");
    }

    set dataItems(value: ObservableArray<TokenModel>) {
        this.set("_dataItems", value);
    }

    // >> autocomplete-custom-tokens-items-ts
    private initDataItems() {
        if (!this.dataItems) {
            this.dataItems = new ObservableArray<CityModel>();
            for (let i = 0; i < data.items.length; i++) {
                const d = data.items[i].flag;
                const ds = "res://" + d;
                this.dataItems.push(new CityModel(data.items[i].id, data.items[i].city, data.items[i].country, ds));
            }
        }
    }
    // << autocomplete-custom-tokens-items-ts

    public onTokenAdded(args: AutoCompleteEventData) {
        console.log("Added Token: " + args.token);
    }

    public onTokenRemoved(args: AutoCompleteEventData) {
        console.log("Removed Token: " + args.token);
    }

    public onTokenSelected(args: AutoCompleteEventData) {
        console.log("Selected Token: " + args.token);
    }

    public onTokenDeselected(args: AutoCompleteEventData) {
        console.log("Deselected Token: " + args.token);
    }
}

// >> autocomplete-custom-token-model-ts
export class CityModel extends TokenModel {
    public id: number;
    public city: string;
    public country: string;
    constructor(id: number, city: string, country: string, image: string) {
        super(city + ", " + country, image);

        this.id = id;
        this.city = city;
        this.country = country;
    }

    toString() {
        return this.id + ": " + this.city + ", " + this.country;
    }
}
// << autocomplete-custom-token-model-ts