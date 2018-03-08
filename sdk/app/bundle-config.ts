require("globals");
if ((<any>global).TNS_WEBPACK) {
    //registers tns-core-modules UI framework modules
    require("bundle-entry-points");

    // register application modules
    // This will register each `page` postfixed xml, css, js, ts, scss etc. in the app/ folder
    const context = (<any>require).context("~/", true, /(page|fragment)\.(xml|css|js|ts|scss|less|sass)$/);
    global.registerWebpackModules(context);

    global.registerModule("nativescript-ui-autocomplete", () => require("nativescript-ui-autocomplete"));
    global.registerModule("nativescript-ui-calendar", () => require("nativescript-ui-calendar"));
    global.registerModule("nativescript-ui-chart", () => require("nativescript-ui-chart"));
    global.registerModule("nativescript-ui-dataform", () => require("nativescript-ui-dataform"));
    global.registerModule("nativescript-ui-gauge", () => require("nativescript-ui-gauge"));
    global.registerModule("nativescript-ui-listview", () => require("nativescript-ui-listview"));
    global.registerModule("nativescript-ui-sidedrawer", () => require("nativescript-ui-sidedrawer"));
    global.registerModule("nativescript-fresco", () => require("nativescript-fresco"));
}
