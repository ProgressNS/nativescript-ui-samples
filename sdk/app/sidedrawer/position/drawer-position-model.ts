import drawerModule = require("nativescript-ui-sidedrawer");
import frameModule = require("tns-core-modules/ui/frame");

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
        var sideDrawer: drawerModule.RadSideDrawer = <drawerModule.RadSideDrawer>(frameModule.topmost().getViewById("sideDrawer"));
        if(sideDrawer.android) {
            if (location == drawerModule.SideDrawerLocation.Top || location == drawerModule.SideDrawerLocation.Bottom) {
                sideDrawer.android.setDrawerCloseThreshold(20);
            } else {
                sideDrawer.android.setDrawerCloseThreshold(280);
            }
        }
        sideDrawer.drawerLocation = location;
    }
    // << sidedrawer-setting-location
    private openDrawer() {
         var sideDrawer: drawerModule.RadSideDrawer = <drawerModule.RadSideDrawer>(frameModule.topmost().getViewById("sideDrawer"));
         sideDrawer.showDrawer();
    }

    private closeDrawer() {
         var sideDrawer: drawerModule.RadSideDrawer = <drawerModule.RadSideDrawer>(frameModule.topmost().getViewById("sideDrawer"));
         sideDrawer.closeDrawer();
    }
}
