import { ObservableArray } from "tns-core-modules/data/observable-array";
import { TokenModel, RadAutoCompleteTextView, AutoCompleteDisplayMode, AutoCompleteSuggestMode, AutoCompleteCompletionMode } from "nativescript-ui-autocomplete";
import { Observable } from "tns-core-modules/data/observable";

export class ViewModel extends Observable {
    private autocomplete: RadAutoCompleteTextView;
    private countries = ["Australia", "Albania", "Austria", "Argentina", "Maldives", "Bulgaria", "Belgium", "Cyprus", "Italy", "Japan",
        "Denmark", "Finland", "France", "Germany", "Greece", "Hungary", "Ireland",
        "Latvia", "Luxembourg", "Macedonia", "Moldova", "Monaco", "Netherlands", "Norway",
        "Poland", "Romania", "Russia", "Sweden", "Slovenia", "Slovakia", "Turkey", "Ukraine",
        "Vatican City", "Chad", "China", "Chile"];

    constructor(args) {
        super();
        const page = args.object;
        this.autocomplete = <RadAutoCompleteTextView>page.getViewById("autocomplete");
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
        this.autocomplete.suggestMode = AutoCompleteSuggestMode.Suggest;
        this.autocomplete.resetAutoComplete();
    }

    public onAppendSelected(args) {
        this.autocomplete.suggestMode = AutoCompleteSuggestMode.Append;
        this.autocomplete.completionMode = AutoCompleteCompletionMode.StartsWith;
        this.autocomplete.resetAutoComplete();
    }

    public onSuggestAppendSelected(args) {
        this.autocomplete.suggestMode = AutoCompleteSuggestMode.SuggestAppend;
        this.autocomplete.completionMode = AutoCompleteCompletionMode.StartsWith;
        this.autocomplete.resetAutoComplete();
    }

    public onStartsWithSelected(args) {
        this.autocomplete.completionMode = AutoCompleteCompletionMode.StartsWith;
        this.autocomplete.resetAutoComplete();
    }

    public onContainsSelected(args) {
        this.autocomplete.completionMode = AutoCompleteCompletionMode.Contains;
        this.autocomplete.suggestMode = AutoCompleteSuggestMode.Suggest;
        this.autocomplete.resetAutoComplete();
    }

    public onPlainSelected(args) {
        this.autocomplete.displayMode = AutoCompleteDisplayMode.Plain;
        this.autocomplete.resetAutoComplete();
    }

    public onTokensSelected(args) {
        this.autocomplete.displayMode = AutoCompleteDisplayMode.Tokens;
        this.autocomplete.resetAutoComplete();
    }
}
