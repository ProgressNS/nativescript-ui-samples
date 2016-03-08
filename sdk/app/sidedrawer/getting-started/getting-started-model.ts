import observableModule = require("data/observable");
import frame = require("ui/frame");
import drawerModule = require("nativescript-telerik-ui-pro/sidedrawer");

export class GettingStartedViewModel extends observableModule.Observable {
    constructor() {
        super();
        this.set("mainContentText", "SideDrawer for NativeScript can be easily setup in the XML definition of your page by defining main- and drawer-content. The component"
            + " has a default transition and position and also exposes notifications related to changes in its state. Swipe from left to open side drawer.");
    }
}
