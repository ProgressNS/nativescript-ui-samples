import observable = require("data/observable");
import view = require("ui/core/view");
import localSettings = require("application-settings");
import platform = require("platform");
import appModule = require("application");
import types = require("utils/types");


export interface Example {
    Id: string;
    title: string;
    description: string;
    group: string;
    moduleName: string;
    isControl? : boolean;
    isExampleGroup?: boolean;
}

//////////////////////////////////////////////////////////
export class AppViewModel extends observable.Observable {

    private _examples: Array<Example>;

    constructor() {
        super();
        this.set("actionBarTitle", "{N} RichUI Examples");
        this.set("isExamplesPage", true);
        this._examples = new Array<Example>();
        this.loadData();
    }

    private loadData(): void {

        this._examples.push({ Id: "1", title: "Chart", group: "controls", description: "Telerik Chart for NativeScript", isControl: true , moduleName: ""});
        this._examples.push({ Id: "2", title: "Series", group: "chart series", description: "All available chart series", isExampleGroup: true, moduleName: ""});
        this._examples.push({ Id: "3", title: "Line series", group: "chart series", description: "", moduleName: "./chart/series/line/line-series" });
        this._examples.push({ Id: "4", title: "Spline series", group: "chart series", description: "", moduleName: "./chart/series/spline/spline-series" });
        this._examples.push({ Id: "5", title: "Area series", group: "chart series", description: "", moduleName: "./chart/series/area/area-series" });
        this._examples.push({ Id: "6", title: "Stacked Area series", group: "chart series", description: "", moduleName: "./chart/series/area/stacked-area-series" });
        this._examples.push({ Id: "7", title: "Bar series", group: "chart series", description: "", moduleName: "./chart/series/bar/bar-series" });
        this._examples.push({ Id: "8", title: "Stacked Bar series", group: "chart series", description: "", moduleName: "./chart/series/bar/stacked-bar-series" });
        this._examples.push({ Id: "9", title: "Bubble series", group: "chart series", description: "", moduleName: "./chart/series/bubble/bubble-series" });
        this._examples.push({ Id: "10", title: "Scatter Bubble series", group: "chart series", description: "", moduleName: "./chart/series/bubble/scatter-bubble-series" });
        this._examples.push({ Id: "11", title: "Donut series", group: "chart series", description: "", moduleName: "./chart/series/donut/donut-series" });
        this._examples.push({ Id: "12", title: "Pie series", group: "chart series", description: "", moduleName: "./chart/series/pie/pie-series" });
        this._examples.push({ Id: "13", title: "Candlestick series", group: "chart series", description: "", moduleName: "./chart/series/financial/candlestick-series" });
        this._examples.push({ Id: "14", title: "Ohlc series", group: "chart series", description: "", moduleName: "./chart/series/financial/ohlc-series" });
        this._examples.push({ Id: "15", title: "Scatter series", group: "chart series", description: "", moduleName: "./chart/series/scatter/scatter-series" });

        this._examples.push({ Id: "16", title: "Annotations", group: "annotations", description: "Chart annotations", isExampleGroup: true , moduleName: ""});
        this._examples.push({ Id: "17", title: "Grid line annotation", group: "annotations", description: "", moduleName: "./chart/annotations/grid-line" });
        this._examples.push({ Id: "18", title: "Plot band annotation", group: "annotations", description: "", moduleName: "./chart/annotations/plot-band" });
        
        this._examples.push({ Id: "19", title: "Legend", group: "chart series", description: "Chart legend", isExampleGroup: true , moduleName: ""});
        this._examples.push({ Id: "20", title: "Legend overview", group: "chart series", description: "", moduleName: "./chart/legend/chart-legend" });

        this._examples.push({ Id: "21", title: "Behaviors", group: "behaviors", description: "Chart behaviors for interaction", isExampleGroup: true , moduleName: ""});
        this._examples.push({ Id: "22", title: "Series Selection", group: "behaviors", description: "", moduleName: "./chart/behaviors/chart-series-selection" });
        this._examples.push({ Id: "23", title: "Data points Selection", group: "behaviors", description: "", moduleName: "./chart/behaviors/chart-datapoint-selection" });
        this._examples.push({ Id: "24", title: "Pie chart Selection", group: "behaviors", description: "", moduleName: "./chart/behaviors/chart-pie-selection" });
        this._examples.push({ Id: "25", title: "Pan & Zoom", group: "behaviors", description: "", moduleName: "./chart/behaviors/chart-pan-zoom" });

        this._examples.push({ Id: "26", title: "Styling", group: "chart series", description: "Chart styling", isExampleGroup: true , moduleName: ""});
        this._examples.push({ Id: "27", title: "Styling chart axes", group: "chart series", description: "", moduleName: "./chart/styling/styling-axes" });
        this._examples.push({ Id: "28", title: "Styling chart grid", group: "chart series", description: "", moduleName: "./chart/styling/styling-grid" });
        this._examples.push({ Id: "29", title: "Styling series", group: "chart series", description: "", moduleName: "./chart/styling/styling-series" });
        this._examples.push({ Id: "30", title: "Styling labels", group: "chart series", description: "", moduleName: "./chart/styling/styling-labels" });
        this._examples.push({ Id: "31", title: "Styling series selection", group: "chart series", description: "", moduleName: "./chart/styling/styling-selection" });

        this._examples.push({ Id: "32", title: "Axes", group: "chart series", description: "Demos of the different axes", isExampleGroup: true , moduleName: ""});
        this._examples.push({ Id: "33", title: "Multiple axes", group: "chart series", description: "", moduleName: "./chart/axes/multiple/multiple-axes" });
        this._examples.push({ Id: "34", title: "Customization", group: "chart series", description: "", moduleName: "./chart/axes/customization/axes-customization" });


        this._examples.push({ Id: "35", title: "SideDrawer", group: "controls", description: "Telerik SideDrawer for NativeScript", isControl: true , moduleName: ""});
        this._examples.push({ Id: "36", title: "Getting started", group: "sidedrawer features", description: "", moduleName: "./sidedrawer/getting-started/getting-started" });
        this._examples.push({ Id: "37", title: "Position", group: "sidedrawer features", description: "", moduleName: "./sidedrawer/position/drawer-position" });
        this._examples.push({ Id: "38", title: "Transitions", group: "sidedrawer features", description: "", moduleName: "./sidedrawer/transitions/drawer-transitions" });
        this._examples.push({ Id: "39", title: "Events", group: "sidedrawer features", description: "", moduleName: "./sidedrawer/callbacks/drawer-callbacks" });
        this._examples.push({ Id: "40", title: "Drawer Over Navigation", group: "sidedrawer features", description: "", moduleName: "./sidedrawer/over-navigation/drawer-over-navigation" });

        this._examples.push({ Id: "41", title: "ListView", group: "controls", description: "Telerik ListView for NativeScript", isControl: true , moduleName: ""});
        this._examples.push({ Id: "42", title: "Item animations", group: "listview features", description: "", moduleName: "./listview/item-animations/item-animations" });
        this._examples.push({ Id: "43", title: "Item layouts: linear", group: "listview features", description: "", moduleName: "./listview/item-layouts/item-layouts-linear" });
        this._examples.push({ Id: "44", title: "Item layouts: grid", group: "listview features", description: "", moduleName: "./listview/item-layouts/item-layouts-grid" });
        this._examples.push({ Id: "45", title: "Item layouts: staggered", group: "listview features", description: "", moduleName: "./listview/item-layouts/item-layouts-staggered" });
        this._examples.push({ Id: "46", title: "Item reorder", group: "listview features", description: "", moduleName: "./listview/item-reorder/item-reorder" });
        this._examples.push({ Id: "47", title: "Load on demand", group: "listview features", description: "", moduleName: "./listview/load-on-demand/load-on-demand" });
        this._examples.push({ Id: "48", title: "Observable array", group: "listview features", description: "", moduleName: "./listview/observable-array/observable-array" });
        this._examples.push({ Id: "49", title: "Pull to refresh", group: "listview features", description: "", moduleName: "./listview/pull-to-refresh/pull-to-refresh" });
        this._examples.push({ Id: "50", title: "Swipe to execute", group: "listview features", description: "", moduleName: "./listview/swipe-execute/swipe-execute" });
        this._examples.push({ Id: "51", title: "Single selection", group: "listview features", description: "", moduleName: "./listview/listview-selection/single-selection" });
        this._examples.push({ Id: "52", title: "Multiple selection", group: "listview features", description: "", moduleName: "./listview/listview-selection/multiple-selection" });
        this._examples.push({ Id: "53", title: "Programmatic selection", group: "listview features", description: "", moduleName: "./listview/listview-selection/programmatic-selection" });
        this._examples.push({ Id: "54", title: "Item Loading", group: "listview features", description: "", moduleName: "./listview/item-loading/item-loading" });
        
        this._examples.push({ Id: "55", title: "Calendar", group: "controls", description: "Telerik Calendar for NativeScript", isControl: true, moduleName: "" });
        this._examples.push({ Id: "56", title: "Getting started", group: "calendar features", description: "", moduleName: "./calendar/getting-started/getting-started" });
        this._examples.push({ Id: "57", title: "Selection modes", group: "calendar features", description: "", moduleName: "./calendar/selection-modes/selection-modes" });
        this._examples.push({ Id: "58", title: "View modes", group: "calendar features", description: "", moduleName: "./calendar/view-modes/view-modes" });
        this._examples.push({ Id: "59", title: "Populating with data", group: "calendar features", description: "", moduleName: "./calendar/populating-with-data/populating-with-data" });
        this._examples.push({ Id: "60", title: "Events", group: "calendar features", description: "", moduleName: "./calendar/events/events" });
        this._examples.push({ Id: "61", title: "Programatic control", group: "calendar features", description: "", moduleName: "./calendar/programatic-control/programatic-control" });
        this._examples.push({ Id: "62", title: "Transition modes", group: "calendar features", description: "", moduleName: "./calendar/transition-modes/transition-modes" });
        this._examples.push({ Id: "63", title: "Events view modes", group: "calendar features", description: "", moduleName: "./calendar/events-view-modes/events-view-modes" });
        this._examples.push({ Id: "64", title: "Calendar styling", group: "calendar features", description: "", moduleName: "./calendar/cell-styling/cell-styles"});

        this._examples.push({ Id: "65", title: "AutoCompleteTextView(Beta)", group: "controls", description: "Telerik AutoComplete for NativeScript", isControl: true, moduleName: "" });
        this._examples.push({ Id: "66", title: "Getting Started", group: "autocomplete features", description: "", moduleName: "./autocomplete/getting-started/autocomplete-getting-started" });
        this._examples.push({ Id: "67", title: "Tokens Layouts", group: "autocomplete features", description: "", moduleName: "./autocomplete/layouts/autocomplete-layout" });
        this._examples.push({ Id: "68", title: "Customization", group: "autocomplete features", description: "", moduleName: "./autocomplete/customization/autocomplete-customization" });
        this._examples.push({ Id: "69", title: "Events", group: "autocomplete features", description: "", moduleName: "./autocomplete/events/autocomplete-events" });
        this._examples.push({ Id: "70", title: "Async Data Fetch", group: "autocomplete asyc data", description: "", moduleName: "./autocomplete/remote-data-fetch/autocomplete-remote" });
        
        this._examples.push({ Id: "71", title: "Gauges", group: "controls", description: "Telerik Gauges for NativeScript", isControl: true, moduleName: "" });
        this._examples.push({ Id: "72", title: "Getting Started", group: "gauges features", description: "", moduleName: "./gauges/getting-started/getting-started" });
        this._examples.push({ Id: "73", title: "Scales", group: "gauges features", description: "", moduleName: "./gauges/scales/scales" });
        this._examples.push({ Id: "74", title: "Scales", group: "gauges features", description: "", moduleName: "./gauges/customization/customization" });
        this._examples.push({ Id: "75", title: "Scales", group: "gauges features", description: "", moduleName: "./gauges/animations/animations" });
    }

    get examples(): Array<Example> {
        return this._examples;
    }
}

export var appModel = new AppViewModel();
