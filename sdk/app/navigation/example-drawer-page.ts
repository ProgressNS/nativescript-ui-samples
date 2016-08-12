import pageModule = require("nativescript-telerik-ui-pro/sidedrawer/drawerpage");
import actionBarModule = require("ui/action-bar");
import applicationModule = require("application");
import frameModule = require("ui/frame");

export class ExampleDrawerPage extends pageModule.DrawerPage {

    private _associatedExampleMeta;

    public constructor() {
        super();
        var that = new WeakRef(this);
        this.on("navigatingTo", function(args) {
            that.get()._associatedExampleMeta = args.context;
        });
    }

    public onLoaded() {
        super.onLoaded();

        var actionBar = this.actionBar === undefined ? new actionBarModule.ActionBar() : this.actionBar;
        actionBar.title = this._associatedExampleMeta.title;
        if (applicationModule.android) {
            var navigationButton = new actionBarModule.NavigationButton();
            navigationButton.on("tap", args =>
            { frameModule.topmost().goBack() });
            navigationButton.icon = "res://ic_arrow_back_black_24dp";
            actionBar.navigationButton = navigationButton;

        }
        if (this.actionBar !== actionBar) {
            this.actionBar = actionBar;
        }
    }
}
