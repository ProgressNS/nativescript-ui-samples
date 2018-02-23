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
        this.currentParent = new NavigationItem("SDK Examples", undefined, undefined);
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
        var parent = this.currentParent;
        this.buildChartExamples(parent);
        this.buildListViewExamples(parent);
        this.buildSideDrawerExamples(parent);
        this.buildCalendarExamples(parent);
        this.buildDataFormExamples(parent);
        this.buildAutoCompleteExamples(parent);
        this.buildGaugesExamples(parent);
    }

    private buildCalendarExamples(currentParent: NavigationItem) {
        var calendarRoot = new NavigationItem("Calendar", undefined, currentParent);
        currentParent.subItems.push(calendarRoot);
        var calendarExample = new NavigationItem("Getting started", "./calendar/getting-started/getting-started-page", calendarRoot);
        calendarRoot.subItems.push(calendarExample);

        calendarExample = new NavigationItem("Localization", "./calendar/calendar-localization/localization-page", calendarRoot);
        calendarRoot.subItems.push(calendarExample);

        calendarExample = new NavigationItem("Handling Events", "./calendar/events/events-page", calendarRoot);
        calendarRoot.subItems.push(calendarExample);

        calendarExample = new NavigationItem("Populating with data", "./calendar/populating-with-data/populating-with-data-page", calendarRoot);
        calendarRoot.subItems.push(calendarExample);

        calendarExample = new NavigationItem("Programmatic control", "./calendar/programatic-control/programatic-control-page", calendarRoot);
        calendarRoot.subItems.push(calendarExample);

        calendarExample = new NavigationItem("Selection modes", "./calendar/selection-modes/selection-modes-page", calendarRoot);
        calendarRoot.subItems.push(calendarExample);

        calendarExample = new NavigationItem("View modes", "./calendar/view-modes/view-modes-page", calendarRoot);
        calendarRoot.subItems.push(calendarExample);

        calendarExample = new NavigationItem("Transition modes", "./calendar/transition-modes/transition-modes-page", calendarRoot);
        calendarRoot.subItems.push(calendarExample);

        calendarExample = new NavigationItem("Events source", "./calendar/calendar-events/events-source-page", calendarRoot);
        calendarRoot.subItems.push(calendarExample);

        calendarExample = new NavigationItem("Events view modes", "./calendar/calendar-events/events-view-modes-page", calendarRoot);
        calendarRoot.subItems.push(calendarExample);

        calendarExample = new NavigationItem("Calendar styling", "./calendar/cell-styling/cell-styles-page", calendarRoot);
        calendarRoot.subItems.push(calendarExample);

        calendarExample = new NavigationItem("Calendar day view", "./calendar/day-view/day-view-page", calendarRoot);
        calendarRoot.subItems.push(calendarExample);
    }

    private buildDataFormExamples(currentParent: NavigationItem) {
        var dataFormRoot = new NavigationItem("DataForm", undefined, currentParent);
        currentParent.subItems.push(dataFormRoot);

        var dataFormExample = new NavigationItem("Getting started", "./dataform/getting-started/getting-started-page", dataFormRoot);
        dataFormRoot.subItems.push(dataFormExample);

        dataFormExample = new NavigationItem("Getting started JSON", "./dataform/getting-started-json/getting-started-json-page", dataFormRoot);
        dataFormRoot.subItems.push(dataFormExample);

        dataFormExample = new NavigationItem("Properties", "./dataform/adjustment/adjustment-page", dataFormRoot);
        dataFormRoot.subItems.push(dataFormExample);

        dataFormExample = new NavigationItem("Properties JSON", "./dataform/metadata/metadata-page", dataFormRoot);
        dataFormRoot.subItems.push(dataFormExample);

        var editors = new NavigationItem("Editors", undefined, dataFormRoot);
        dataFormRoot.subItems.push(editors);
        var common = new NavigationItem("Common", "./dataform/editors/editors-page", editors);
        editors.subItems.push(common);
        var autocomplete = new NavigationItem("AutoComplete", "./dataform/editors/autocomplete/autocomplete-page", editors);
        editors.subItems.push(autocomplete);
        var labels = new NavigationItem("Labels", "./dataform/editors/labels/labels-page", editors);
        editors.subItems.push(labels);
        var customEditor = new NavigationItem("Custom Editors", "./dataform/editors/custom-editors/custom-editors-page", editors);
        editors.subItems.push(customEditor);

        var validation = new NavigationItem("Validation", undefined, dataFormRoot);
        dataFormRoot.subItems.push(validation);
        var selectionExample = new NavigationItem("Validators", "./dataform/validation/validation-page", validation);
        validation.subItems.push(selectionExample);
        var selectionExample = new NavigationItem("Validation Modes", "./dataform/validation/validation-modes/validation-modes-page", validation);
        validation.subItems.push(selectionExample);
        var selectionExample = new NavigationItem("Validation Events", "./dataform/validation/validation-events/validation-events-page", validation);
        validation.subItems.push(selectionExample);
        var selectionExample = new NavigationItem("Validators JSON", "./dataform/validation/metadata/metadata-page", validation);
        validation.subItems.push(selectionExample);
        var selectionExample = new NavigationItem("Async Validation", "./dataform/validation/async-validation/async-validation-page", validation);
        validation.subItems.push(selectionExample);
        var selectionExample = new NavigationItem("Check Validation State", "./dataform/validation/check-errors/check-errors-page", validation);
        validation.subItems.push(selectionExample);
        var selectionExample = new NavigationItem("Custom Validator", "./dataform/validation/custom-validator/custom-validator-page", validation);
        validation.subItems.push(selectionExample);
        var selectionExample = new NavigationItem("Custom Validation", "./dataform/validation/custom-validation/custom-validation-page", validation);
        validation.subItems.push(selectionExample);

        dataFormExample = new NavigationItem("Commit Modes", "./dataform/commit-modes/commit-modes-page", dataFormRoot);
        dataFormRoot.subItems.push(dataFormExample);

        dataFormExample = new NavigationItem("Groups", "./dataform/groups/groups-page", dataFormRoot);
        dataFormRoot.subItems.push(dataFormExample);

        dataFormExample = new NavigationItem("Events", "./dataform/events/events-page", dataFormRoot);
        dataFormRoot.subItems.push(dataFormExample);

        var styling = new NavigationItem("Styling", undefined, dataFormRoot);
        dataFormRoot.subItems.push(styling);

        dataFormExample = new NavigationItem("Common", "./dataform/styling/common/styling-page", styling);
        styling.subItems.push(dataFormExample);

        dataFormExample = new NavigationItem("Advanced", "./dataform/styling/advanced/styling-advanced-page", styling);
        styling.subItems.push(dataFormExample);

        dataFormExample = new NavigationItem("Editor Background", "./dataform/styling/editor-background/styling-editor-background-page", styling);
        styling.subItems.push(dataFormExample);

        dataFormExample = new NavigationItem("At runtime", "./dataform/styling/editor-style/editor-style-page", styling);
        styling.subItems.push(dataFormExample);

        dataFormExample = new NavigationItem("Runtime updates", "./dataform/runtime-updates/runtime-updates-page", dataFormRoot);
        dataFormRoot.subItems.push(dataFormExample);

        dataFormExample = new NavigationItem("Platform adjustments", "./dataform/platform-specifics/platform-specifics-page", dataFormRoot);
        dataFormRoot.subItems.push(dataFormExample);

        dataFormExample = new NavigationItem("Image Labels", "./dataform/image-labels/image-labels-page", dataFormRoot);
        dataFormRoot.subItems.push(dataFormExample);

        var layouts = new NavigationItem("Layouts", undefined, dataFormRoot);
        dataFormRoot.subItems.push(layouts);
        var selectionExample = new NavigationItem("Stack", "./dataform/layouts/stack-layout-page", layouts);
        layouts.subItems.push(selectionExample);
        var selectionExample = new NavigationItem("Grid", "./dataform/layouts/grid-layout-page", layouts);
        layouts.subItems.push(selectionExample);

        dataFormExample = new NavigationItem("Read Only", "./dataform/editors/readonly/editor-readonly-page", dataFormRoot);
        dataFormRoot.subItems.push(dataFormExample);

        dataFormExample = new NavigationItem("Value Providers", "./dataform/value-providers/value-providers-page", dataFormRoot);
        dataFormRoot.subItems.push(dataFormExample);

        dataFormExample = new NavigationItem("Scrollable Form", "./dataform/scrolling/scrolling-page", dataFormRoot);
        dataFormRoot.subItems.push(dataFormExample);
    }

    private buildChartExamples(currentParent: NavigationItem) {
        var chartRoot = new NavigationItem("Chart", undefined, currentParent);
        currentParent.subItems.push(chartRoot);

        var seriesRoot = new NavigationItem("Series", undefined, chartRoot);
        chartRoot.subItems.push(seriesRoot);
        var seriesExample = new NavigationItem("Bar series", "./chart/series/bar/bar-series-page", seriesRoot);
        seriesRoot.subItems.push(seriesExample);

        seriesExample = new NavigationItem("Range bar series", "./chart/series/bar/range-bar-series-page", seriesRoot);
        seriesRoot.subItems.push(seriesExample);

        seriesExample = new NavigationItem("Stacked Bar series", "./chart/series/bar/stacked-bar-series-page", seriesRoot);
        seriesRoot.subItems.push(seriesExample);

        seriesExample = new NavigationItem("Area series", "./chart/series/area/area-series-page", seriesRoot);
        seriesRoot.subItems.push(seriesExample);

        seriesExample = new NavigationItem("Stacked Area series", "./chart/series/area/stacked-area-series-page", seriesRoot);
        seriesRoot.subItems.push(seriesExample);

        seriesExample = new NavigationItem("Line series", "./chart/series/line/line-series-page", seriesRoot);
        seriesRoot.subItems.push(seriesExample);

        seriesExample = new NavigationItem("Spline series", "./chart/series/spline/spline-series-page", seriesRoot);
        seriesRoot.subItems.push(seriesExample);

        seriesExample = new NavigationItem("Spline Area series", "./chart/series/spline/spline-area-series-page", seriesRoot);
        seriesRoot.subItems.push(seriesExample);

        seriesExample = new NavigationItem("Bubble series", "./chart/series/bubble/bubble-series-page", seriesRoot);
        seriesRoot.subItems.push(seriesExample);

        seriesExample = new NavigationItem("Scatter Bubble series", "./chart/series/bubble/scatter-bubble-series-page", seriesRoot);
        seriesRoot.subItems.push(seriesExample);

        seriesExample = new NavigationItem("Candlestick series", "./chart/series/financial/candlestick-series-page", seriesRoot);
        seriesRoot.subItems.push(seriesExample);

        seriesExample = new NavigationItem("Ohlc series", "./chart/series/financial/ohlc-series-page", seriesRoot);
        seriesRoot.subItems.push(seriesExample);

        seriesExample = new NavigationItem("Pie series", "./chart/series/pie/pie-series-page", seriesRoot);
        seriesRoot.subItems.push(seriesExample);

        seriesExample = new NavigationItem("Scatter series", "./chart/series/scatter/scatter-series-page", seriesRoot);
        seriesRoot.subItems.push(seriesExample);


        var stylingRoot = new NavigationItem("Styling", undefined, chartRoot);
        chartRoot.subItems.push(stylingRoot);
        var stylingExample = new NavigationItem("Styling axes", "./chart/styling/styling-axes-page", stylingRoot);
        stylingRoot.subItems.push(stylingExample);

        stylingExample = new NavigationItem("Styling series", "./chart/styling/styling-series-page", stylingRoot);
        stylingRoot.subItems.push(stylingExample);

        stylingExample = new NavigationItem("Styling Pie Chart series", "./chart/styling/styling-pie-series-page", stylingRoot);
        stylingRoot.subItems.push(stylingExample);

        stylingExample = new NavigationItem("Styling grid", "./chart/styling/styling-grid-page", stylingRoot);
        stylingRoot.subItems.push(stylingExample);

        stylingExample = new NavigationItem("Styling labels", "./chart/styling/styling-labels-page", stylingRoot);
        stylingRoot.subItems.push(stylingExample);

        stylingExample = new NavigationItem("Styling series selection", "./chart/styling/styling-selection-page", stylingRoot);
        stylingRoot.subItems.push(stylingExample);

        var legendRoot = new NavigationItem("Legend", "./chart/legend/chart-legend-page", chartRoot);
        chartRoot.subItems.push(legendRoot);

        var behaviorsRoot = new NavigationItem("Interaction", undefined, chartRoot);
        chartRoot.subItems.push(behaviorsRoot);

        var interactionExample = new NavigationItem("Pan & Zoom", "./chart/behaviors/chart-pan-zoom-page", behaviorsRoot);
        behaviorsRoot.subItems.push(interactionExample);

        interactionExample = new NavigationItem("Trackball", "./chart/behaviors/chart-trackball-page", behaviorsRoot);
        behaviorsRoot.subItems.push(interactionExample);

        interactionExample = new NavigationItem("Pie selection", "./chart/behaviors/chart-pie-selection-page", behaviorsRoot);
        behaviorsRoot.subItems.push(interactionExample);

        interactionExample = new NavigationItem("Series selection", "./chart/behaviors/chart-series-selection-page", behaviorsRoot);
        behaviorsRoot.subItems.push(interactionExample);

        interactionExample = new NavigationItem("Datapoint selection", "./chart/behaviors/chart-datapoint-selection-page", behaviorsRoot);
        behaviorsRoot.subItems.push(interactionExample);

        var axesRoot = new NavigationItem("Axes", undefined, chartRoot);
        chartRoot.subItems.push(axesRoot);
        var axesExample = new NavigationItem("Customization", "./chart/axes/customization/axes-customization-page", axesRoot);
        axesRoot.subItems.push(axesExample);

        axesExample = new NavigationItem("Multiple axes", "./chart/axes/multiple/multiple-axes-page", axesRoot);
        axesRoot.subItems.push(axesExample);

        axesExample = new NavigationItem("Negative values", "./chart/axes/negative-values/negative-values-page", axesRoot);
        axesRoot.subItems.push(axesExample);

        axesExample = new NavigationItem("Date time axis", "./chart/axes/date-time-axes/date-time-axes-page", axesRoot);
        axesRoot.subItems.push(axesExample);

        axesExample = new NavigationItem("Label visibility", "./chart/axes/label-visibility/label-visibility-page", axesRoot);
        axesRoot.subItems.push(axesExample);

        var annotationsRoot = new NavigationItem("Annotations", undefined, chartRoot);
        chartRoot.subItems.push(annotationsRoot);

        var annotationsExample = new NavigationItem("Plot band", "./chart/annotations/plot-band-page", annotationsRoot);
        annotationsRoot.subItems.push(annotationsExample);

        annotationsExample = new NavigationItem("Grid line", "./chart/annotations/grid-line-page", annotationsRoot);
        annotationsRoot.subItems.push(annotationsExample);
    }

    private buildListViewExamples(currentParent: NavigationItem) {
        var currentItem = new NavigationItem("ListView", undefined, currentParent);
        currentParent.subItems.push(currentItem);

        var exampleItem = new NavigationItem("Getting Started", "./listview/getting-started/getting-started-page", currentItem);
        currentItem.subItems.push(exampleItem);

        // Data operations
        var dataOperations = new NavigationItem("Data Operations", undefined, currentItem);
        currentItem.subItems.push(dataOperations);
        exampleItem = new NavigationItem("Filtering", "./listview/filtering/filtering-page", dataOperations);
        dataOperations.subItems.push(exampleItem);
        exampleItem = new NavigationItem("Sorting", "./listview/sorting/sorting-page", dataOperations);
        dataOperations.subItems.push(exampleItem);
        var exampleItem = new NavigationItem("Grouping", "./listview/grouping/grouping-page", dataOperations);
        dataOperations.subItems.push(exampleItem);
        if(isAndroid) {
            exampleItem = new NavigationItem("Collapsible Grouping", "./listview/grouping/grouping-collapsible-page", dataOperations);
            dataOperations.subItems.push(exampleItem);
        }
        
        exampleItem = new NavigationItem("Multiple operations", "./listview/multiple-data-operations/multiple-data-operations-page", dataOperations);
        dataOperations.subItems.push(exampleItem);
        
        
        var exampleItem = new NavigationItem("Multiple Item Templates", "./listview/multiple-templates/multiple-templates-page", currentItem);
        currentItem.subItems.push(exampleItem);

        var exampleItem = new NavigationItem("Item Loading", "./listview/item-loading/item-loading-page", currentItem);
        currentItem.subItems.push(exampleItem);

        exampleItem = new NavigationItem("Item Animations", "./listview/item-animations/item-animations-page", currentItem);
        currentItem.subItems.push(exampleItem);

        // Layouts
        var layoutsItem = new NavigationItem("Item Layouts", undefined, currentItem);
        currentItem.subItems.push(layoutsItem);
        var layoutsExample = new NavigationItem("Linear", "./listview/item-layouts/item-layouts-linear-page", layoutsItem);
        layoutsItem.subItems.push(layoutsExample);
        layoutsExample = new NavigationItem("Grid", "./listview/item-layouts/item-layouts-grid-page", layoutsItem);
        layoutsItem.subItems.push(layoutsExample);
        layoutsExample = new NavigationItem("Staggered", "./listview/item-layouts/item-layouts-staggered-page", layoutsItem);
        layoutsItem.subItems.push(layoutsExample);
        layoutsExample = new NavigationItem("Change at runtime", "./listview/item-layouts/item-layouts-runtime-page", layoutsItem);
        layoutsItem.subItems.push(layoutsExample);

        // Item reorder
        exampleItem = new NavigationItem("Item Reorder", "./listview/item-reorder/item-reorder-page", currentItem);
        currentItem.subItems.push(exampleItem);

        exampleItem = new NavigationItem("Item Reorder with handle", "./listview/item-reorder/item-reorder-handle-page", currentItem);
        currentItem.subItems.push(exampleItem);

        // Selection
        var selectionItem = new NavigationItem("Selection", undefined, currentItem);
        currentItem.subItems.push(selectionItem);
        var selectionExample = new NavigationItem("Single Selection", "./listview/listview-selection/single-selection-page", selectionItem);
        selectionItem.subItems.push(selectionExample);
        selectionExample = new NavigationItem("Multiple Selection", "./listview/listview-selection/multiple-selection-page", selectionItem);
        selectionItem.subItems.push(selectionExample);
        selectionExample = new NavigationItem("Programmatic Selection", "./listview/listview-selection/programmatic-selection-page", selectionItem);
        selectionItem.subItems.push(selectionExample);
        exampleItem = new NavigationItem("Selection states", "./listview/selection-states/selection-states-page", selectionItem);
        selectionItem.subItems.push(exampleItem);

        var demand = new NavigationItem("Load on Demand", undefined, currentItem);
        currentItem.subItems.push(demand);
        var selectionExample = new NavigationItem("Manual with Fixed Item Size", "./listview/load-on-demand/fixed-size-manual/fixed-size-manual-page", demand);
        demand.subItems.push(selectionExample);
        var selectionExample = new NavigationItem("Auto with Fixed Item Size", "./listview/load-on-demand/fixed-size-auto/fixed-size-auto-page", demand);
        demand.subItems.push(selectionExample);
        var selectionExample = new NavigationItem("Manual with Variable Item Size", "./listview/load-on-demand/dynamic-size-manual/dynamic-size-manual-page", demand);
        demand.subItems.push(selectionExample);
        var selectionExample = new NavigationItem("Auto with Variable Item Size", "./listview/load-on-demand/dynamic-size-auto/dynamic-size-auto-page", demand);
        demand.subItems.push(selectionExample);

        exampleItem = new NavigationItem("Observable Array", "./listview/observable-array/observable-array-page", currentItem);
        currentItem.subItems.push(exampleItem);

        exampleItem = new NavigationItem("Pull to Refresh", "./listview/pull-to-refresh/pull-to-refresh-page", currentItem);
        currentItem.subItems.push(exampleItem);

        // Swipe actions
        var swipeActions = new NavigationItem("Swipe actions", undefined, currentItem);
        currentItem.subItems.push(swipeActions);
        exampleItem = new NavigationItem("Getting started", "./listview/swipe-actions/swipe-actions-page", swipeActions);
        swipeActions.subItems.push(exampleItem);

        exampleItem = new NavigationItem("Animated thresholds", "./listview/swipe-actions/swipe-actions-thresholds-page", swipeActions);
        swipeActions.subItems.push(exampleItem);

        exampleItem = new NavigationItem("Multiple actions", "./listview/swipe-actions/swipe-actions-multiple-page", swipeActions);
        swipeActions.subItems.push(exampleItem);

        exampleItem = new NavigationItem("Disable\\Enable", "./listview/swipe-actions/swipe-disable-page", swipeActions);
        swipeActions.subItems.push(exampleItem);

        // Header and footer
        exampleItem = new NavigationItem("Header and Footer", "./listview/header-footer/header-footer-page", currentItem);
        currentItem.subItems.push(exampleItem);

        // Scroll to index
        var scrollToIndex = new NavigationItem("Scroll to index", undefined, currentItem);
        currentItem.subItems.push(scrollToIndex);
        var selectionExample = new NavigationItem("In vertical direction", "./listview/scroll-to-index/scroll-to-index-vertical-page", scrollToIndex);
        scrollToIndex.subItems.push(selectionExample);
        var selectionExample = new NavigationItem("In horizontal direction", "./listview/scroll-to-index/scroll-to-index-horizontal-page", scrollToIndex);
        scrollToIndex.subItems.push(selectionExample);
        var selectionExample = new NavigationItem("Initially scrolled", "./listview/scroll-to-index/scroll-to-index-initial-page", scrollToIndex);
        scrollToIndex.subItems.push(selectionExample);

        // Scroll events 
        exampleItem = new NavigationItem("Scroll Events", "./listview/scroll-events/scroll-events-page", currentItem);
        currentItem.subItems.push(exampleItem);
    }

    private buildSideDrawerExamples(currentParent: NavigationItem) {
        var currentItem = new NavigationItem("SideDrawer", undefined, currentParent);
        currentParent.subItems.push(currentItem);
        var exampleItem = new NavigationItem("Getting started", "./sidedrawer/getting-started/getting-started-page", currentItem);
        currentItem.subItems.push(exampleItem);

        exampleItem = new NavigationItem("Position", "./sidedrawer/position/drawer-position-page", currentItem);
        currentItem.subItems.push(exampleItem);

        exampleItem = new NavigationItem("Transitions", "./sidedrawer/transitions/drawer-transitions-page", currentItem);
        currentItem.subItems.push(exampleItem);

        exampleItem = new NavigationItem("Events", "./sidedrawer/callbacks/drawer-callbacks-page", currentItem);
        currentItem.subItems.push(exampleItem);

        exampleItem = new NavigationItem("Drawer Over Navigation", "./sidedrawer/over-navigation/drawer-over-navigation-page", currentItem);
        currentItem.subItems.push(exampleItem);
    }

    private buildAutoCompleteExamples(currentParent: NavigationItem) {
        var currentItem = new NavigationItem("AutoCompleteTextView", undefined, currentParent);
        currentParent.subItems.push(currentItem);
        var exampleItem = new NavigationItem("Getting started", "./autocomplete/getting-started/autocomplete-getting-started-page", currentItem);
        currentItem.subItems.push(exampleItem);

        var completionModes = new NavigationItem("Completion modes", undefined, currentItem);
        currentItem.subItems.push(completionModes);

        var exampleItem = new NavigationItem("Contains", "./autocomplete/completion-mode/autocomplete-contains-page", completionModes);
        completionModes.subItems.push(exampleItem);
        var exampleItem = new NavigationItem("Starts with", "./autocomplete/completion-mode/autocomplete-startswith-page", completionModes);
        completionModes.subItems.push(exampleItem);

        var displayModes = new NavigationItem("Display modes", undefined, currentItem);
        currentItem.subItems.push(displayModes);

        var exampleItem = new NavigationItem("Tokens", "./autocomplete/display-mode/autocomplete-tokens-page", displayModes);
        displayModes.subItems.push(exampleItem);
        var exampleItem = new NavigationItem("Plain", "./autocomplete/display-mode/autocomplete-plain-page", displayModes);
        displayModes.subItems.push(exampleItem);

        var layoutModes = new NavigationItem("Token Layouts", undefined, currentItem);
        currentItem.subItems.push(layoutModes);

        var exampleItem = new NavigationItem("Switching at runtime", "./autocomplete/layouts/autocomplete-runtime-page", layoutModes);
        layoutModes.subItems.push(exampleItem);
        var exampleItem = new NavigationItem("Horizontal", "./autocomplete/layouts/autocomplete-horizontal-page", layoutModes);
        layoutModes.subItems.push(exampleItem);
        var exampleItem = new NavigationItem("Wrap", "./autocomplete/layouts/autocomplete-wrap-page", layoutModes);
        layoutModes.subItems.push(exampleItem);

        var suggestModes = new NavigationItem("Suggest Mode", undefined, currentItem);
        currentItem.subItems.push(suggestModes);

        var exampleItem = new NavigationItem("Append", "./autocomplete/suggest-mode/autocomplete-append-page", suggestModes);
        suggestModes.subItems.push(exampleItem);
        var exampleItem = new NavigationItem("Suggest", "./autocomplete/suggest-mode/autocomplete-suggest-page", suggestModes);
        suggestModes.subItems.push(exampleItem);
        var exampleItem = new NavigationItem("Suggest & Append", "./autocomplete/suggest-mode/autocomplete-suggest-append-page", suggestModes);
        suggestModes.subItems.push(exampleItem);

        exampleItem = new NavigationItem("Customization", "./autocomplete/customization/autocomplete-customization-page", currentItem);
        currentItem.subItems.push(exampleItem);

        exampleItem = new NavigationItem("Events", "./autocomplete/events/autocomplete-events-page", currentItem);
        currentItem.subItems.push(exampleItem);

        exampleItem = new NavigationItem("Async Data Fetch", "./autocomplete/remote-data-fetch/autocomplete-remote-page", currentItem);
        currentItem.subItems.push(exampleItem);

        exampleItem = new NavigationItem("Read Only", "./autocomplete/readonly/autocomplete-readonly-page", currentItem);
        currentItem.subItems.push(exampleItem);

        exampleItem = new NavigationItem("Hint", "./autocomplete/hint/autocomplete-hint-page", currentItem);
        currentItem.subItems.push(exampleItem);

        exampleItem = new NavigationItem("Preselected items", "./autocomplete/preselected-tokens/autocomplete-preselected-tokens-page", currentItem);
        currentItem.subItems.push(exampleItem);
    }

    private buildGaugesExamples(currentParent: NavigationItem) {
        let currentItem = new NavigationItem("Gauges", undefined, currentParent);
        currentParent.subItems.push(currentItem);

        var exampleItem = new NavigationItem("Getting started", "./gauges/getting-started/getting-started-page", currentItem);
        currentItem.subItems.push(exampleItem);

        exampleItem = new NavigationItem("Scales", "./gauges/scales/scales-page", currentItem);
        currentItem.subItems.push(exampleItem);

        exampleItem = new NavigationItem("Customization", "./gauges/customization/customization-page", currentItem);
        currentItem.subItems.push(exampleItem);

        exampleItem = new NavigationItem("Animations", "./gauges/animations/animations-page", currentItem);
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

        var itemIndex = args.index;
        var tappedItem = this.currentSubItems[itemIndex];
        if (tappedItem.module === undefined) {
            this.hasBackNavigation = tappedItem.parent !== undefined;
            this.currentParent = tappedItem;
        }

        if (tappedItem.subItems.length > 0) {
            topmost().navigate({
                moduleName: "./navigation/category-list-page"
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

export var navigationModel = new NavigationViewModel();
