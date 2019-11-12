import { Observable } from "tns-core-modules/data/observable";
import { Frame } from "tns-core-modules/ui/frame";
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
        this.currentParent = new NavigationItem("ListView", undefined, undefined);
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
        this.buildListViewExamples(parent);
    }


    private buildListViewExamples(currentParent: NavigationItem) {
        let exampleItem = new NavigationItem("Getting Started", "examples/getting-started/getting-started-page", currentParent);
        currentParent.subItems.push(exampleItem);
        exampleItem = new NavigationItem("Getting Started Horizontal", "examples/getting-started-horizontal/getting-started-horizontal-page", currentParent);
        currentParent.subItems.push(exampleItem);

        exampleItem = new NavigationItem("Initially load 10 000 items", "examples/with-big-data/with-big-data-page", currentParent);
        currentParent.subItems.push(exampleItem);

        // Data operations
        let dataOperations = new NavigationItem("Data Operations", undefined, currentParent);
        currentParent.subItems.push(dataOperations);
        exampleItem = new NavigationItem("Filtering", "examples/filtering/filtering-page", dataOperations);
        dataOperations.subItems.push(exampleItem);
        exampleItem = new NavigationItem("Sorting", "examples/sorting/sorting-page", dataOperations);
        dataOperations.subItems.push(exampleItem);
        exampleItem = new NavigationItem("Grouping", "examples/grouping/grouping-page", dataOperations);
        dataOperations.subItems.push(exampleItem);
        exampleItem = new NavigationItem("Grouping with Scroll to Index", "examples/grouping/grouping-scroll-page", dataOperations);
        dataOperations.subItems.push(exampleItem);
        exampleItem = new NavigationItem("Grouping with header/footer", "examples/grouping/grouping-with-header-footer-page", dataOperations);
        dataOperations.subItems.push(exampleItem);
        exampleItem = new NavigationItem("Grouping with Multiple Templates", "examples/grouping-multiple-templates/grouping-multiple-templates-page", dataOperations);
        dataOperations.subItems.push(exampleItem);
        if (isAndroid) {
            exampleItem = new NavigationItem("Collapsible Grouping", "examples/grouping/grouping-collapsible-page", dataOperations);
            dataOperations.subItems.push(exampleItem);
        }

        exampleItem = new NavigationItem("Multiple operations", "examples/multiple-data-operations/multiple-data-operations-page", dataOperations);
        dataOperations.subItems.push(exampleItem);
        exampleItem = new NavigationItem("With Swipe", "examples/multiple-operations-with-swipe/multiple-operations-with-swipe-page", dataOperations);
        dataOperations.subItems.push(exampleItem);

        exampleItem = new NavigationItem("Multiple Item Templates", "examples/multiple-templates/multiple-templates-page", currentParent);
        currentParent.subItems.push(exampleItem);

        exampleItem = new NavigationItem("Item Loading", "examples/item-loading/item-loading-page", currentParent);
        currentParent.subItems.push(exampleItem);

        exampleItem = new NavigationItem("Item Animations", "examples/item-animations/item-animations-page", currentParent);
        currentParent.subItems.push(exampleItem);

        // Layouts
        let layoutsItem = new NavigationItem("Item Layouts", undefined, currentParent);
        currentParent.subItems.push(layoutsItem);
        let layoutsExample = new NavigationItem("Linear", "examples/item-layouts/item-layouts-linear-page", layoutsItem);
        layoutsItem.subItems.push(layoutsExample);
        layoutsExample = new NavigationItem("Grid with item height", "examples/item-layouts/item-layouts-grid-page", layoutsItem);
        layoutsItem.subItems.push(layoutsExample);
        layoutsExample = new NavigationItem("Grid without item height", "examples/item-layouts/item-layouts-grid-no-height-page", layoutsItem);
        layoutsItem.subItems.push(layoutsExample);
        layoutsExample = new NavigationItem("Staggered", "examples/item-layouts/item-layouts-staggered-page", layoutsItem);
        layoutsItem.subItems.push(layoutsExample);
        layoutsExample = new NavigationItem("Change at runtime", "examples/item-layouts/item-layouts-runtime-page", layoutsItem);
        layoutsItem.subItems.push(layoutsExample);

        // Item reorder
        exampleItem = new NavigationItem("Item Reorder", "examples/item-reorder/item-reorder-page", currentParent);
        currentParent.subItems.push(exampleItem);

        exampleItem = new NavigationItem("Item Reorder with handle", "examples/item-reorder/item-reorder-handle-page", currentParent);
        currentParent.subItems.push(exampleItem);

        // Selection
        let selectionItem = new NavigationItem("Selection", undefined, currentParent);
        currentParent.subItems.push(selectionItem);
        let selectionExample = new NavigationItem("Single Selection", "examples/listview-selection/single-selection-page", selectionItem);
        selectionItem.subItems.push(selectionExample);
        selectionExample = new NavigationItem("Multiple Selection", "examples/listview-selection/multiple-selection-page", selectionItem);
        selectionItem.subItems.push(selectionExample);
        selectionExample = new NavigationItem("Programmatic Selection", "examples/listview-selection/programmatic-selection-page", selectionItem);
        selectionItem.subItems.push(selectionExample);
        selectionExample = new NavigationItem("Selection states", "examples/selection-states/selection-states-page", selectionItem);
        selectionItem.subItems.push(selectionExample);
        selectionExample = new NavigationItem("Styling Single Selection", "examples/listview-selection/styling-single-selection-page", selectionItem);
        selectionItem.subItems.push(selectionExample);
        selectionExample = new NavigationItem("Styling Multiple Selection", "examples/listview-selection/styling-multiple-selection-page", selectionItem);
        selectionItem.subItems.push(selectionExample);

        let demand = new NavigationItem("Load on Demand", undefined, currentParent);
        currentParent.subItems.push(demand);
        let loadOnDemandExample = new NavigationItem("Manual with Fixed Item Size", "examples/load-on-demand/fixed-size-manual/fixed-size-manual-page", demand);
        demand.subItems.push(loadOnDemandExample);
        loadOnDemandExample = new NavigationItem("Auto with Fixed Item Size", "examples/load-on-demand/fixed-size-auto/fixed-size-auto-page", demand);
        demand.subItems.push(loadOnDemandExample);
        loadOnDemandExample = new NavigationItem("Manual with Variable Item Size", "examples/load-on-demand/dynamic-size-manual/dynamic-size-manual-page", demand);
        demand.subItems.push(loadOnDemandExample);
        loadOnDemandExample = new NavigationItem("Auto with Variable Item Size", "examples/load-on-demand/dynamic-size-auto/dynamic-size-auto-page", demand);
        demand.subItems.push(loadOnDemandExample);
        loadOnDemandExample = new NavigationItem("With small source and pull to refresh", "examples/load-on-demand/fixed-size-auto-with-small-source/fixed-size-auto-with-small-source-page", demand);
        demand.subItems.push(loadOnDemandExample);

        exampleItem = new NavigationItem("Observable Array", "examples/observable-array/observable-array-page", currentParent);
        currentParent.subItems.push(exampleItem);

        let pullToRefresh = new NavigationItem("Pull to Refresh", undefined, currentParent);
        currentParent.subItems.push(pullToRefresh);
        let pullToRefreshExample = new NavigationItem("Getting Started", "examples/pull-to-refresh/getting-started/pull-to-refresh-page", pullToRefresh);
        pullToRefresh.subItems.push(pullToRefreshExample);
        pullToRefreshExample = new NavigationItem("Customize indicator/background", "examples/pull-to-refresh/customize/pull-to-refresh-customize-page", pullToRefresh);
        pullToRefresh.subItems.push(pullToRefreshExample);

        // Swipe actions
        let swipeActions = new NavigationItem("Swipe actions", undefined, currentParent);
        currentParent.subItems.push(swipeActions);
        exampleItem = new NavigationItem("Getting started", "examples/swipe-actions/swipe-actions-page", swipeActions);
        swipeActions.subItems.push(exampleItem);

        exampleItem = new NavigationItem("Animated thresholds", "examples/swipe-actions/swipe-actions-thresholds-page", swipeActions);
        swipeActions.subItems.push(exampleItem);

        exampleItem = new NavigationItem("Multiple actions", "examples/swipe-actions/swipe-actions-multiple-page", swipeActions);
        swipeActions.subItems.push(exampleItem);

        exampleItem = new NavigationItem("Disable\\Enable", "examples/swipe-actions/swipe-disable-page", swipeActions);
        swipeActions.subItems.push(exampleItem);

        // Header and footer
        let headerFooterExamples = new NavigationItem("Header and Footer", undefined, currentParent);
        currentParent.subItems.push(headerFooterExamples);
        exampleItem = new NavigationItem("Auto height", "examples/header-footer/auto-size/auto-size-page", headerFooterExamples);
        headerFooterExamples.subItems.push(exampleItem);
        exampleItem = new NavigationItem("Big header", "examples/header-footer/big-header/big-header-page", headerFooterExamples);
        headerFooterExamples.subItems.push(exampleItem);
        exampleItem = new NavigationItem("Big footer", "examples/header-footer/big-footer/big-footer-page", headerFooterExamples);
        headerFooterExamples.subItems.push(exampleItem);
        exampleItem = new NavigationItem("Change at runtime", "examples/header-footer/change-size-at-runtime/change-size-at-runtime-page", headerFooterExamples);
        headerFooterExamples.subItems.push(exampleItem);

        // Scroll to index
        let scrollToIndex = new NavigationItem("Scroll to index", undefined, currentParent);
        currentParent.subItems.push(scrollToIndex);
        let scrollExample = new NavigationItem("In vertical direction", "examples/scroll-to-index/scroll-to-index-vertical-page", scrollToIndex);
        scrollToIndex.subItems.push(scrollExample);
        scrollExample = new NavigationItem("In horizontal direction", "examples/scroll-to-index/scroll-to-index-horizontal-page", scrollToIndex);
        scrollToIndex.subItems.push(scrollExample);
        scrollExample = new NavigationItem("Initially scrolled", "examples/scroll-to-index/scroll-to-index-initial-page", scrollToIndex);
        scrollToIndex.subItems.push(scrollExample);

        // Scroll events
        exampleItem = new NavigationItem("Scroll Events", "examples/scroll-events/scroll-events-page", currentParent);
        currentParent.subItems.push(exampleItem);

        exampleItem = new NavigationItem("Horizontal with variable item's width", "examples/horizontal-with-variable-item-width/horizontal-with-variable-item-width-page", currentParent);
        currentParent.subItems.push(exampleItem);

        exampleItem = new NavigationItem("Group, Swipe, Load and Pull", "examples/group-swipe-load-pull/group-swipe-load-pull-page", currentParent);
        currentParent.subItems.push(exampleItem);

        exampleItem = new NavigationItem("Get first visible index", "examples/first-visible-index/first-visible-index-page", currentParent);
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

        let itemIndex = args.index;
        let tappedItem = this.currentSubItems[itemIndex];
        if (tappedItem.module === undefined) {
            this.hasBackNavigation = tappedItem.parent !== undefined;
            this.currentParent = tappedItem;
        }

        if (tappedItem.subItems.length > 0) {
            Frame.topmost().navigate({
                moduleName: "navigation/category-list-page"
            });
        } else {
            if (tappedItem.module) {
                Frame.topmost().navigate({
                    moduleName: tappedItem.module,
                    context: tappedItem
                });
            }
        }
    }
}

export let navigationModel = new NavigationViewModel();
