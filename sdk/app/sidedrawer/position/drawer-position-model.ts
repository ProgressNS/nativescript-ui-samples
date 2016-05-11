import drawerModule = require("nativescript-telerik-ui-pro/sidedrawer");
import frameModule = require("ui/frame");

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
        sideDrawer.drawerLocation = drawerModule.SideDrawerLocation[location];
    }
    // << sidedrawer-setting-location
    private openDrawer() {
         var sideDrawer: drawerModule.RadSideDrawer = <drawerModule.RadSideDrawer>(frameModule.topmost().getViewById("sideDrawer"));
         sideDrawer.showDrawer();
    }
}
