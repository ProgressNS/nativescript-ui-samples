var drawerModule = require("ui-for-nativescript/sidedrawer");
var frameModule = require("ui/frame");
var DrawerPositionModel = (function () {
    function DrawerPositionModel() {
    }
    Object.defineProperty(DrawerPositionModel.prototype, "drawerPositionText", {
        get: function () {
            return "SideDrawer for NativeScript is shown from the left side of the app window by default." +
                " You can change this behavior by setting the drawerLocation property to Left, Top, Right or Bottom.";
        },
        enumerable: true,
        configurable: true
    });
    DrawerPositionModel.prototype.onRightLocationTap = function (args) {
        this.setDrawerLocation(drawerModule.SideDrawerLocation.Right);
    };
    DrawerPositionModel.prototype.onLeftLocationTap = function (args) {
        this.setDrawerLocation(drawerModule.SideDrawerLocation.Left);
    };
    DrawerPositionModel.prototype.onBottomLocationTap = function (args) {
        this.setDrawerLocation(drawerModule.SideDrawerLocation.Bottom);
    };
    DrawerPositionModel.prototype.onTopLocationTap = function (args) {
        this.setDrawerLocation(drawerModule.SideDrawerLocation.Top);
    };
    DrawerPositionModel.prototype.setDrawerLocation = function (location) {
        var sideDrawer = frameModule.topmost().getViewById("sideDrawer");
        sideDrawer.drawerLocation = location;
    };
    return DrawerPositionModel;
})();
exports.DrawerPositionModel = DrawerPositionModel;
