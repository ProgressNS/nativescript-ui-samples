import observableModule = require("data/observable");
import frameModule = require("ui/frame");

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

export class NavigationViewModel extends observableModule.Observable {

    private _lastTappedItem;

    constructor() {
        super();
        this.currentParent = new NavigationItem("SDK Examples", undefined, undefined);
        this.buildComponentList();
        this.currentSubItems = this.currentParent.subItems;
        this.hasBackNavigation = false;
    }

    get currentSubItems(): Array<NavigationItem> {
        return this.get("_currentSubItems");
    }

    set currentSubItems(value: Array<NavigationItem>) {
        this.set("_currentSubItems", value);
    }

    get currentParent() {
        return this.get("_currentNavItem");
    }

    set currentParent(value: NavigationItem) {
        this.set("_currentNavItem", value);
    }

    private buildComponentList() {
        var parent = this.currentParent;
        this.buildChartExamples(parent);
        this.buildListViewExamples(parent);
        this.buildSideDrawerExamples(parent);
        this.buildCalendarExamples(parent);
        this.buildFeedbackExamples(parent);
        this.buildDataFormExamples(parent);
        this.buildAutoCompleteExamples(parent);
        this.buildGaugesExamples(parent);
    }

    private buildFeedbackExamples(currentParent: NavigationItem) {
        var feedbackRoot = new NavigationItem("Feedback", undefined, currentParent);
        currentParent.subItems.push(feedbackRoot);
        var calendarExample = new NavigationItem("Getting started", "./feedback/getting-started/getting-started", feedbackRoot);
        feedbackRoot.subItems.push(calendarExample);
    }

    private buildCalendarExamples(currentParent: NavigationItem) {
        var calendarRoot = new NavigationItem("Calendar", undefined, currentParent);
        currentParent.subItems.push(calendarRoot);
        var calendarExample = new NavigationItem("Getting started", "./calendar/getting-started/getting-started", calendarRoot);
        calendarRoot.subItems.push(calendarExample);

        calendarExample = new NavigationItem("Handling Events", "./calendar/events/events", calendarRoot);
        calendarRoot.subItems.push(calendarExample);

        calendarExample = new NavigationItem("Populating with data", "./calendar/populating-with-data/populating-with-data", calendarRoot);
        calendarRoot.subItems.push(calendarExample);

        calendarExample = new NavigationItem("Programatic control", "./calendar/programatic-control/programatic-control", calendarRoot);
        calendarRoot.subItems.push(calendarExample);

        calendarExample = new NavigationItem("Selection modes", "./calendar/selection-modes/selection-modes", calendarRoot);
        calendarRoot.subItems.push(calendarExample);

        calendarExample = new NavigationItem("View modes", "./calendar/view-modes/view-modes", calendarRoot);
        calendarRoot.subItems.push(calendarExample);

        calendarExample = new NavigationItem("Transition modes", "./calendar/transition-modes/transition-modes", calendarRoot);
        calendarRoot.subItems.push(calendarExample);

        calendarExample = new NavigationItem("Events source", "./calendar/calendar-events/events-source", calendarRoot);
        calendarRoot.subItems.push(calendarExample);

        calendarExample = new NavigationItem("Events view modes", "./calendar/calendar-events/events-view-modes", calendarRoot);
        calendarRoot.subItems.push(calendarExample);

        calendarExample = new NavigationItem("Calendar styling", "./calendar/cell-styling/cell-styles", calendarRoot);
        calendarRoot.subItems.push(calendarExample);
    }

    private buildDataFormExamples(currentParent: NavigationItem) {
        var dataFormRoot = new NavigationItem("DataForm", undefined, currentParent);
        currentParent.subItems.push(dataFormRoot);

        var dataFormExample = new NavigationItem("Getting started", "./dataform/getting-started/getting-started", dataFormRoot);
        dataFormRoot.subItems.push(dataFormExample);

        dataFormExample = new NavigationItem("Getting started JSON", "./dataform/getting-started-json/getting-started-json", dataFormRoot);
        dataFormRoot.subItems.push(dataFormExample);

        dataFormExample = new NavigationItem("Properties", "./dataform/adjustment/adjustment", dataFormRoot);
        dataFormRoot.subItems.push(dataFormExample);

        dataFormExample = new NavigationItem("Properties JSON", "./dataform/metadata/metadata", dataFormRoot);
        dataFormRoot.subItems.push(dataFormExample);

        var editors = new NavigationItem("Editors", undefined, dataFormRoot);
        dataFormRoot.subItems.push(editors);
        var common = new NavigationItem("Common", "./dataform/editors/editors", editors);
        editors.subItems.push(common);
        var autocomplete = new NavigationItem("AutoComplete", "./dataform/editors/autocomplete/autocomplete", editors);
        editors.subItems.push(autocomplete);

        var validation = new NavigationItem("Validation", undefined, dataFormRoot);
        dataFormRoot.subItems.push(validation);
        var selectionExample = new NavigationItem("Validators", "./dataform/validation/validation", validation);
        validation.subItems.push(selectionExample);
        var selectionExample = new NavigationItem("Check Validation State", "./dataform/validation/check-errors/check-errors", validation);
        validation.subItems.push(selectionExample);

        dataFormExample = new NavigationItem("Commit Modes", "./dataform/commit-modes/commit-modes", dataFormRoot);
        dataFormRoot.subItems.push(dataFormExample);

        dataFormExample = new NavigationItem("Groups", "./dataform/groups/groups", dataFormRoot);
        dataFormRoot.subItems.push(dataFormExample);

        dataFormExample = new NavigationItem("Custom Editors", "./dataform/custom-editors/custom-editors", dataFormRoot);
        dataFormRoot.subItems.push(dataFormExample);

        dataFormExample = new NavigationItem("Events", "./dataform/events/events", dataFormRoot);
        dataFormRoot.subItems.push(dataFormExample);

        dataFormExample = new NavigationItem("Styling", "./dataform/styling/styling", dataFormRoot);
        dataFormRoot.subItems.push(dataFormExample);

        dataFormExample = new NavigationItem("Styling Advanced", "./dataform/styling-advanced/styling-advanced", dataFormRoot);
        dataFormRoot.subItems.push(dataFormExample);

        dataFormExample = new NavigationItem("Runtime updates", "./dataform/runtime-updates/runtime-updates", dataFormRoot);
        dataFormRoot.subItems.push(dataFormExample);

        dataFormExample = new NavigationItem("Platform adjustments", "./dataform/platform-specifics/platform-specifics", dataFormRoot);
        dataFormRoot.subItems.push(dataFormExample);

        dataFormExample = new NavigationItem("Image Labels", "./dataform/image-labels/image-labels", dataFormRoot);
        dataFormRoot.subItems.push(dataFormExample);

        var layouts = new NavigationItem("Layouts", undefined, dataFormRoot);
        dataFormRoot.subItems.push(layouts);
        var selectionExample = new NavigationItem("Stack", "./dataform/layouts/stack-layout", layouts);
        layouts.subItems.push(selectionExample);
        var selectionExample = new NavigationItem("Grid", "./dataform/layouts/grid-layout", layouts);
        layouts.subItems.push(selectionExample);
    }

    private buildChartExamples(currentParent: NavigationItem) {
        var chartRoot = new NavigationItem("Chart", undefined, currentParent);
        currentParent.subItems.push(chartRoot);

        var seriesRoot = new NavigationItem("Series", undefined, chartRoot);
        chartRoot.subItems.push(seriesRoot);
        var seriesExample = new NavigationItem("Bar series", "./chart/series/bar/bar-series", seriesRoot);
        seriesRoot.subItems.push(seriesExample);

        seriesExample = new NavigationItem("Range bar series", "./chart/series/bar/range-bar-series", seriesRoot);
        seriesRoot.subItems.push(seriesExample);

        seriesExample = new NavigationItem("Stacked Bar series", "./chart/series/bar/stacked-bar-series", seriesRoot);
        seriesRoot.subItems.push(seriesExample);

        seriesExample = new NavigationItem("Area series", "./chart/series/area/area-series", seriesRoot);
        seriesRoot.subItems.push(seriesExample);

        seriesExample = new NavigationItem("Stacked Area series", "./chart/series/area/stacked-area-series", seriesRoot);
        seriesRoot.subItems.push(seriesExample);

        seriesExample = new NavigationItem("Line series", "./chart/series/line/line-series", seriesRoot);
        seriesRoot.subItems.push(seriesExample);

        seriesExample = new NavigationItem("Spline series", "./chart/series/spline/spline-series", seriesRoot);
        seriesRoot.subItems.push(seriesExample);

        seriesExample = new NavigationItem("Bubble series", "./chart/series/bubble/bubble-series", seriesRoot);
        seriesRoot.subItems.push(seriesExample);

        seriesExample = new NavigationItem("Scatter Bubble series", "./chart/series/bubble/scatter-bubble-series", seriesRoot);
        seriesRoot.subItems.push(seriesExample);

        seriesExample = new NavigationItem("Candlestick series", "./chart/series/financial/candlestick-series", seriesRoot);
        seriesRoot.subItems.push(seriesExample);

        seriesExample = new NavigationItem("Ohlc series", "./chart/series/financial/ohlc-series", seriesRoot);
        seriesRoot.subItems.push(seriesExample);

        seriesExample = new NavigationItem("Pie series", "./chart/series/pie/pie-series", seriesRoot);
        seriesRoot.subItems.push(seriesExample);

        seriesExample = new NavigationItem("Scatter series", "./chart/series/scatter/scatter-series", seriesRoot);
        seriesRoot.subItems.push(seriesExample);


        var stylingRoot = new NavigationItem("Styling", undefined, chartRoot);
        chartRoot.subItems.push(stylingRoot);
        var stylingExample = new NavigationItem("Styling axes", "/chart/styling/styling-axes", stylingRoot);
        stylingRoot.subItems.push(stylingExample);

        stylingExample = new NavigationItem("Styling series", "/chart/styling/styling-series", stylingRoot);
        stylingRoot.subItems.push(stylingExample);

        stylingExample = new NavigationItem("Styling Pie Chart series", "/chart/styling/styling-pie-series", stylingRoot);
        stylingRoot.subItems.push(stylingExample);

        stylingExample = new NavigationItem("Styling grid", "/chart/styling/styling-grid", stylingRoot);
        stylingRoot.subItems.push(stylingExample);

        stylingExample = new NavigationItem("Styling labels", "/chart/styling/styling-labels", stylingRoot);
        stylingRoot.subItems.push(stylingExample);

        stylingExample = new NavigationItem("Styling series selection", "/chart/styling/styling-selection", stylingRoot);
        stylingRoot.subItems.push(stylingExample);

        var legendRoot = new NavigationItem("Legend", "./chart/legend/chart-legend", chartRoot);
        chartRoot.subItems.push(legendRoot);

        var behaviorsRoot = new NavigationItem("Interaction", undefined, chartRoot);
        chartRoot.subItems.push(behaviorsRoot);
        var interactionExample = new NavigationItem("Pan & Zoom", "./chart/behaviors/chart-pan-zoom", behaviorsRoot);
        behaviorsRoot.subItems.push(interactionExample);

        interactionExample = new NavigationItem("Pie selection", "./chart/behaviors/chart-pie-selection", behaviorsRoot);
        behaviorsRoot.subItems.push(interactionExample);

        interactionExample = new NavigationItem("Series selection", "./chart/behaviors/chart-series-selection", behaviorsRoot);
        behaviorsRoot.subItems.push(interactionExample);

        interactionExample = new NavigationItem("Datapoint selection", "./chart/behaviors/chart-datapoint-selection", behaviorsRoot);
        behaviorsRoot.subItems.push(interactionExample);

        var axesRoot = new NavigationItem("Axes", undefined, chartRoot);
        chartRoot.subItems.push(axesRoot);
        var axesExample = new NavigationItem("Customization", "./chart/axes/customization/axes-customization", axesRoot);
        axesRoot.subItems.push(axesExample);

        axesExample = new NavigationItem("Multiple axes", "./chart/axes/multiple/multiple-axes", axesRoot);
        axesRoot.subItems.push(axesExample);

        axesExample = new NavigationItem("Negative values", "./chart/axes/negative-values/negative-values", axesRoot);
        axesRoot.subItems.push(axesExample);

        axesExample = new NavigationItem("Date time axis", "./chart/axes/date-time-axes/date-time-axes", axesRoot);
        axesRoot.subItems.push(axesExample);

        var annotationsRoot = new NavigationItem("Annotations", undefined, chartRoot);
        chartRoot.subItems.push(annotationsRoot);

        var annotationsExample = new NavigationItem("Plot band", "./chart/annotations/plot-band", annotationsRoot);
        annotationsRoot.subItems.push(annotationsExample);

        annotationsExample = new NavigationItem("Grid line", "./chart/annotations/grid-line", annotationsRoot);
        annotationsRoot.subItems.push(annotationsExample);
    }

    private buildListViewExamples(currentParent: NavigationItem) {
        var currentItem = new NavigationItem("ListView", undefined, currentParent);
        currentParent.subItems.push(currentItem);

        var exampleItem = new NavigationItem("Getting Started", "./listview/getting-started/getting-started", currentItem);
        currentItem.subItems.push(exampleItem);

        var exampleItem = new NavigationItem("Item Loading", "./listview/item-loading/item-loading", currentItem);
        currentItem.subItems.push(exampleItem);

        exampleItem = new NavigationItem("Item Animations", "./listview/item-animations/item-animations", currentItem);
        currentItem.subItems.push(exampleItem);

        // Layouts
        var layoutsItem = new NavigationItem("Item Layouts", undefined, currentItem);
        currentItem.subItems.push(layoutsItem);
        var layoutsExample = new NavigationItem("Linear", "./listview/item-layouts/item-layouts-linear", layoutsItem);
        layoutsItem.subItems.push(layoutsExample);
        layoutsExample = new NavigationItem("Grid", "./listview/item-layouts/item-layouts-grid", layoutsItem);
        layoutsItem.subItems.push(layoutsExample);
        layoutsExample = new NavigationItem("Staggered", "./listview/item-layouts/item-layouts-staggered", layoutsItem);
        layoutsItem.subItems.push(layoutsExample);

        // Item reorder
        exampleItem = new NavigationItem("Item Reorder", "./listview/item-reorder/item-reorder", currentItem);
        currentItem.subItems.push(exampleItem);

        exampleItem = new NavigationItem("Item Reorder with handle", "./listview/item-reorder/item-reorder-handle", currentItem);
        currentItem.subItems.push(exampleItem);

        // Selection
        var selectionItem = new NavigationItem("Selection", undefined, currentItem);
        currentItem.subItems.push(selectionItem);
        var selectionExample = new NavigationItem("Single Selection", "./listview/listview-selection/single-selection", selectionItem);
        selectionItem.subItems.push(selectionExample);
        selectionExample = new NavigationItem("Multiple Selection", "./listview/listview-selection/multiple-selection", selectionItem);
        selectionItem.subItems.push(selectionExample);
        selectionExample = new NavigationItem("Programatic Selection", "./listview/listview-selection/programmatic-selection", selectionItem);
        selectionItem.subItems.push(selectionExample);
        exampleItem = new NavigationItem("Selection states", "./listview/selection-states/selection-states", selectionItem);
        selectionItem.subItems.push(exampleItem);

        exampleItem = new NavigationItem("Load on Demand", "./listview/load-on-demand/load-on-demand", currentItem);
        currentItem.subItems.push(exampleItem);

        exampleItem = new NavigationItem("Observable Array", "./listview/observable-array/observable-array", currentItem);
        currentItem.subItems.push(exampleItem);

        exampleItem = new NavigationItem("Pull to Refresh", "./listview/pull-to-refresh/pull-to-refresh", currentItem);
        currentItem.subItems.push(exampleItem);

        var swipeLegacy = new NavigationItem("Swipe to execute", undefined, currentItem);
        currentItem.subItems.push(swipeLegacy);
        exampleItem = new NavigationItem("Getting started", "./listview/swipe-execute/swipe-execute", swipeLegacy);
        swipeLegacy.subItems.push(exampleItem);

        exampleItem = new NavigationItem("Swipe to execute with sticky actions", "./listview/swipe-execute/swipe-execute-sticky", swipeLegacy);
        swipeLegacy.subItems.push(exampleItem);

        exampleItem = new NavigationItem("Swipe to execute with stretched content", "./listview/swipe-execute/swipe-execute-stretch", swipeLegacy);
        swipeLegacy.subItems.push(exampleItem);
        // Swipe actions
        var swipeActions = new NavigationItem("Swipe actions", undefined, currentItem);
        currentItem.subItems.push(swipeActions);
        exampleItem = new NavigationItem("Getting started", "./listview/swipe-actions/swipe-actions", swipeActions);
        swipeActions.subItems.push(exampleItem);

        exampleItem = new NavigationItem("Animated thresholds", "./listview/swipe-actions/swipe-actions-thresholds", swipeActions);
        swipeActions.subItems.push(exampleItem);

        exampleItem = new NavigationItem("Multiple actions", "./listview/swipe-actions/swipe-actions-multiple", swipeActions);
        swipeActions.subItems.push(exampleItem);

        // Header and footer
        exampleItem = new NavigationItem("Header and Footer", "./listview/header-footer/header-footer", currentItem);
        currentItem.subItems.push(exampleItem);

        // Scroll to index
        var scrollToIndex = new NavigationItem("Scroll to index", undefined, currentItem);
        currentItem.subItems.push(scrollToIndex);
        var selectionExample = new NavigationItem("In vertical direction", "./listview/scroll-to-index/scroll-to-index-vertical", scrollToIndex);
        scrollToIndex.subItems.push(selectionExample);
        var selectionExample = new NavigationItem("In horizontal direction", "./listview/scroll-to-index/scroll-to-index-horizontal", scrollToIndex);
        scrollToIndex.subItems.push(selectionExample);
    }

    private buildSideDrawerExamples(currentParent: NavigationItem) {
        var currentItem = new NavigationItem("SideDrawer", undefined, currentParent);
        currentParent.subItems.push(currentItem);
        var exampleItem = new NavigationItem("Getting started", "./sidedrawer/getting-started/getting-started", currentItem);
        currentItem.subItems.push(exampleItem);

        exampleItem = new NavigationItem("Position", "./sidedrawer/position/drawer-position", currentItem);
        currentItem.subItems.push(exampleItem);

        exampleItem = new NavigationItem("Transitions", "./sidedrawer/transitions/drawer-transitions", currentItem);
        currentItem.subItems.push(exampleItem);

        exampleItem = new NavigationItem("Events", "./sidedrawer/callbacks/drawer-callbacks", currentItem);
        currentItem.subItems.push(exampleItem);

        exampleItem = new NavigationItem("Drawer Over Navigation", "./sidedrawer/over-navigation/drawer-over-navigation", currentItem);
        currentItem.subItems.push(exampleItem);
    }

    private buildAutoCompleteExamples(currentParent: NavigationItem) {
        var currentItem = new NavigationItem("AutoCompleteTextView", undefined, currentParent);
        currentParent.subItems.push(currentItem);
        var exampleItem = new NavigationItem("Getting started", "./autocomplete/getting-started/autocomplete-getting-started", currentItem);
        currentItem.subItems.push(exampleItem);

        exampleItem = new NavigationItem("Token Layouts", "./autocomplete/layouts/autocomplete-layout", currentItem);
        currentItem.subItems.push(exampleItem);

        exampleItem = new NavigationItem("Customization", "./autocomplete/customization/autocomplete-customization", currentItem);
        currentItem.subItems.push(exampleItem);

        exampleItem = new NavigationItem("Events", "./autocomplete/events/autocomplete-events", currentItem);
        currentItem.subItems.push(exampleItem);

        exampleItem = new NavigationItem("Async Data Fetch", "./autocomplete/remote-data-fetch/autocomplete-remote", currentItem);
        currentItem.subItems.push(exampleItem);
    }

    private buildGaugesExamples(currentParent: NavigationItem) {
        let currentItem = new NavigationItem("Gauges", undefined, currentParent);
        currentParent.subItems.push(currentItem);

        var exampleItem = new NavigationItem("Getting started", "./gauges/getting-started/getting-started", currentItem);
        currentItem.subItems.push(exampleItem);

        exampleItem = new NavigationItem("Scales", "./gauges/scales/scales", currentItem);
        currentItem.subItems.push(exampleItem);

        exampleItem = new NavigationItem("Customization", "./gauges/customization/customization", currentItem);
        currentItem.subItems.push(exampleItem);

        exampleItem = new NavigationItem("Animations", "./gauges/animations/animations", currentItem);
        currentItem.subItems.push(exampleItem);
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

        var itemIndex = args.itemIndex;
        var tappedItem = this.currentSubItems[itemIndex];
        if (tappedItem.module === undefined) {
            this.hasBackNavigation = tappedItem.parent !== undefined;
            this.currentParent = tappedItem;
        }

        if (tappedItem.subItems.length > 0) {
            frameModule.topmost().navigate({
                moduleName: "./navigation/category-list"
            });
        } else {
            if (tappedItem.module) {
                frameModule.topmost().navigate({
                    moduleName: tappedItem.module,
                    context: tappedItem
                });
            }
        }
    }

    get hasBackNavigation() {
        return this.get("_hasBack");
    }

    set hasBackNavigation(value: boolean) {
        this.set("_hasBack", value);
    }
}

export var navigationModel = new NavigationViewModel();
