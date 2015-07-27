import observableModule = require("data/observable");

export class GettingStartedViewModel extends observableModule.Observable {
    constructor() {
        super();
        this.set("mainContentText", "SideDrawer for NativeScript can be easily setup in the XML definition of your page by defining main- and drawer-content. The component"
            + " has a default transition and position and also exposes notifications related to changes in its state.");
    }

}
