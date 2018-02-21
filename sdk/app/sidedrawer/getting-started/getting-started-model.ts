// >> sidedrawer-getting-started-model
import { Observable } from "tns-core-modules/data/observable";
import frame = require("tns-core-modules/ui/frame");
import { RadSideDrawer } from "nativescript-ui-sidedrawer";

export class GettingStartedViewModel extends Observable {
    constructor() {
        super();
        this.set("mainContentText", "SideDrawer for NativeScript can be easily setup in the XML definition of your page by defining main- and drawer-content. The component"
            + " has a default transition and position and also exposes notifications related to changes in its state. Swipe from left to open side drawer.");
    }

    public onOpenDrawerTap() {
        let sideDrawer: RadSideDrawer = <RadSideDrawer>( frame.topmost().getViewById("sideDrawer"));
        sideDrawer.showDrawer();
    }

    public onCloseDrawerTap() {
        let sideDrawer: RadSideDrawer = <RadSideDrawer>( frame.topmost().getViewById("sideDrawer"));
        sideDrawer.closeDrawer();
    }
}
// << sidedrawer-getting-started-model