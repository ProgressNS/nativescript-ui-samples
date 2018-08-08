import { ObservableArray } from "tns-core-modules/data/observable-array";
import { RadAutoCompleteTextView, TokenModel } from "nativescript-ui-autocomplete";
import { Observable } from "tns-core-modules/data/observable";

export class ViewModel extends Observable {
    private currentEventNumber = 0;
    private countries = ["Australia", "Albania", "Austria", "Argentina", "Maldives", "Bulgaria", "Belgium", "Cyprus", "Italy", "Japan",
        "Denmark", "Finland", "France", "Germany", "Greece", "Hungary", "Ireland",
        "Latvia", "Luxembourg", "Macedonia", "Moldova", "Monaco", "Netherlands", "Norway",
        "Poland", "Romania", "Russia", "Sweden", "Slovenia", "Slovakia", "Turkey", "Ukraine",
        "Vatican City", "Chad", "China", "Chile"];

    constructor(args) {
        super();
        const page = args.object;
        this.initDataItems();
        this.updateEventsText();
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

    // >> autocomplete-events-ts
    public onTokenAdded(args) {
        this.logEvent("Added Token: " + args.token.text);
    }

    public onTokenRemoved(args) {
        this.logEvent("Removed Token: " + args.token.text);
    }

    public onTokenSelected(args) {
        this.logEvent("Selected Token: " + args.token.text);
    }

    public onTokenDeselected(args) {
        this.logEvent("Deselected Token: " + args.token.text);
    }

    public onDidAutoComplete(args) {
        this.logEvent("DidAutoComplete with text: " + args.text);
    }

    public onTextChanged(args) {
        this.logEvent("Text Changed: " + args.text);
    }

    public onSuggestionViewBecameVisible(args) {
        let autoComplete: RadAutoCompleteTextView = args.object;
        let numberOfItems = autoComplete.filteredItems.length;
        let eventText = numberOfItems + " Suggestions Visible";
        if (numberOfItems > 0) {
            eventText += " - First is " + autoComplete.filteredItems[0].text;
        }
        this.logEvent(eventText);
    }
    // << autocomplete-events-ts

    private updateEventsText(): void {
        let text;
        if (this.currentEventNumber > 5) {
            text = "Latest 5 fired events:";
        } else if (this.currentEventNumber === 0) {
            text = "Events will appear here:";
        } else if (this.currentEventNumber === 1) {
            text = "Fired event:";
        } else {
            text = "Fired events:";
        }
        this.set("eventsText", text);
    }

    private logEvent(eventText: string) {
        this.currentEventNumber++;
        this.updateEventsText();
        switch (this.currentEventNumber) {
            case 1: this.set("eventName1", eventText); return;
            case 2: this.set("eventName2", eventText); return;
            case 3: this.set("eventName3", eventText); return;
            case 4: this.set("eventName4", eventText); return;
            case 5: this.set("eventName5", eventText); return;
            default:
                this.set("eventName1", this.get("eventName2"));
                this.set("eventName2", this.get("eventName3"));
                this.set("eventName3", this.get("eventName4"));
                this.set("eventName4", this.get("eventName5"));
                this.set("eventName5", eventText);
        }
    }
}