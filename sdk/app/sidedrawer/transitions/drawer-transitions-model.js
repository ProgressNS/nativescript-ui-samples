var frameModule = require("ui/frame");
var drawerModule = require("ui-for-nativescript/sidedrawer");
var DrawerTransitionsModel = (function () {
    function DrawerTransitionsModel() {
    }
    DrawerTransitionsModel.prototype.onFadeTransitionTap = function (args) {
        this.setDrawerTransition(new drawerModule.FadeTransition());
    };
    DrawerTransitionsModel.prototype.onPushTransitionTap = function (args) {
        this.setDrawerTransition(new drawerModule.PushTransition());
    };
    DrawerTransitionsModel.prototype.onRevealTransitionTap = function (args) {
        this.setDrawerTransition(new drawerModule.RevealTransition());
    };
    DrawerTransitionsModel.prototype.onReverseSlideOutTransitionTap = function (args) {
        this.setDrawerTransition(new drawerModule.ReverseSlideOutTransition());
    };
    DrawerTransitionsModel.prototype.onScaleDownPusherTransitionTap = function (args) {
        this.setDrawerTransition(new drawerModule.ScaleDownPusherTransition());
    };
    DrawerTransitionsModel.prototype.onScaleUpTransitionTap = function (args) {
        this.setDrawerTransition(new drawerModule.ScaleUpTransition());
    };
    DrawerTransitionsModel.prototype.onSlideAlongTransitionTap = function (args) {
        this.setDrawerTransition(new drawerModule.SlideAlongTransition());
    };
    DrawerTransitionsModel.prototype.onSlideInOnTopTransitionTap = function (args) {
        this.setDrawerTransition(new drawerModule.SlideInOnTopTransition());
    };
    DrawerTransitionsModel.prototype.setDrawerTransition = function (transition) {
        var drawer = frameModule.topmost().getViewById("sideDrawer");
        drawer.drawerTransition = transition;
    };
    return DrawerTransitionsModel;
})();
exports.DrawerTransitionsModel = DrawerTransitionsModel;
