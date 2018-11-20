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
        this.currentParent = new NavigationItem("DataForm", undefined, undefined);
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
        let parent = this.currentParent;
        this.buildDataFormExamples(parent);
    }

    private buildDataFormExamples(currentParent: NavigationItem) {

        let dataFormExample = new NavigationItem("Getting started", "examples/getting-started/getting-started-page", currentParent);
        currentParent.subItems.push(dataFormExample);

        dataFormExample = new NavigationItem("Getting started JSON", "examples/getting-started-json/getting-started-json-page", currentParent);
        currentParent.subItems.push(dataFormExample);

        dataFormExample = new NavigationItem("Properties", "examples/adjustment/adjustment-page", currentParent);
        currentParent.subItems.push(dataFormExample);

        dataFormExample = new NavigationItem("Properties JSON", "examples/metadata/metadata-page", currentParent);
        currentParent.subItems.push(dataFormExample);

        const editors = new NavigationItem("Editors", undefined, currentParent);
        currentParent.subItems.push(editors);
        const common = new NavigationItem("Common", "examples/editors/editors-page", editors);
        editors.subItems.push(common);
        const autocomplete = new NavigationItem("AutoComplete", "examples/editors/autocomplete/autocomplete-page", editors);
        editors.subItems.push(autocomplete);
        const labels = new NavigationItem("Labels", "examples/editors/labels/labels-page", editors);
        editors.subItems.push(labels);
        const customEditor = new NavigationItem("Custom Editors", "examples/editors/custom-editors/custom-editors-page", editors);
        editors.subItems.push(customEditor);

        const validation = new NavigationItem("Validation", undefined, currentParent);
        currentParent.subItems.push(validation);
        let selectionExample = new NavigationItem("Validators", "examples/validation/validation-page", validation);
        validation.subItems.push(selectionExample);
        selectionExample = new NavigationItem("Validation Modes", "examples/validation/validation-modes/validation-modes-page", validation);
        validation.subItems.push(selectionExample);
        selectionExample = new NavigationItem("Validation Events", "examples/validation/validation-events/validation-events-page", validation);
        validation.subItems.push(selectionExample);
        selectionExample = new NavigationItem("Validators JSON", "examples/validation/metadata/metadata-page", validation);
        validation.subItems.push(selectionExample);
        selectionExample = new NavigationItem("Async Validation", "examples/validation/async-validation/async-validation-page", validation);
        validation.subItems.push(selectionExample);
        selectionExample = new NavigationItem("Check Validation State", "examples/validation/check-errors/check-errors-page", validation);
        validation.subItems.push(selectionExample);
        selectionExample = new NavigationItem("Custom Validator", "examples/validation/custom-validator/custom-validator-page", validation);
        validation.subItems.push(selectionExample);
        selectionExample = new NavigationItem("Custom Validation", "examples/validation/custom-validation/custom-validation-page", validation);
        validation.subItems.push(selectionExample);

        dataFormExample = new NavigationItem("Commit Modes", "examples/commit-modes/commit-modes-page", currentParent);
        currentParent.subItems.push(dataFormExample);

        dataFormExample = new NavigationItem("Groups", "examples/groups/groups-page", currentParent);
        currentParent.subItems.push(dataFormExample);

        dataFormExample = new NavigationItem("Groups JSON", "examples/groups-json/groups-json-page", currentParent);
        currentParent.subItems.push(dataFormExample);

        dataFormExample = new NavigationItem("Events", "examples/events/events-page", currentParent);
        currentParent.subItems.push(dataFormExample);

        const styling = new NavigationItem("Styling", undefined, currentParent);
        currentParent.subItems.push(styling);

        dataFormExample = new NavigationItem("Common", "examples/styling/common/styling-page", styling);
        styling.subItems.push(dataFormExample);

        dataFormExample = new NavigationItem("Advanced", "examples/styling/advanced/styling-advanced-page", styling);
        styling.subItems.push(dataFormExample);

        dataFormExample = new NavigationItem("Editor Background", "examples/styling/editor-background/styling-editor-background-page", styling);
        styling.subItems.push(dataFormExample);

        dataFormExample = new NavigationItem("CSS Form", "examples/styling/css-form/css-form-page", styling);
        styling.subItems.push(dataFormExample);

        dataFormExample = new NavigationItem("CSS Editors", "examples/styling/css-editors/css-editors-page", styling);
        styling.subItems.push(dataFormExample);

        dataFormExample = new NavigationItem("At runtime", "examples/styling/editor-style/editor-style-page", styling);
        styling.subItems.push(dataFormExample);

        dataFormExample = new NavigationItem("Runtime updates", "examples/runtime-updates/runtime-updates-page", currentParent);
        currentParent.subItems.push(dataFormExample);

        dataFormExample = new NavigationItem("Platform adjustments", "examples/platform-specifics/platform-specifics-page", currentParent);
        currentParent.subItems.push(dataFormExample);

        dataFormExample = new NavigationItem("Image Labels", "examples/image-labels/image-labels-page", currentParent);
        currentParent.subItems.push(dataFormExample);

        const layouts = new NavigationItem("Layouts", undefined, currentParent);
        currentParent.subItems.push(layouts);
        let layoutsExample = new NavigationItem("Stack", "examples/layouts/stack-layout-page", layouts);
        layouts.subItems.push(layoutsExample);
        layoutsExample = new NavigationItem("Grid", "examples/layouts/grid-layout-page", layouts);
        layouts.subItems.push(layoutsExample);

        dataFormExample = new NavigationItem("Read Only", "examples/editors/readonly/editor-readonly-page", currentParent);
        currentParent.subItems.push(dataFormExample);

        const valueProviders = new NavigationItem("Value Providers", undefined, currentParent);
        currentParent.subItems.push(valueProviders);
        let providersExample = new NavigationItem("Types", "examples/value-providers/types/value-providers-types-page", valueProviders);
        valueProviders.subItems.push(providersExample);
        providersExample = new NavigationItem("Relations", "examples/value-providers/relations/value-providers-relations-page", valueProviders);
        valueProviders.subItems.push(providersExample);

        dataFormExample = new NavigationItem("Scrollable Form", "examples/scrolling/scrolling-page", currentParent);
        currentParent.subItems.push(dataFormExample);
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

        let itemIndex = args.index;
        let tappedItem = this.currentSubItems[itemIndex];
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

export let navigationModel = new NavigationViewModel();
