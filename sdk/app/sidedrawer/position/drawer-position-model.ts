import drawerModule = require("nativescript-telerik-ui/radsidedrawer");
import frameModule = require("ui/frame");

export class DrawerPositionModel {

    get drawerPositionText() {
        return "SideDrawer for NativeScript is shown from the left side of the app window by default." +
            " You can change this behavior by setting the drawerLocation property to Left, Top, Right or Bottom.";
    }

    public onRightLocationTap(args) {
        this.setDrawerLocation(drawerModule.SideDrawerLocation.Right);
    }

    public onLeftLocationTap(args) {
        this.setDrawerLocation(drawerModule.SideDrawerLocation.Left);
    }

    public onBottomLocationTap(args) {
        this.setDrawerLocation(drawerModule.SideDrawerLocation.Bottom);
    }

    public onTopLocationTap(args) {
        this.setDrawerLocation(drawerModule.SideDrawerLocation.Top);
    }

    private setDrawerLocation(location: drawerModule.SideDrawerLocation) {
        var sideDrawer: drawerModule.RadSideDrawer = frameModule.topmost().getViewById("sideDrawer");
        sideDrawer.drawerLocation = location;
    }
}
