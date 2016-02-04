import pageModule = require("ui/page");
import actionBarModule = require("ui/action-bar");
import applicationModule = require("application");
import frameModule = require("ui/frame");

export class ExamplePage extends pageModule.Page {

    private _associatedExampleMeta;

    public constructor() {
        super();
        var that = new WeakRef(this);
        this.on("navigatingTo", function(args) {
            that.get()._associatedExampleMeta = args.context;
        });


    }

    public onLoaded(args) {
        super.onLoaded(args);
       
        if (applicationModule.android) {
            var actionBar = new actionBarModule.ActionBar();
            actionBar.title = this._associatedExampleMeta.title;
            var navigationButton = new actionBarModule.NavigationButton();
            navigationButton.on("tap", args =>
            { frameModule.topmost().goBack() });
            navigationButton.icon = "res://ic_menu_back";
            actionBar.navigationButton = navigationButton;
            this.actionBar = actionBar;
        }
    }
}
