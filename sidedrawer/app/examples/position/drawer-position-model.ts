import * as drawerModule from "nativescript-ui-sidedrawer";
import * as frameModule from "tns-core-modules/ui/frame";

export class DrawerPositionModel {

    get drawerPositionText() {
        return "SideDrawer for NativeScript is shown from the left side of the app window by default." +
            " You can change this behavior by setting the drawerLocation property to Left, Top, Right or Bottom.";
    }

    public onRightLocationTap(args) {
        this.setDrawerLocation(drawerModule.SideDrawerLocation.Right);
        this.openDrawer();
    }

    public onLeftLocationTap(args) {
        this.setDrawerLocation(drawerModule.SideDrawerLocation.Left);
        this.openDrawer();
    }

    public onBottomLocationTap(args) {
        this.setDrawerLocation(drawerModule.SideDrawerLocation.Bottom);
        this.openDrawer();
    }
    // >> sidedrawer-setting-location
    public onTopLocationTap(args) {
        this.setDrawerLocation(drawerModule.SideDrawerLocation.Top);
        this.openDrawer();
    }

    private setDrawerLocation(location: drawerModule.SideDrawerLocation) {
        let sideDrawer: drawerModule.RadSideDrawer = <drawerModule.RadSideDrawer>(frameModule.topmost().getViewById("sideDrawer"));
        if (!sideDrawer) {
            return;
        }

        if (sideDrawer.android) {
            if (location === drawerModule.SideDrawerLocation.Top || location === drawerModule.SideDrawerLocation.Bottom) {
                sideDrawer.android.setDrawerCloseThreshold(20);
            } else {
                sideDrawer.android.setDrawerCloseThreshold(280);
            }
        }
        sideDrawer.drawerLocation = location;
    }
    // << sidedrawer-setting-location
    private openDrawer() {
        let sideDrawer: drawerModule.RadSideDrawer = <drawerModule.RadSideDrawer>(frameModule.topmost().getViewById("sideDrawer"));
        if (sideDrawer) {
            sideDrawer.showDrawer();
        }
    }

    private closeDrawer() {
        let sideDrawer: drawerModule.RadSideDrawer = <drawerModule.RadSideDrawer>(frameModule.topmost().getViewById("sideDrawer"));
        if (sideDrawer) {
            sideDrawer.closeDrawer();
        }
    }
}
