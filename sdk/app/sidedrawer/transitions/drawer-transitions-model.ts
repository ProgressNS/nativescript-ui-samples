import frameModule = require("ui/frame");
import drawerModule = require("nativescript-telerik-ui/sidedrawer");
import observableModule = require("data/observable");

export class DrawerTransitionsModel {
    public onFadeTransitionTap(args) {
        this.setDrawerTransition(new drawerModule.FadeTransition());
        this.openSideDrawer();
    }

    public onPushTransitionTap(args) {
        this.setDrawerTransition(new drawerModule.PushTransition());
        this.openSideDrawer();
    }

    public onRevealTransitionTap(args) {
        this.setDrawerTransition(new drawerModule.RevealTransition());
        this.openSideDrawer();
    }

    public onReverseSlideOutTransitionTap(args) {
        this.setDrawerTransition(new drawerModule.ReverseSlideOutTransition());
        this.openSideDrawer();
    }

    public onScaleDownPusherTransitionTap(args) {
        this.setDrawerTransition(new drawerModule.ScaleDownPusherTransition());
        this.openSideDrawer();
    }

    public onScaleUpTransitionTap(args) {
        this.setDrawerTransition(new drawerModule.ScaleUpTransition());
        this.openSideDrawer();
    }

    public onSlideAlongTransitionTap(args) {
        this.setDrawerTransition(new drawerModule.SlideAlongTransition());
        this.openSideDrawer();
    }

    public onSlideInOnTopTransitionTap(args) {
        this.setDrawerTransition(new drawerModule.SlideInOnTopTransition());
        this.openSideDrawer();
    }

    public openSideDrawer(args: observableModule.EventData) {
        var drawer: drawerModule.RadideDrawer = <drawerModule.RadSideDrawer>frameModule.topmost().getViewById("sideDrawer");
        drawer.showDrawer();
    }

    private setDrawerTransition(transition: drawerModule.DrawerTransitionBase) {
        var drawer: drawerModule.RadSideDrawer = <drawerModule.RadSideDrawer>frameModule.topmost().getViewById("sideDrawer");
        drawer.drawerTransition = transition;
    }
}
