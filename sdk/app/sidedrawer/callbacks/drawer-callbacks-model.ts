import drawerModule = require("nativescript-telerik-ui-pro/sidedrawer");
import observableModule = require("tns-core-modules/data/observable");
import frameModule = require("tns-core-modules/ui/frame");

export class DrawerCallbacksModel extends observableModule.Observable {

    constructor() {
        super();
    }

    public onCloseDrawerTap() {
        let sideDrawer: drawerModule.RadSideDrawer = <drawerModule.RadSideDrawer>( frameModule.topmost().getViewById("sideDrawer"));
        sideDrawer.closeDrawer();
    }
    
    public onOpenDrawerTap() {
        let sideDrawer: drawerModule.RadSideDrawer = <drawerModule.RadSideDrawer>( frameModule.topmost().getViewById("sideDrawer"));
        sideDrawer.showDrawer();
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

    public onDrawerPan() {
        this.set("currentDrawerNotification", "Drawer pan");
    }
}
