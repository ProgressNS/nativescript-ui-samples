import * as pageModule from "tns-core-modules/ui/page";
import * as actionBarModule from "tns-core-modules/ui/action-bar";
import * as applicationModule from "tns-core-modules/application";
import { Frame } from "tns-core-modules/ui/frame";
import * as utilsModule from "tns-core-modules/utils/utils";

export class ExamplePage extends pageModule.Page {

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

        const actionBar = this.actionBar === undefined ? new actionBarModule.ActionBar() : this.actionBar;
        let title = "Default title";
        if (this._associatedExampleMeta && this._associatedExampleMeta.title) {
            title = this._associatedExampleMeta.title;
        }

        actionBar.title = title;
        const navigationButton = new actionBarModule.NavigationButton();
        if (applicationModule.android) {
            navigationButton.on("tap", args => {
                if (this.content) {
                    utilsModule.ad.dismissSoftInput(this.content.android);
                }
                Frame.topmost().goBack();
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
