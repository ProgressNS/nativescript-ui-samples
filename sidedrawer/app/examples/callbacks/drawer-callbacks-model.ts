import { RadSideDrawer, DrawerStateChangingEventArgs, DrawerStateChangedEventArgs } from "nativescript-ui-sidedrawer";
import { Observable } from "tns-core-modules/data/observable";
import { topmost } from "tns-core-modules/ui/frame";

export class DrawerCallbacksModel extends Observable {

    constructor() {
        super();
    }

    public onCloseDrawerTap() {
        let sideDrawer: RadSideDrawer = <RadSideDrawer>(topmost().getViewById("sideDrawer"));
        sideDrawer.closeDrawer();
    }

    public onOpenDrawerTap() {
        let sideDrawer: RadSideDrawer = <RadSideDrawer>(topmost().getViewById("sideDrawer"));
        sideDrawer.showDrawer();
    }

    public onDrawerOpening(args: DrawerStateChangingEventArgs) {
        this.set("currentDrawerNotification", "Drawer opening");
    }

    public onDrawerOpened(args: DrawerStateChangedEventArgs) {
        this.set("currentDrawerNotification", "Drawer opened");
    }

    public onDrawerClosing(args: DrawerStateChangingEventArgs) {
        this.set("currentDrawerNotification", "Drawer closing");
    }

    public onDrawerClosed(args: DrawerStateChangedEventArgs) {
        this.set("currentDrawerNotification", "Drawer closed");
    }

    public onDrawerPan(args: DrawerStateChangedEventArgs) {
        this.set("currentDrawerNotification", "Drawer pan");
    }
}
