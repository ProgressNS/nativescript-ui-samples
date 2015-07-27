import drawerModule = require("./../../TelerikUI/sidedrawer");
import observableModule = require("ui/core/dependency-observable");

export class DrawerCallbacksModel extends observableModule.DependencyObservable implements drawerModule.DrawerStateDelegate {

    constructor() {
        super();
    }

    public onDrawerOpening() {
        this.set("currentDrawerNotification", "Drawer opening");
    }

    public onDrawerOpened() {
        this.set("currentDrawerNotification", "Drawer opened");
    }

    public onDrawerClosing() {
        this.set("currentDrawerNotification", "Drawer closing");
    }

    public onDrawerClosed() {
        this.set("currentDrawerNotification", "Drawer closed");
    }
}
