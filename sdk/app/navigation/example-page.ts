import pageModule = require("tns-core-modules/ui/page");
import actionBarModule = require("tns-core-modules/ui/action-bar");
import applicationModule = require("tns-core-modules/application");
import frameModule = require("tns-core-modules/ui/frame");
import utilsModule = require("tns-core-modules/utils/utils");

export class ExamplePage extends pageModule.Page {

    private _associatedExampleMeta;

    public constructor() {
        super();
        var that = new WeakRef(this);
        this.on("navigatingTo", function (args) {
            that.get()._associatedExampleMeta = args.context;
        });


    }

    public onLoaded() {
        super.onLoaded();

        var actionBar = this.actionBar === undefined ? new actionBarModule.ActionBar() : this.actionBar;
        actionBar.title = this._associatedExampleMeta.title;
        if (applicationModule.android) {
            var navigationButton = new actionBarModule.NavigationButton();
            navigationButton.on("tap", args => {
                if (this.content) {
                    utilsModule.ad.dismissSoftInput(this.content.android);
                }
                frameModule.topmost().goBack();
            });
            navigationButton.icon = "res://ic_arrow_back_black_24dp";
            actionBar.navigationButton = navigationButton;

        }
        if (this.actionBar !== actionBar) {
            this.actionBar = actionBar;
        }
    }
}
