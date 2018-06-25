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
        this.currentParent = new NavigationItem("Chart", undefined, undefined);
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
        this.buildChartExamples(parent);
    }

    private buildChartExamples(currentParent: NavigationItem) {
        const seriesRoot = new NavigationItem("Series", undefined, currentParent);
        currentParent.subItems.push(seriesRoot);
        let seriesExample = new NavigationItem("Bar series", "examples/series/bar/bar-series-page", seriesRoot);
        seriesRoot.subItems.push(seriesExample);

        seriesExample = new NavigationItem("Range bar series", "examples/series/bar/range-bar-series-page", seriesRoot);
        seriesRoot.subItems.push(seriesExample);

        seriesExample = new NavigationItem("Stacked Bar series", "examples/series/bar/stacked-bar-series-page", seriesRoot);
        seriesRoot.subItems.push(seriesExample);

        seriesExample = new NavigationItem("Area series", "examples/series/area/area-series-page", seriesRoot);
        seriesRoot.subItems.push(seriesExample);

        seriesExample = new NavigationItem("Stacked Area series", "examples/series/area/stacked-area-series-page", seriesRoot);
        seriesRoot.subItems.push(seriesExample);

        seriesExample = new NavigationItem("Line series", "examples/series/line/line-series-page", seriesRoot);
        seriesRoot.subItems.push(seriesExample);

        seriesExample = new NavigationItem("Spline series", "examples/series/spline/spline-series-page", seriesRoot);
        seriesRoot.subItems.push(seriesExample);

        seriesExample = new NavigationItem("Spline Area series", "examples/series/spline/spline-area-series-page", seriesRoot);
        seriesRoot.subItems.push(seriesExample);

        seriesExample = new NavigationItem("Bubble series", "examples/series/bubble/bubble-series-page", seriesRoot);
        seriesRoot.subItems.push(seriesExample);

        seriesExample = new NavigationItem("Scatter Bubble series", "examples/series/bubble/scatter-bubble-series-page", seriesRoot);
        seriesRoot.subItems.push(seriesExample);

        seriesExample = new NavigationItem("Candlestick series", "examples/series/financial/candlestick-series-page", seriesRoot);
        seriesRoot.subItems.push(seriesExample);

        seriesExample = new NavigationItem("Ohlc series", "examples/series/financial/ohlc-series-page", seriesRoot);
        seriesRoot.subItems.push(seriesExample);

        seriesExample = new NavigationItem("Pie series", "examples/series/pie/pie-series-page", seriesRoot);
        seriesRoot.subItems.push(seriesExample);

        seriesExample = new NavigationItem("Scatter series", "examples/series/scatter/scatter-series-page", seriesRoot);
        seriesRoot.subItems.push(seriesExample);


        const stylingRoot = new NavigationItem("Styling", undefined, currentParent);
        currentParent.subItems.push(stylingRoot);
        let stylingExample = new NavigationItem("Styling axes", "examples/styling/styling-axes-page", stylingRoot);
        stylingRoot.subItems.push(stylingExample);

        stylingExample = new NavigationItem("Styling series", "examples/styling/styling-series-page", stylingRoot);
        stylingRoot.subItems.push(stylingExample);

        stylingExample = new NavigationItem("Styling Pie Chart series", "examples/styling/styling-pie-series-page", stylingRoot);
        stylingRoot.subItems.push(stylingExample);

        stylingExample = new NavigationItem("Styling grid", "examples/styling/styling-grid-page", stylingRoot);
        stylingRoot.subItems.push(stylingExample);

        stylingExample = new NavigationItem("Styling labels", "examples/styling/styling-labels-page", stylingRoot);
        stylingRoot.subItems.push(stylingExample);

        stylingExample = new NavigationItem("Styling series selection", "examples/styling/styling-selection-page", stylingRoot);
        stylingRoot.subItems.push(stylingExample);

        const legendRoot = new NavigationItem("Legend", "examples/legend/chart-legend-page", currentParent);
        currentParent.subItems.push(legendRoot);

        const behaviorsRoot = new NavigationItem("Interaction", undefined, currentParent);
        currentParent.subItems.push(behaviorsRoot);

        let interactionExample = new NavigationItem("Pan & Zoom", "examples/behaviors/chart-pan-zoom-page", behaviorsRoot);
        behaviorsRoot.subItems.push(interactionExample);

        interactionExample = new NavigationItem("Trackball", "examples/behaviors/chart-trackball-page", behaviorsRoot);
        behaviorsRoot.subItems.push(interactionExample);

        interactionExample = new NavigationItem("Pie selection", "examples/behaviors/chart-pie-selection-page", behaviorsRoot);
        behaviorsRoot.subItems.push(interactionExample);

        interactionExample = new NavigationItem("Series selection", "examples/behaviors/chart-series-selection-page", behaviorsRoot);
        behaviorsRoot.subItems.push(interactionExample);

        interactionExample = new NavigationItem("Datapoint selection", "examples/behaviors/chart-datapoint-selection-page", behaviorsRoot);
        behaviorsRoot.subItems.push(interactionExample);

        const axesRoot = new NavigationItem("Axes", undefined, currentParent);
        currentParent.subItems.push(axesRoot);
        let axesExample = new NavigationItem("Customization", "examples/axes/customization/axes-customization-page", axesRoot);
        axesRoot.subItems.push(axesExample);

        axesExample = new NavigationItem("Multiple axes", "examples/axes/multiple/multiple-axes-page", axesRoot);
        axesRoot.subItems.push(axesExample);

        axesExample = new NavigationItem("Negative values", "examples/axes/negative-values/negative-values-page", axesRoot);
        axesRoot.subItems.push(axesExample);

        axesExample = new NavigationItem("Date time axis", "examples/axes/date-time-axes/date-time-axes-page", axesRoot);
        axesRoot.subItems.push(axesExample);

        axesExample = new NavigationItem("Label visibility", "examples/axes/label-visibility/label-visibility-page", axesRoot);
        axesRoot.subItems.push(axesExample);

        const annotationsRoot = new NavigationItem("Annotations", undefined, currentParent);
        currentParent.subItems.push(annotationsRoot);

        let annotationsExample = new NavigationItem("Plot band", "examples/annotations/plot-band-page", annotationsRoot);
        annotationsRoot.subItems.push(annotationsExample);

        annotationsExample = new NavigationItem("Grid line", "examples/annotations/grid-line-page", annotationsRoot);
        annotationsRoot.subItems.push(annotationsExample);
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
