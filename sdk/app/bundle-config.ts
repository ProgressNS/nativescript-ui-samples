require("globals");
if ((<any>global).TNS_WEBPACK) {
    //registers tns-core-modules UI framework modules
    require("bundle-entry-points");

    // register application modules
    // This will register each `page` postfixed xml, css, js, ts, scss etc. in the app/ folder
    const context = (<any>require).context("~/", true, /(page|fragment)\.(xml|css|js|ts|scss|less|sass)$/);
    global.registerWebpackModules(context);

    global.registerModule("nativescript-pro-ui/autocomplete", () => require("nativescript-pro-ui/autocomplete"));
    global.registerModule("nativescript-pro-ui/calendar", () => require("nativescript-pro-ui/calendar"));
    global.registerModule("nativescript-pro-ui/chart", () => require("nativescript-pro-ui/chart"));
    global.registerModule("nativescript-pro-ui/feedback", () => require("nativescript-pro-ui/feedback"));
    global.registerModule("nativescript-pro-ui/gauges", () => require("nativescript-pro-ui/gauges"));
    global.registerModule("nativescript-pro-ui/listview", () => require("nativescript-pro-ui/listview"));
    global.registerModule("nativescript-pro-ui/sidedrawer", () => require("nativescript-pro-ui/sidedrawer"));
}
