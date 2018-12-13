import * as drawerModule from "nativescript-ui-sidedrawer";
import * as frameModule from "tns-core-modules/ui/frame";
import * as colorModule from "tns-core-modules/color";

export class DrawerShadowModel {

    get drawerShadowText() {
        return "SideDrawer for NativeScript is shown from the left side of the app window by default." +
            " You can set the drawer to display shadow in iOS. In Android the shadow is shown by default";
    }

    public onRightLocationTap(args) {
        this.setDrawerLocation(drawerModule.SideDrawerLocation.Right);
        this.openDrawer();
    }

    public onDefaultShadowTap(args) {
        let sideDrawer: drawerModule.RadSideDrawer = <drawerModule.RadSideDrawer>(frameModule.topmost().getViewById("sideDrawer"));
        if (sideDrawer) {
            sideDrawer.shadowColor = null;
            this.openDrawer();
        }
    }


    public onNoShadowTap(args) {
        let sideDrawer: drawerModule.RadSideDrawer = <drawerModule.RadSideDrawer>(frameModule.topmost().getViewById("sideDrawer"));
        let noColor = new colorModule.Color("#00000000");
        if (sideDrawer) {
            sideDrawer.shadowColor = noColor;
            this.openDrawer();
        }
    }

    public onColorfulShadowTap(args) {
        let sideDrawer: drawerModule.RadSideDrawer = <drawerModule.RadSideDrawer>(frameModule.topmost().getViewById("sideDrawer"));
        let redColor = new colorModule.Color("#FF0000");
        if (sideDrawer) {
            sideDrawer.shadowColor = redColor;
            this.openDrawer();
        }
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
