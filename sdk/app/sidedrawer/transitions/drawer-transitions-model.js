var frameModule = require("ui/frame");
var drawerModule = require("nativescript-telerik-ui/sidedrawer");
var DrawerTransitionsModel = (function () {
    function DrawerTransitionsModel() {
    }
    DrawerTransitionsModel.prototype.onFadeTransitionTap = function (args) {
        this.setDrawerTransition(new drawerModule.FadeTransition());
        this.openSideDrawer();
    };
    DrawerTransitionsModel.prototype.onPushTransitionTap = function (args) {
        this.setDrawerTransition(new drawerModule.PushTransition());
        this.openSideDrawer();
    };
    DrawerTransitionsModel.prototype.onRevealTransitionTap = function (args) {
        this.setDrawerTransition(new drawerModule.RevealTransition());
        this.openSideDrawer();
    };
    DrawerTransitionsModel.prototype.onReverseSlideOutTransitionTap = function (args) {
        this.setDrawerTransition(new drawerModule.ReverseSlideOutTransition());
        this.openSideDrawer();
    };
    DrawerTransitionsModel.prototype.onScaleDownPusherTransitionTap = function (args) {
        this.setDrawerTransition(new drawerModule.ScaleDownPusherTransition());
        this.openSideDrawer();
    };
    DrawerTransitionsModel.prototype.onScaleUpTransitionTap = function (args) {
        this.setDrawerTransition(new drawerModule.ScaleUpTransition());
        this.openSideDrawer();
    };
    DrawerTransitionsModel.prototype.onSlideAlongTransitionTap = function (args) {
        this.setDrawerTransition(new drawerModule.SlideAlongTransition());
        this.openSideDrawer();
    };
    DrawerTransitionsModel.prototype.onSlideInOnTopTransitionTap = function (args) {
        this.setDrawerTransition(new drawerModule.SlideInOnTopTransition());
        this.openSideDrawer();
    };
    DrawerTransitionsModel.prototype.openSideDrawer = function (args) {
        var drawer = frameModule.topmost().getViewById("sideDrawer");
        drawer.showDrawer();
    };
    DrawerTransitionsModel.prototype.setDrawerTransition = function (transition) {
        var drawer = frameModule.topmost().getViewById("sideDrawer");
        drawer.drawerTransition = transition;
    };
    return DrawerTransitionsModel;
})();
exports.DrawerTransitionsModel = DrawerTransitionsModel;
