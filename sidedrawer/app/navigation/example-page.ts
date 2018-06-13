import { Page } from "tns-core-modules/ui/page";
import { ActionBar, NavigationButton } from "tns-core-modules/ui/action-bar";
import { isAndroid } from "tns-core-modules/platform";
import { topmost } from "tns-core-modules/ui/frame";
import { ad as androidUtils } from "tns-core-modules/utils/utils";

export class ExamplePage extends Page {
    private _associatedExampleMeta;

    public constructor() {
        super();
        let that = new WeakRef(this);
        this.on("navigatingTo", function (args) {
            that.get()._associatedExampleMeta = args.context;
        });
    }

    public onLoaded() {
        super.onLoaded();

        let actionBar = this.actionBar === undefined ? new ActionBar() : this.actionBar;
        let title = "Default title";
        if (this._associatedExampleMeta && this._associatedExampleMeta.title) {
            title = this._associatedExampleMeta.title;
        }

        actionBar.title = title;
        let navigationButton = new NavigationButton();
        if (isAndroid) {
            navigationButton.on("tap", args => {
                if (this.content) {
                    androidUtils.dismissSoftInput(this.content.android);
                }
                topmost().goBack();
            });
            navigationButton.android.systemIcon = "ic_menu_back";
            actionBar.navigationButton = navigationButton;

        } else {
            navigationButton.text = "Back";
            actionBar.navigationButton = navigationButton;
        }

        if (this.actionBar !== actionBar) {
            this.actionBar = actionBar;
        }
    }
}