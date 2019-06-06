import { Observable } from "tns-core-modules/data/observable";
import { topmost } from "tns-core-modules/ui/frame";
import { isAndroid } from "tns-core-modules/platform/platform";

export class NavigationItem {
    private _subItems: Array<NavigationItem>;
    private _title: string;
    private _module: string;
    private _parent: NavigationItem;

    constructor(title: string, module: string, parent: NavigationItem) {
        this._title = title;
        this._parent = parent;
        this._module = module;
        this._subItems = new Array<NavigationItem>();
    }

    get subItems(): Array<NavigationItem> {
        return this._subItems;
    }

    get title() {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get module() {
        return this._module;
    }

    set module(value: string) {
        this._module = value;
    }

    get parent() {
        return this._parent;
    }
}

export class NavigationViewModel extends Observable {

    private _lastTappedItem;
    private _currentSubItems: Array<NavigationItem>;
    private _currentNavItem: NavigationItem;
    private _hasBack: boolean;

    constructor() {
        super();
        this.currentParent = new NavigationItem("AutoComplete", undefined, undefined);
        this.buildComponentList();
        this.currentSubItems = this.currentParent.subItems;
        this.hasBackNavigation = false;
    }

    get currentSubItems(): Array<NavigationItem> {
        return this._currentSubItems;
    }

    set currentSubItems(value: Array<NavigationItem>) {
        this._currentSubItems = value;
    }

    get currentParent() {
        return this._currentNavItem;
    }

    set currentParent(value: NavigationItem) {
        this._currentNavItem = value;
    }

    get hasBackNavigation() {
        return this._hasBack;
    }

    set hasBackNavigation(value: boolean) {
        this._hasBack = value;
    }

    private buildComponentList() {
        const parent = this.currentParent;
        this.buildAutoCompleteExamples(parent);
    }

    private buildAutoCompleteExamples(currentParent: NavigationItem) {
        // var currentParent = new NavigationItem("AutoCompleteTextView", undefined, currentParent);
        // currentParent.subItems.push(currentParent);
        let exampleItem = new NavigationItem("Getting started", "examples/getting-started/autocomplete-getting-started-page", currentParent);
        currentParent.subItems.push(exampleItem);

        const completionModes = new NavigationItem("Completion modes", undefined, currentParent);
        currentParent.subItems.push(completionModes);

        exampleItem = new NavigationItem("Contains", "examples/completion-mode/autocomplete-contains-page", completionModes);
        completionModes.subItems.push(exampleItem);
        exampleItem = new NavigationItem("Starts with", "examples/completion-mode/autocomplete-startswith-page", completionModes);
        completionModes.subItems.push(exampleItem);

        const displayModes = new NavigationItem("Display modes", undefined, currentParent);
        currentParent.subItems.push(displayModes);

        exampleItem = new NavigationItem("Tokens", "examples/display-mode/autocomplete-tokens-page", displayModes);
        displayModes.subItems.push(exampleItem);
        exampleItem = new NavigationItem("Plain", "examples/display-mode/autocomplete-plain-page", displayModes);
        displayModes.subItems.push(exampleItem);

        const layoutModes = new NavigationItem("Token Layouts", undefined, currentParent);
        currentParent.subItems.push(layoutModes);

        exampleItem = new NavigationItem("Switching at runtime", "examples/layouts/autocomplete-runtime-page", layoutModes);
        layoutModes.subItems.push(exampleItem);
        exampleItem = new NavigationItem("Horizontal", "examples/layouts/autocomplete-horizontal-page", layoutModes);
        layoutModes.subItems.push(exampleItem);
        exampleItem = new NavigationItem("Wrap", "examples/layouts/autocomplete-wrap-page", layoutModes);
        layoutModes.subItems.push(exampleItem);

        const suggestModes = new NavigationItem("Suggest Mode", undefined, currentParent);
        currentParent.subItems.push(suggestModes);

        exampleItem = new NavigationItem("Append", "examples/suggest-mode/autocomplete-append-page", suggestModes);
        suggestModes.subItems.push(exampleItem);
        exampleItem = new NavigationItem("Suggest", "examples/suggest-mode/autocomplete-suggest-page", suggestModes);
        suggestModes.subItems.push(exampleItem);
        exampleItem = new NavigationItem("Suggest & Append", "examples/suggest-mode/autocomplete-suggest-append-page", suggestModes);
        suggestModes.subItems.push(exampleItem);

        exampleItem = new NavigationItem("Customization", "examples/customization/autocomplete-customization-page", currentParent);
        currentParent.subItems.push(exampleItem);

        exampleItem = new NavigationItem("Events", "examples/events/autocomplete-events-page", currentParent);
        currentParent.subItems.push(exampleItem);

        exampleItem = new NavigationItem("Async Data Fetch", "examples/remote-data-fetch/autocomplete-remote-page", currentParent);
        currentParent.subItems.push(exampleItem);

        exampleItem = new NavigationItem("Read Only", "examples/readonly/autocomplete-readonly-page", currentParent);
        currentParent.subItems.push(exampleItem);

        exampleItem = new NavigationItem("Hint", "examples/hint/autocomplete-hint-page", currentParent);
        currentParent.subItems.push(exampleItem);

        exampleItem = new NavigationItem("Preselected items", "examples/preselected-tokens/autocomplete-preselected-tokens-page", currentParent);
        currentParent.subItems.push(exampleItem);

        exampleItem = new NavigationItem("Custom Token Model", "examples/custom-token/autocomplete-custom-token-page", currentParent);
        currentParent.subItems.push(exampleItem);
    }

    public canMoveBack(): boolean {
        return this.hasBackNavigation;
    }

    public moveBack() {
        this.currentParent = this.currentParent.parent;
        this.hasBackNavigation = this.currentParent.parent !== undefined;
    }

    public initModelData() {
        if (this.currentParent && this.currentParent.module === undefined) {
            this.currentSubItems = this.currentParent.subItems;
        }
    }

    public onNavigationItemTap(args) {

        const itemIndex = args.index;
        const tappedItem = this.currentSubItems[itemIndex];

        if (!tappedItem) {
            return;
        }

        if (tappedItem.module === undefined) {
            this.hasBackNavigation = tappedItem.parent !== undefined;
            this.currentParent = tappedItem;
        }

        if (tappedItem.subItems.length > 0) {
            topmost().navigate({
                moduleName: "navigation/category-list-page"
            });
        } else {
            if (tappedItem.module) {
                topmost().navigate({
                    moduleName: tappedItem.module,
                    context: tappedItem
                });
            }
        }
    }
}

export const navigationModel = new NavigationViewModel();
